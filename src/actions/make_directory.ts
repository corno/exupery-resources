import * as _easync from 'exupery-core-async'
import * as _ei from 'exupery-core-internals'
import * as _et from 'exupery-core-types'

import * as fs from "fs"

import * as D from "../types"

import { $$ as __possibly_escape_filename } from "../__internal/possibly_escape_file_name"

export const $$: _easync.Unguaranteed_Action<D.Path, D.Make_Directory_Error> = (
    $p,
) => {

    return _easync.__execute_unguaranteed_action({
        'execute': (on_success, on_exception) => {
            fs.mkdir(
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