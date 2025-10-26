import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/core/astn_target"
import * as _i_signatures from "../../../interface/schemas/results/marshall"


export const Node_Type: _i_signatures._T_Node_Type = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'directory': return _pa.ss($, ($) => ({
            'state': "directory",
            'value': ['nothing', null],
        }))
        case 'file': return _pa.ss($, ($) => ({
            'state': "file",
            'value': ['nothing', null],
        }))
        default: return _pa.au($[0])
    }
})]
export const Read_Directory: _i_signatures._T_Read_Directory = ($, $p) => ['dictionary', $.map(($) => Node_Type(
    $,
    {
        'value serializers': $p['value serializers'],
    }
))]
