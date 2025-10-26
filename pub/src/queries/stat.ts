import * as _easync from 'exupery-core-async'
import * as _ei from 'exupery-core-internals'

import { stat as fs_stat } from "fs"

import { $$ as __possibly_escape_filename } from "../__internal/possibly_escape_file_name"
import * as ParameterTypes from "../generated/interface/schemas/parameters/data_types/target"
import * as ResultTypes from "../generated/interface/schemas/results/data_types/target"
import * as ErrorTypes from "../generated/interface/schemas/errors/data_types/target"

export const $$: _easync.Unguaranteed_Query_Initializer<ParameterTypes.Path, ResultTypes.Node_Type, ErrorTypes.Stat> = (
    $p
) => {
    return _easync.__create_unguaranteed_query({
        'execute': (on_value, on_exception) => {
            fs_stat(__possibly_escape_filename($p.path, $p['escape spaces in path']), (err, stats) => {
                if (err) {
                    on_exception(_ei.block(() => {
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