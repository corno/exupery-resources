import * as _easync from 'exupery-core-async'
import * as _ei from 'exupery-core-internals'
import * as _et from 'exupery-core-types'

import { mkdir as fs_mkdir } from "fs"

import * as d from "../../../../interface/generated/pareto/schemas/make_directory/data_types/target"
import { Signature } from "../../../../interface/algorithms/procedures/unguaranteed/make_directory"


export const $$: _easync.Unguaranteed_Procedure_Initializer<d.Parameters, d.Errors> = (
    $p,
) => {
    const __possibly_escape_filename = (path: string, escape: boolean): string => {
        if (escape) {
            return path.replace(/ /g, '_')
        }
        return path
    }
    return _easync.__create_unguaranteed_procedure({
        'execute': (on_success, on_exception) => {
            fs_mkdir(
                __possibly_escape_filename($p.path, $p['escape spaces in path']),
                {
                    'recursive': true,
                },
                (err, path) => {
                    if (err) {
                        on_exception(_ei.block((): d.Errors => {
                            if (err.code === 'EEXIST') {
                                return ['directory already exists', null]
                            }
                            return _ei.panic(`unhandled fs.mkdir error code: ${err.code}`)
                        }))
                    } else {
                        on_success()
                    }
                }
            )
        }
    })
}