import * as _easync from 'exupery-core-async'
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as D from "../types"

export const $$: _easync.Guaranteed_Action<null> = (
) => {
    return _easync.__execute_guaranteed_action({
        'execute': (on_success) => {
            on_success()
        }
    })
}