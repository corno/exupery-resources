import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_in from "../../../interface/core/astn_source"
import * as _i_out from "../../../interface/schemas/remove/data_types/target"
import * as _i_signatures from "../../../interface/schemas/remove/unmarshall"


export const Errors: _i_signatures._T_Errors = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'node does not exist': ($): _i_out._T_Errors.SG => ['node does not exist', _i_generic.process_nothing(
                $,
                null
            )],
            'permission denied': ($): _i_out._T_Errors.SG => ['permission denied', _i_generic.process_nothing(
                $,
                null
            )],
        }),
    }
)
export const Parameters: _i_signatures._T_Parameters = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'error if not exists': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "error if not exists",
                }
            ), ($) => _i_generic.process_boolean(
                $,
                {
                    'deserializer': $p['value deserializers']['boolean'],
                }
            )),
            'path': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "path",
                }
            ), ($) => Path(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
        }),
    }
)
export const Path: _i_signatures._T_Path = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'escape spaces in path': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "escape spaces in path",
                }
            ), ($) => _i_generic.process_boolean(
                $,
                {
                    'deserializer': $p['value deserializers']['boolean'],
                }
            )),
            'path': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "path",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
        }),
    }
)
