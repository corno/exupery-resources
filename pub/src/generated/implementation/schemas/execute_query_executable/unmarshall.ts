import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_in from "../../../interface/core/astn_source"
import * as _i_out from "../../../interface/schemas/execute_query_executable/data_types/target"
import * as _i_signatures from "../../../interface/schemas/execute_query_executable/unmarshall"


export const Errors: _i_signatures._T_Errors = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'failed to spawn': ($): _i_out._T_Errors.SG => ['failed to spawn', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'message': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "message",
                            }
                        ), ($) => _i_generic.process_text(
                            $,
                            null
                        )),
                    }),
                }
            )],
            'non zero exit code': ($): _i_out._T_Errors.SG => ['non zero exit code', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'exitCode': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "exitCode",
                            }
                        ), ($) => _i_generic.process_number(
                            $,
                            {
                                'deserializer': $p['value deserializers']['default number'],
                            }
                        )),
                        'stderr': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "stderr",
                            }
                        ), ($) => _i_generic.process_text(
                            $,
                            null
                        )),
                    }),
                }
            )],
        }),
    }
)
export const Parameters: _i_signatures._T_Parameters = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'args': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "args",
                }
            ), ($) => _i_generic.process_unconstrained_list(
                $,
                {
                    'value': ($) => _i_generic.process_text(
                        $,
                        null
                    ),
                }
            )),
            'program': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "program",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
        }),
    }
)
export const Result: _i_signatures._T_Result = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'stdout': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "stdout",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
        }),
    }
)
