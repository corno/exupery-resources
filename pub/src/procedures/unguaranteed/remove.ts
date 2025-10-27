import * as _easync from 'exupery-core-async'
import * as _ei from 'exupery-core-internals'
import * as _et from 'exupery-core-types'

import { rm as fs_rm } from "fs"

import * as d from "../../generated/interface/schemas/remove/data_types/target"

import { $$ as __possibly_escape_filename } from "../../__internal/possibly_escape_file_name"

export const $$: _easync.Unguaranteed_Procedure_Initializer<d.Parameters, d.Errors> = (
    $p,
) => {
    return _easync.__create_unguaranteed_procedure({
        'execute': (on_success, on_exception) => {
            fs_rm(
                __possibly_escape_filename($p.path.path, $p.path['escape spaces in path']),
                {
                    'recursive': true,
                },
                (err) => {

                    if (err) {
                        if (err.code === 'ENOENT' && !$p['error if not exists']) {
                            on_success()
                        } else {
                            on_exception(_ei.block((): d.Errors => {
                                if (err.code === 'ENOENT') {
                                    return ['node does not exist', null]
                                }
                                if (err.code === 'EACCES' || err.code === 'EPERM') {
                                    return ['permission denied', null]
                                }
                                // if (err.code === 'EISDIR' || err.code === 'ENOTDIR') {
                                //     return ['node is not a directory', null]
                                // }
                                // if (err.code === 'ERR_FS_EISDIR') {
                                //     return ['node is a directory', null]
                                // }
                                return _ei.panic(`unhandled fs.rm error code: ${err.code}`)
                            }))
                        }
                    } else {
                        on_success()
                    }
                }
            )
        }
    })
}