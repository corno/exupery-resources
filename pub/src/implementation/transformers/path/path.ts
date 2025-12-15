import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as d_path from "../../../interface/generated/pareto/schemas/path/data_types/target"


export const extend_path = ($: d_path.Context_Path, addition: _et.List<string>): d_path.Context_Path => {
    return {
        'start': $.start,
        'subpath': _ea.build_list(($i) => {
            $.subpath.__for_each(($) => {
                $i['add element']($)
            })
            addition.__for_each(($) => {
                $i['add element']($)
            })
        })
    }
}

export const create_node_path = ($: d_path.Context_Path, node: string): d_path.Node_Path => {
    return {
        'context': $,
        'node': node,
    }
}

export const node_path_to_context_path = ($: d_path.Node_Path): d_path.Context_Path => {
    return extend_path($.context, _ea.list_literal([$.node]))
}