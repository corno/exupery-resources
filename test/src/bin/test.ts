#!/usr/bin/env node

import * as _eb from 'exupery-core-bin'
import * as _ed from 'exupery-core-dev'
import * as _ea from 'exupery-core-alg'

import * as r_non_normalized_path from "pub/dist/implementation/refiners/non_normalized_path/text"

import * as r_node_path from "pub/dist/implementation/refiners/node_path/non_normalized_path"

_ed.log_debug_message("BEGIN", () => {})

const x = r_non_normalized_path.Non_Normalized_Path("/a//b/../c/./d")
_ed.log_debug_message(`leading slash: ${x['leading slash']}`, () => { })
x.segments.__for_each(($) => {
    _ed.log_debug_message(`segment: ${$[0]}`, () => { })
})
_ed.log_debug_message(`trailing slash: ${x['trailing slash']}`, () => { })


//

const $ = r_node_path.Node_Path(
    x,
    {
        'pedantic': true,
    },
    ($) => {
        _ea.deprecated_panic(`aborting due to error: ${$[0]}`)
    }
)

_ea.cc($.context.start, ($) => {
    switch ($[0]) {
        case 'absolute': return _ea.ss($, ($) => _ed.log_debug_message(`abs`, () => {}))
        case 'relative': return _ea.ss($, ($) => _ed.log_debug_message(`rel up steps: ${$['up steps']}`, () => {}))
        default: return _ea.au($[0])
    }
})


_ed.log_debug_message("END", () => {})

