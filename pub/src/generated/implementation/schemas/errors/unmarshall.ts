import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_in from "../../../interface/core/astn_source"
import * as _i_out from "../../../interface/schemas/errors/data_types/target"
import * as _i_signatures from "../../../interface/schemas/errors/unmarshall"


export const Copy: _i_signatures._T_Copy = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'device not ready': ($): _i_out._T_Copy.SG => ['device not ready', _i_generic.process_nothing(
                $,
                null
            )],
            'file too large': ($): _i_out._T_Copy.SG => ['file too large', _i_generic.process_nothing(
                $,
                null
            )],
            'node is not a file': ($): _i_out._T_Copy.SG => ['node is not a file', _i_generic.process_nothing(
                $,
                null
            )],
            'permission denied': ($): _i_out._T_Copy.SG => ['permission denied', _i_generic.process_nothing(
                $,
                null
            )],
            'source does not exist': ($): _i_out._T_Copy.SG => ['source does not exist', _i_generic.process_nothing(
                $,
                null
            )],
        }),
    }
)
export const Make_Directory: _i_signatures._T_Make_Directory = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'directory already exists': ($): _i_out._T_Make_Directory.SG => ['directory already exists', _i_generic.process_nothing(
                $,
                null
            )],
            'permission denied': ($): _i_out._T_Make_Directory.SG => ['permission denied', _i_generic.process_nothing(
                $,
                null
            )],
        }),
    }
)
export const Read_Directory: _i_signatures._T_Read_Directory = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'directory does not exist': ($): _i_out._T_Read_Directory.SG => ['directory does not exist', _i_generic.process_nothing(
                $,
                null
            )],
            'node is not a directory': ($): _i_out._T_Read_Directory.SG => ['node is not a directory', _i_generic.process_nothing(
                $,
                null
            )],
        }),
    }
)
export const Read_File: _i_signatures._T_Read_File = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'device not ready': ($): _i_out._T_Read_File.SG => ['device not ready', _i_generic.process_nothing(
                $,
                null
            )],
            'file does not exist': ($): _i_out._T_Read_File.SG => ['file does not exist', _i_generic.process_nothing(
                $,
                null
            )],
            'file too large': ($): _i_out._T_Read_File.SG => ['file too large', _i_generic.process_nothing(
                $,
                null
            )],
            'node is not a file': ($): _i_out._T_Read_File.SG => ['node is not a file', _i_generic.process_nothing(
                $,
                null
            )],
            'permission denied': ($): _i_out._T_Read_File.SG => ['permission denied', _i_generic.process_nothing(
                $,
                null
            )],
        }),
    }
)
export const Remove: _i_signatures._T_Remove = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'node does not exist': ($): _i_out._T_Remove.SG => ['node does not exist', _i_generic.process_nothing(
                $,
                null
            )],
            'permission denied': ($): _i_out._T_Remove.SG => ['permission denied', _i_generic.process_nothing(
                $,
                null
            )],
        }),
    }
)
export const Stat: _i_signatures._T_Stat = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'node does not exist': ($): _i_out._T_Stat.SG => ['node does not exist', _i_generic.process_nothing(
                $,
                null
            )],
        }),
    }
)
export const Write_File: _i_signatures._T_Write_File = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'permission denied': ($): _i_out._T_Write_File.SG => ['permission denied', _i_generic.process_nothing(
                $,
                null
            )],
        }),
    }
)
