import * as _easync from 'exupery-core-async'
import * as _ei from 'exupery-core-internals'
import * as _et from 'exupery-core-types'

import { mkdir as fs_mkdir } from "fs"

import * as ParameterTypes from "../generated/interface/schemas/parameters/data_types/target"
import * as ErrorTypes from "../generated/interface/schemas/errors/data_types/target"

import { $$ as __possibly_escape_filename } from "../__internal/possibly_escape_file_name"

export const $$: _easync.Unguaranteed_Procedure_Initializer<ParameterTypes.Path, ErrorTypes.Make_Directory> = (
    $p,
) => {

    return _easync.__create_unguaranteed_procedure({
        'execute': (on_success, on_exception) => {
            fs_mkdir(
                __possibly_escape_filename($p.path, $p['escape spaces in path']),
                {
                    'recursive': true,
                },
                (err, path) => {
                    if (err) {
                        on_exception(_ei.block(() => {
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