import * as _easync from 'exupery-core-async'
import * as _ei from 'exupery-core-internals'
import * as _et from 'exupery-core-types'

import { mkdir as fs_mkdir, writeFile as fs_writeFile} from "fs"

import { dirname as path_dirname} from "path"

import * as ParameterTypes from "../generated/interface/schemas/parameters/data_types/target"
import * as ErrorTypes from "../generated/interface/schemas/errors/data_types/target"

import { $$ as __possibly_escape_filename } from "../__internal/possibly_escape_file_name"

export const $$: _easync.Unguaranteed_Procedure_Initializer<ParameterTypes.Write_File, ErrorTypes.Write_File> = (
    $p,
) => {
    return _easync.__create_unguaranteed_procedure({
        'execute': (on_success, on_exception) => {

            const fname = __possibly_escape_filename($p.path.path, $p.path['escape spaces in path'])
            fs_mkdir(
                path_dirname(fname),
                {
                    'recursive': true
                },
                (err, path) => {
                    if (err) {
                        on_exception(_ei.block(() => {
                            if (err.code === 'EACCES' || err.code === 'EPERM') {
                                return ['permission denied', null]
                            }
                            return _ei.panic(`unhandled fs.writeFile error code: ${err.code}`)
                        }))
                        return
                    }
                    fs_writeFile(fname, $p.data, (err) => {
                        if (err) {
                            on_exception(_ei.block(() => {
                                if (err.code === 'EACCES' || err.code === 'EPERM') {
                                    return ['permission denied', null]
                                }
                                return _ei.panic(`unhandled fs.writeFile error code: ${err.code}`)
                            }))
                        } else {
                            on_success()
                        }
                    })
                }
            )
        }
    })
}