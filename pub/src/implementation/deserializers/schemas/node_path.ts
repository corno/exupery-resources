import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _ed from 'exupery-core-dev'

import * as d_out from "../../../interface/generated/pareto/schemas/path/data_types/target"
import * as d_error from "../../refiners/schemas/node_path/non_normalized_path"

import * as x1 from "../../refiners/schemas/node_path/non_normalized_path"
import * as x2 from "./non_normalized_path"

export type Parameters = { 'pedantic': boolean }

export const Node_Path: _et.Deserializer_With_Parameters<d_out.Node_Path, d_error.Error, Parameters> = ($, $p, abort): d_out.Node_Path => {
    return x1.Node_Path(
        x2.Non_Normalized_Path($),
        $p,
        abort,
    )
}
