import * as _easync from 'exupery-core-async'
import * as _ei from 'exupery-core-internals'

import * as fs from "fs"

import { $$ as __possibly_escape_filename } from "../__internal/possibly_escape_file_name"
import * as D from "../types"

export const $$: _easync.Unguaranteed_Query_Initializer<D.Path, D.Node_Type, D.Stat_Error> = (
    $p
) => {
    return _easync.__create_unguaranteed_query({
        'execute': (on_value, on_exception) => {
            fs.stat(__possibly_escape_filename($p.path, $p['escape spaces in path']), (err, stats) => {
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