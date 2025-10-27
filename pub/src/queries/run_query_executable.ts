import * as _easync from 'exupery-core-async'
import * as _ei from 'exupery-core-internals'
import * as _et from 'exupery-core-types'

import { spawn } from "node:child_process"

// Temporary local type system — you will generate proper schemas later
// ---------------------------------------------------------------
export namespace d {
    export type Parameters = {
        program: string
        args: _et.Array<string>
    }

    // Successful result: stdout is meaningful
    export type Result = {
            stdout: string
        }

    // Errors we explicitly model
    export type Errors =
        | ['failed to spawn', {
            message: string
        }]
        | ['non zero exit code', {
            exitCode: number
            stderr: string
        }]
}
// ---------------------------------------------------------------

export const $$: _easync.Unguaranteed_Query_Initializer<d.Parameters, d.Result, d.Errors> = (
    $p
) => {
    const args = $p.args.__get_raw_copy()
    return _easync.__create_unguaranteed_query({
        'execute': (on_value, on_exception) => {

            const child = spawn($p.program, args, {
                shell: false, // ✅ no implicit parsing
            })

            let stdoutData = ""
            let stderrData = ""

            child.stdout.on("data", chunk => {
                stdoutData += chunk.toString("utf8")
            })

            child.stderr.on("data", chunk => {
                stderrData += chunk.toString("utf8")
            })

            child.on("error", err => {
                on_exception(_ei.block((): d.Errors => {
                    return ['failed to spawn', {
                        message: err instanceof Error ? err.message : `${err}`
                    }]
                }))
            })

            child.on("close", exitCode => {
                if (exitCode === 0) {
                    on_value( {
                        stdout: stdoutData,
                    })
                } else {
                    on_exception(_ei.block((): d.Errors => {
                        return ['non zero exit code', {
                            exitCode: exitCode ?? -1,
                            stderr: stderrData,
                        }]
                    }))
                }
            })
        }
    })
}
