import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/log/data_types/target"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/log/unmarshall"


export const Parameters: _i_signatures._T_Parameters = ($, $p) => _i_generic.process_group(
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
