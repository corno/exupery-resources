import * as _easync from 'exupery-core-async'
import * as _ei from 'exupery-core-internals'
import * as _et from 'exupery-core-types'

import * as fs from "fs"

import * as D from "../types"

import { $$ as __possibly_escape_filename } from "../__internal/possibly_escape_file_name"

export type Parameters = {
    'source': string
    'target': string
    'escape spaces in path': boolean
    'options': {
        'recursive'?: boolean
        'force'?: boolean
        'errorOnExist'?: boolean
    }
}

export const $$: _easync.Unguaranteed_Action<Parameters, D.Copy_Error> = (
    $p,
) => {
    return _easync.__execute_unguaranteed_action({
        'execute': (on_success, on_exception) => {
            fs.cp(__possibly_escape_filename($p.source, $p['escape spaces in path']), __possibly_escape_filename($p.target, $p['escape spaces in path']), $p.options, (err) => {
                if (err) {
                    on_exception(_ei.block((): D.Copy_Error => {
                        if (err.code === 'ENOENT') {
                            return ['source does not exist', null]
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
                        return _ei.panic(`unhandled fs.cp error code: ${err.code}`)
                    }))
                } else {
                    on_success()
                }
            })
        }
    })
}