import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/stat/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"


export const Path: _i_signatures._T_Path = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'path': _pa.cc($['path'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'escape spaces in path': _pa.cc($['escape spaces in path'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['boolean'](
            $,
            null
        ),
    })]),
})]
export const Parameters: _i_signatures._T_Parameters = ($, $p) => Path(
    $,
    {
        'value serializers': $p['value serializers'],
    }
)
export const Error: _i_signatures._T_Error = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'node does not exist': return _pa.ss($, ($) => ({
            'state': "node does not exist",
            'value': ['nothing', null],
        }))
        default: return _pa.au($[0])
    }
})]
export const Node_Type: _i_signatures._T_Node_Type = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'file': return _pa.ss($, ($) => ({
            'state': "file",
            'value': ['nothing', null],
        }))
        case 'directory': return _pa.ss($, ($) => ({
            'state': "directory",
            'value': ['nothing', null],
        }))
        default: return _pa.au($[0])
    }
})]
export const Result: _i_signatures._T_Result = ($, $p) => Node_Type(
    $,
    {
        'value serializers': $p['value serializers'],
    }
)
