import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/core/astn_target"
import * as _i_signatures from "../../../interface/schemas/parameters/marshall"


export const Copy: _i_signatures._T_Copy = ($, $p) => ['verbose group', _pa.dictionary_literal({
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
export const Log: _i_signatures._T_Log = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'lines': _pa.cc($['lines'], ($) => ['list', $.map(($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })])]),
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
export const Remove: _i_signatures._T_Remove = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'error if not exists': _pa.cc($['error if not exists'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['boolean'](
            $,
            null
        ),
    })]),
    'path': _pa.cc($['path'], ($) => Path(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Write_File: _i_signatures._T_Write_File = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'data': _pa.cc($['data'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'path': _pa.cc($['path'], ($) => Path(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
