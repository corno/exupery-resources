import * as _easync from 'exupery-core-async'
import * as _ei from 'exupery-core-internals'

import { readFile as fs_readFile } from "fs"

import { $$ as __possibly_escape_filename } from "../../__internal/possibly_escape_file_name"
import * as d from "../../generated/interface/schemas/read_file/data_types/target"

export const $$: _easync.Unguaranteed_Query_Initializer<d.Parameters, d.Result, d.Errors> = (
    $p
) => {
    return _easync.__create_unguaranteed_query({
        'execute': (on_value, on_exception) => {
            fs_readFile(__possibly_escape_filename($p.path, $p['escape spaces in path']), { 'encoding': 'utf-8' }, (err, data) => {
                if (err) {
                    on_exception(_ei.block((): d.Errors => {
                        if (err.code === 'ENOENT') {
                            return ['file does not exist', null]
                        }
                        if (err.code === 'EACCES' || err.code === 'EPERM') {
                            return ['permission denied', null]
                        }
                        if (err.code === 'EISDIR' || err.code === 'ENOTDIR') {
                            return ['node is not a file', null]
                        }
                        if (err.code === 'EFBIG') {
                            return ['file too large', null]
                        }
                        if (err.code === 'EIO' || err.code === 'ENXIO') {
                            return ['device not ready', null]
                        }
                        return _ei.panic(`unhandled fs.readFile error code: ${err.code}`)
                    }))
                } else {
                    on_value(data)
                }
            })
        }
    })
}