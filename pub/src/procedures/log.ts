import * as _easync from 'exupery-core-async'
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as D from "../types"

import { $$ as __possibly_escape_filename } from "../__internal/possibly_escape_file_name"

export const $$: _easync.Guaranteed_Procedure_Initializer<D.Log_Parameters> = (
    $p,
) => {
    return _easync.__create_guaranted_procedure({
        'execute': (on_success) => {
            $p.lines.__for_each(($) => {
                console.log($)
            })
            on_success()
        }
    })
}