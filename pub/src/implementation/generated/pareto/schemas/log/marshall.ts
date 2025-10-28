import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/log/marshall"


export const Parameters: _i_signatures._T_Parameters = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'lines': _pa.cc($['lines'], ($) => ['list', $.map(($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })])]),
})]
