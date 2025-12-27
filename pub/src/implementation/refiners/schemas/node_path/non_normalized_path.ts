import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _ed from 'exupery-core-dev'

import * as d_out from "../../../../interface/generated/pareto/schemas/path/data_types/target"
import * as d_in from "../../../../interface/generated/pareto/schemas/path/data_types/source"

import { remove_last_element } from "../../../temp/temp_core"


type Intermediate_Result = {
    subppath: d_out.Context_Subpath
    node: string | null
    up_steps: number
}

export type Error =
    | ['trailing slash not allowed', null]
    | ['no node', null]

export const Node_Path = (
    $: d_in.Non_Normalized_Path,
    $p: {
        'pedantic': boolean
    },
    abort: _ea.Abort<Error>
): d_out.Node_Path => {

    if ($p.pedantic) {
        if ($['trailing slash']) {
            abort(['trailing slash not allowed', null])
        }
    }
    let intermediate_result: Intermediate_Result = {

        subppath: _ea.list_literal([]),
        node: null,
        up_steps: 0,
    }

    $.segments.__for_each(($) => {
        intermediate_result = _ea.cc($, ($): Intermediate_Result => {
            switch ($[0]) {
                case 'parent': return _ea.ss($, ($) => ({
                    'up_steps': intermediate_result.node === null
                        ? intermediate_result.subppath.get_number_of_elements() === 0
                            ? intermediate_result.up_steps + 1
                            : intermediate_result.up_steps
                        : intermediate_result.up_steps,
                    'subppath': intermediate_result.node === null
                        ? intermediate_result.subppath.get_number_of_elements() === 0
                            ? _ea.list_literal([])
                            : remove_last_element(intermediate_result.subppath)
                        : intermediate_result.subppath,
                    'node': null,
                }))
                case 'child': return _ea.ss($, ($): Intermediate_Result => ({
                    'up_steps': intermediate_result.up_steps,
                    'subppath': intermediate_result.node === null
                        ? intermediate_result.subppath
                        : intermediate_result.subppath.append_element(intermediate_result.node),
                    'node': $,
                }))
                case 'current': return _ea.ss($, ($) => intermediate_result)
                case 'nothing': return _ea.ss($, ($) => intermediate_result)
                default: return _ea.au($[0])
            }
        })
    })

    if (intermediate_result.node === null) {
        abort(['no node', null])
    }
    return {
        'context': {
            'start': $['leading slash']
                ? ['absolute', null]
                : ['relative', {
                    'up steps': intermediate_result.up_steps,
                }],
            'subpath': intermediate_result.subppath,
        },
        'node': intermediate_result.node
    }

}
