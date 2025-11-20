import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/read_directory/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/read_directory/data_types/target"


export const Path: _i_signatures._T_Path = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'path': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "path",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
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
        }),
    }
)
export const Parameters: _i_signatures._T_Parameters = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
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
export const Error: _i_signatures._T_Error = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'directory does not exist': ($): _i_out._T_Error.SG => ['directory does not exist', _i_generic.process_nothing(
                $,
                null
            )],
            'node is not a directory': ($): _i_out._T_Error.SG => ['node is not a directory', _i_generic.process_nothing(
                $,
                null
            )],
        }),
    }
)
export const Node_Type: _i_signatures._T_Node_Type = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'file': ($): _i_out._T_Node_Type.SG => ['file', _i_generic.process_nothing(
                $,
                null
            )],
            'directory': ($): _i_out._T_Node_Type.SG => ['directory', _i_generic.process_nothing(
                $,
                null
            )],
        }),
    }
)
export const Result: _i_signatures._T_Result = ($, $p) => _i_generic.process_unconstrained_dictionary(
    $,
    {
        'value': ($) => _i_generic.process_group(
            $,
            {
                'properties': ($) => ({
                    'concatenated path': _pa.cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "concatenated path",
                        }
                    ), ($) => _i_generic.process_text(
                        $,
                        null
                    )),
                    'node type': _pa.cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "node type",
                        }
                    ), ($) => Node_Type(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    )),
                }),
            }
        ),
    }
)
