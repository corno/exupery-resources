import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/read_file/marshall"


export const Error: _i_signatures._T_Error = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'device not ready': return _pa.ss($, ($) => ({
            'state': "device not ready",
            'value': ['nothing', null],
        }))
        case 'file does not exist': return _pa.ss($, ($) => ({
            'state': "file does not exist",
            'value': ['nothing', null],
        }))
        case 'file too large': return _pa.ss($, ($) => ({
            'state': "file too large",
            'value': ['nothing', null],
        }))
        case 'node is not a file': return _pa.ss($, ($) => ({
            'state': "node is not a file",
            'value': ['nothing', null],
        }))
        case 'permission denied': return _pa.ss($, ($) => ({
            'state': "permission denied",
            'value': ['nothing', null],
        }))
        default: return _pa.au($[0])
    }
})]
export const Parameters: _i_signatures._T_Parameters = ($, $p) => Path(
    $,
    {
        'value serializers': $p['value serializers'],
    }
)
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
export const Result: _i_signatures._T_Result = ($, $p) => ['text', ({
    'delimiter': ['quote', null],
    'value': $,
})]
