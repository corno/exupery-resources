import * as _easync from 'exupery-core-async'
import * as _ei from 'exupery-core-internals'
import * as _et from 'exupery-core-types'

import * as fs from "fs"

import * as D from "../types"

import { $$ as __possibly_escape_filename } from "../__internal/possibly_escape_file_name"

export const $$: _easync.Unguaranteed_Query<D.Path, D.Read_Directory_Result, D.Read_Directory_Error> = (
    $p
) => {
    return _easync.__run_unguaranteed_query({
        'execute': (on_value, on_exception) => {
            fs.readdir(__possibly_escape_filename($p.path, $p['escape spaces in path']), {
                'encoding': 'utf-8',
                'withFileTypes': true,
            }, (err, files) => {
                if (err) {
                    on_exception(_ei.block(() => {
                        if (err.code === 'ENOENT') {
                            return ['directory does not exist', null]
                        }
                        if (err.code === 'ENOTDIR' || err.code === 'EISDIR') {
                            return ['node is not a directory', null]
                        }
                        return _ei.panic(`unhandled fs.readdir error code: ${err.code}`)
                    }))
                } else {
                    const out: { [key: string]: D.Node_Type } = {}
                    files.forEach((file) => {
                        out[file.name] = file.isFile() ? ['file', null] : ['directory', null]
                    })
                    on_value(_ei.dictionary_literal(out))
                }
            })
        }
    })
}