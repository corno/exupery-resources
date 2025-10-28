import * as _easync from 'exupery-core-async'
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as d from "../../interface/generated/pareto/schemas/log_error/data_types/target"

export const $$: _easync.Guaranteed_Procedure_Initializer<d.Parameters> = (
    $p,
) => {
    return _easync.__create_guaranted_procedure({
        'execute': (on_success) => {
            $p.lines.__for_each(($) => {
                console.error($)
            })
            on_success()
        }
    })
}