import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _ed from 'exupery-core-dev'

import * as d_out from "../../../interface/generated/pareto/schemas/path/data_types/target"

import * as x1 from "./non_normalized_path"
import * as x2 from "../non_normalized_path/text"

export const Context_Path = (
    $: string,
): d_out.Context_Path => {
    return x1.Context_Path(
        x2.Non_Normalized_Path($),
    )
}
