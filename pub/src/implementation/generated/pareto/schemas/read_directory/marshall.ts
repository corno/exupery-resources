import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/read_directory/marshall"


export const Error: _i_signatures._T_Error = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'directory does not exist': return _pa.ss($, ($) => ({
            'state': "directory does not exist",
            'value': ['nothing', null],
        }))
        case 'node is not a directory': return _pa.ss($, ($) => ({
            'state': "node is not a directory",
            'value': ['nothing', null],
        }))
        default: return _pa.au($[0])
    }
})]
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
export const Parameters: _i_signatures._T_Parameters = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'path': _pa.cc($['path'], ($) => Path(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'prepend results with path': _pa.cc($['prepend results with path'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['boolean'](
            $,
            null
        ),
    })]),
})]
export const Path: _i_signatures._T_Path = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'escape spaces in path': _pa.cc($['escape spaces in path'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['boolean'](
            $,
            null
        ),
    })]),
    'path': _pa.cc($['path'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
})]
export const Result: _i_signatures._T_Result = ($, $p) => ['dictionary', $.map(($) => Node_Type(
    $,
    {
        'value serializers': $p['value serializers'],
    }
))]
