import * as _easync from 'exupery-core-async'
import * as _ei from 'exupery-core-internals'

import { stat as fs_stat } from "fs"

import * as d from "../../../interface/generated/pareto/schemas/stat/data_types/target"
import { Signature } from "../../../interface/algorithms/queries/unguaranteed/stat"


export const $$: _easync.Unguaranteed_Query_Initializer<d.Parameters, d.Result, d.Errors> = (
    $p
) => {
    const __possibly_escape_filename = (path: string, escape: boolean): string => {
        if (escape) {
            return path.replace(/ /g, '_')
        }
        return path
    }
    return _easync.__create_unguaranteed_query({
        'execute': (on_value, on_exception) => {
            fs_stat(__possibly_escape_filename($p.path, $p['escape spaces in path']), (err, stats) => {
                if (err) {
                    on_exception(_ei.block((): d.Errors => {
                        if (err.code === 'ENOENT') {
                            return ['node does not exist', null]
                        }
                        return _ei.panic(`unhandled fs.stat error code: ${err.code}`)
                    }))
                }
                on_value(stats.isFile()
                    ? ['file', null]
                    : ['directory', null]
                )
            })
        }
    })
}