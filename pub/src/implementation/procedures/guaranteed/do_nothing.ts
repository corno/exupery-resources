import * as _easync from 'exupery-core-async'
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import { Signature } from "../../../interface/algorithms/procedures/guaranteed/do_nothing"


export const $$: _easync.Guaranteed_Procedure_Initializer<null> = (
) => {
    return _easync.__create_guaranted_procedure({
        'execute': (on_success) => {
            on_success()
        }
    })
}