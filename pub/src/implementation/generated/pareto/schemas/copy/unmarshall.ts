import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/copy/data_types/target"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/copy/unmarshall"


export const Errors: _i_signatures._T_Errors = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'device not ready': ($): _i_out._T_Errors.SG => ['device not ready', _i_generic.process_nothing(
                $,
                null
            )],
            'file too large': ($): _i_out._T_Errors.SG => ['file too large', _i_generic.process_nothing(
                $,
                null
            )],
            'node is not a file': ($): _i_out._T_Errors.SG => ['node is not a file', _i_generic.process_nothing(
                $,
                null
            )],
            'permission denied': ($): _i_out._T_Errors.SG => ['permission denied', _i_generic.process_nothing(
                $,
                null
            )],
            'source does not exist': ($): _i_out._T_Errors.SG => ['source does not exist', _i_generic.process_nothing(
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
            'options': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "options",
                }
            ), ($) => _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'errorOnExist': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "errorOnExist",
                            }
                        ), ($) => _i_generic.process_optional(
                            $,
                            {
                                'value': ($) => _i_generic.process_boolean(
                                    $,
                                    {
                                        'deserializer': $p['value deserializers']['boolean'],
                                    }
                                ),
                            }
                        )),
                        'force': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "force",
                            }
                        ), ($) => _i_generic.process_optional(
                            $,
                            {
                                'value': ($) => _i_generic.process_boolean(
                                    $,
                                    {
                                        'deserializer': $p['value deserializers']['boolean'],
                                    }
                                ),
                            }
                        )),
                        'recursive': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "recursive",
                            }
                        ), ($) => _i_generic.process_optional(
                            $,
                            {
                                'value': ($) => _i_generic.process_boolean(
                                    $,
                                    {
                                        'deserializer': $p['value deserializers']['boolean'],
                                    }
                                ),
                            }
                        )),
                    }),
                }
            )),
            'source': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "source",
                }
            ), ($) => Path(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'target': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "target",
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
