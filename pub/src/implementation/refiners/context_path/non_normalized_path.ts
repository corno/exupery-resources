import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _ed from 'exupery-core-dev'

import * as d_out from "../../../interface/generated/pareto/schemas/path/data_types/target"
import * as d_in from "../../../interface/generated/pareto/schemas/path/data_types/source"

import { $$ as op_append } from "pareto-standard-operations/dist/implementation/algorithms/operations/pure/list/append_element"
import { remove_last_element } from '../../../temp_core'

type Intermediate_Result = {
    subppath: d_out.Context_Subpath
    up_steps: number
}

export const Context_Path = (
    $: d_in.Non_Normalized_Path,
): d_out.Context_Path => {

    let intermediate_result: Intermediate_Result = {

        subppath: _ea.list_literal([]),
        up_steps: 0,
    }

    $.segments.__for_each(($) => {
        intermediate_result = _ea.cc($, ($): Intermediate_Result => {
            switch ($[0]) {
                case 'parent': return _ea.ss($, ($) => ({
                    'up_steps': intermediate_result.subppath.__get_number_of_elements() === 0
                        ? intermediate_result.up_steps + 1
                        : intermediate_result.up_steps,
                    'subppath': intermediate_result.subppath.__get_number_of_elements() === 0
                        ? intermediate_result.subppath
                        : remove_last_element(intermediate_result.subppath),
                    'node': null,
                }))
                case 'child': return _ea.ss($, ($): Intermediate_Result => ({
                    'up_steps': intermediate_result.up_steps,
                    'subppath': op_append(intermediate_result.subppath, { element: $ }),
                }))
                case 'current': return _ea.ss($, ($) => intermediate_result)
                case 'nothing': return _ea.ss($, ($) => intermediate_result)
                default: return _ea.au($[0])
            }
        })
    })

    return {
        'start': $['leading slash']
            ? ['absolute', null]
            : ['relative', {
                'up steps': intermediate_result.up_steps,
            }],
        'subpath': intermediate_result.subppath,
    }

}
