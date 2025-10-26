import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_in from "../../../interface/core/astn_source"
import * as _i_out from "../../../interface/schemas/parameters/data_types/target"
import * as _i_signatures from "../../../interface/schemas/parameters/unmarshall"


export const Copy: _i_signatures._T_Copy = ($, $p) => _i_generic.process_group(
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
export const Log: _i_signatures._T_Log = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'lines': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "lines",
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
export const Remove: _i_signatures._T_Remove = ($, $p) => _i_generic.process_group(
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
export const Write_File: _i_signatures._T_Write_File = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'data': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "data",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
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
