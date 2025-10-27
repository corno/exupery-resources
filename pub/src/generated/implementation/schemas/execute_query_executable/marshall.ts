import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/core/astn_target"
import * as _i_signatures from "../../../interface/schemas/execute_query_executable/marshall"


export const Errors: _i_signatures._T_Errors = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'failed to spawn': return _pa.ss($, ($) => ({
            'state': "failed to spawn",
            'value': ['verbose group', _pa.dictionary_literal({
                'message': _pa.cc($['message'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })],
        }))
        case 'non zero exit code': return _pa.ss($, ($) => ({
            'state': "non zero exit code",
            'value': ['verbose group', _pa.dictionary_literal({
                'exitCode': _pa.cc($['exitCode'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $p['value serializers']['default number'](
                        $,
                        null
                    ),
                })]),
                'stderr': _pa.cc($['stderr'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })],
        }))
        default: return _pa.au($[0])
    }
})]
export const Parameters: _i_signatures._T_Parameters = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'args': _pa.cc($['args'], ($) => ['list', $.map(($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })])]),
    'program': _pa.cc($['program'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
})]
export const Result: _i_signatures._T_Result = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'stdout': _pa.cc($['stdout'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
})]
