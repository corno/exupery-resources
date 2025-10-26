import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_in from "../../../interface/core/astn_source"
import * as _i_out from "../../../interface/schemas/results/data_types/target"
import * as _i_signatures from "../../../interface/schemas/results/unmarshall"


export const Node_Type: _i_signatures._T_Node_Type = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'directory': ($): _i_out._T_Node_Type.SG => ['directory', _i_generic.process_nothing(
                $,
                null
            )],
            'file': ($): _i_out._T_Node_Type.SG => ['file', _i_generic.process_nothing(
                $,
                null
            )],
        }),
    }
)
export const Read_Directory: _i_signatures._T_Read_Directory = ($, $p) => _i_generic.process_unconstrained_dictionary(
    $,
    {
        'value': ($) => Node_Type(
            $,
            {
                'value deserializers': $p['value deserializers'],
            }
        ),
    }
)
