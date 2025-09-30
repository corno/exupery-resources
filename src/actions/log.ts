import * as _easync from 'exupery-core-async'
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as D from "../types"

import { $$ as __possibly_escape_filename } from "../__internal/possibly_escape_file_name"

export const $$ = (
    data: _et.Array<string>,
): _easync.Guaranteed_Procedure_Context => {
    return _easync.__execute_guaranteed_action({
        'execute': (on_success) => {
            data.__for_each(($) => {
                console.log($)
            }  )
            on_success()
        }
    })
}