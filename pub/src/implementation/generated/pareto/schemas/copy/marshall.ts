import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/copy/marshall"


export const Errors: _i_signatures._T_Errors = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'device not ready': return _pa.ss($, ($) => ({
            'state': "device not ready",
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
        case 'source does not exist': return _pa.ss($, ($) => ({
            'state': "source does not exist",
            'value': ['nothing', null],
        }))
        default: return _pa.au($[0])
    }
})]
export const Parameters: _i_signatures._T_Parameters = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'options': _pa.cc($['options'], ($) => ['verbose group', _pa.dictionary_literal({
        'errorOnExist': _pa.cc($['errorOnExist'], ($) => ['optional', $.transform(
            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })]],
            () => ['not set', null]
        )]),
        'force': _pa.cc($['force'], ($) => ['optional', $.transform(
            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })]],
            () => ['not set', null]
        )]),
        'recursive': _pa.cc($['recursive'], ($) => ['optional', $.transform(
            ($): _i_out._T_Value.SG.optional => ['set', ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })]],
            () => ['not set', null]
        )]),
    })]),
    'source': _pa.cc($['source'], ($) => Path(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'target': _pa.cc($['target'], ($) => Path(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
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
