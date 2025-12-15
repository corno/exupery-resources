import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _ed from 'exupery-core-dev'
import { build_list_with_loop, build_text_with_loop } from '../../../temp_core'

import * as d_out from "../../../interface/generated/pareto/schemas/path/data_types/target"


export const Non_Normalized_Path = (
    $: string
): d_out.Non_Normalized_Path => {
    const iterator = _ea.create_iterator(_ea.text_to_character_list($))

    return {
        'leading slash': iterator['get current']().transform(
            ($) => {
                if ($ === 47) { // '/'
                    iterator.consume()
                    return true
                } else {
                    return false
                }
            },
            () => false
        ),
        'segments': build_list_with_loop<number, d_out.Non_Normalized_Path.segments.L>(iterator, ($, $i) => {
            $i['add element'](_ea.cc(
                build_text_with_loop(iterator, ($, $i) => {
                    if ($ !== 47) { // '/'
                        $i['add character']($)
                        iterator.consume()
                        return false
                    } else {
                        return true
                    }
                }),
                ($) => {
                    switch ($) {
                        case "..": return ['parent', null]
                        case ".": return ['current', null]
                        case "": return ['nothing', null]
                        default: return ['child', $]
                    }
                })
            )
            return iterator['get current']().transform(
                ($) => {
                    if ($ !== 47) { // '/'
                        _ea.deprecated_panic(`Expected '/' but got character code ${$}`)
                    }
                    return iterator['look ahead'](1).transform(
                        () => {
                            // There's more content after the slash, consume and continue
                            iterator.consume()
                            return false
                        },
                        () => {
                            // No more content, this is a trailing slash - don't consume, stop loop
                            return true
                        }
                    )
                },
                () => true
            )
        }),
        'trailing slash': iterator['get current']().transform(
            ($) => {
                if ($ === 47) { // '/'
                    iterator.consume()
                    return true
                } else {
                    return false
                }
            },
            () => false
        ),
    }
}
