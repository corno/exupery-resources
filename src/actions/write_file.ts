import * as _easync from 'exupery-core-async'
import * as _ei from 'exupery-core-internals'
import * as _et from 'exupery-core-types'

import * as fs from "fs"

import * as pathlib from "path"

import * as D from "../types"

import { $$ as __possibly_escape_filename } from "../__internal/possibly_escape_file_name"

export type Parameters = {
    'path': string
    'data': string
    'escape spaces in path': boolean
}

export const $$: _easync.Unguaranteed_Action<Parameters, D.Write_File_Error> = (
    $p,
) => {
    return _easync.__execute_unguaranteed_action({
        'execute': (on_success, on_exception) => {

            const fname = __possibly_escape_filename($p.path, $p['escape spaces in path'])
            fs.mkdir(
                pathlib.dirname(fname),
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
                    fs.writeFile(fname, $p.data, (err) => {
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