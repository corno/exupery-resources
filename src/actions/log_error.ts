import * as _easync from 'exupery-core-async'
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as D from "../types"

import { $$ as __possibly_escape_filename } from "../__internal/possibly_escape_file_name"

export const $$ = (
    data: _et.Array<string>,
): _easync.Safe_Procedure_Context => {
    return _easync.__execute_safe_action({
        'execute': (on_success) => {
            data.__for_each(($) => {
                console.error($)
            }  )
            on_success()
        }
    })
}