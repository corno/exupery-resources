import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/path/serialize"
import * as _i_serialize from "../../generic/serialize"
import * as _i_marshall from "./marshall"


export const Up_Steps: _i_signatures._T_Up_Steps = ($, $p) => _i_serialize.Document(
    _i_marshall.Up_Steps(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Start: _i_signatures._T_Start = ($, $p) => _i_serialize.Document(
    _i_marshall.Start(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Context_Subpath: _i_signatures._T_Context_Subpath = ($, $p) => _i_serialize.Document(
    _i_marshall.Context_Subpath(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Context_Path: _i_signatures._T_Context_Path = ($, $p) => _i_serialize.Document(
    _i_marshall.Context_Path(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Node_Path: _i_signatures._T_Node_Path = ($, $p) => _i_serialize.Document(
    _i_marshall.Node_Path(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Node_Path_Parameter: _i_signatures._T_Node_Path_Parameter = ($, $p) => _i_serialize.Document(
    _i_marshall.Node_Path_Parameter(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Context_Path_Parameter: _i_signatures._T_Context_Path_Parameter = ($, $p) => _i_serialize.Document(
    _i_marshall.Context_Path_Parameter(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Non_Normalized_Path: _i_signatures._T_Non_Normalized_Path = ($, $p) => _i_serialize.Document(
    _i_marshall.Non_Normalized_Path(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
