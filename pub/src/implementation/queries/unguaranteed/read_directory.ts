import * as _easync from 'exupery-core-async'
import * as _ei from 'exupery-core-internals'
import * as _et from 'exupery-core-types'

import { readdir as fs_readdir } from "fs"

import * as d from "../../../interface/generated/pareto/schemas/read_directory/data_types/target"
import { Signature } from "../../../interface/algorithms/queries/unguaranteed/read_directory"


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
            fs_readdir(__possibly_escape_filename($p.path, $p['escape spaces in path']), {
                'encoding': 'utf-8',
                'withFileTypes': true,
            }, (err, files) => {
                if (err) {
                    on_exception(_ei.block((): d.Errors => {
                        if (err.code === 'ENOENT') {
                            return ['directory does not exist', null]
                        }
                        if (err.code === 'ENOTDIR' || err.code === 'EISDIR') {
                            return ['node is not a directory', null]
                        }
                        return _ei.panic(`unhandled fs.readdir error code: ${err.code}`)
                    }))
                } else {
                    const out: { [key: string]: d.Node_Type } = {}
                    files.forEach((file) => {
                        out[file.name] = file.isFile() ? ['file', null] : ['directory', null]
                    })
                    on_value(_ei.dictionary_literal(out))
                }
            })
        }
    })
}