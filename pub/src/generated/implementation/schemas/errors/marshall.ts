import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/core/astn_target"
import * as _i_signatures from "../../../interface/schemas/errors/marshall"


export const Copy: _i_signatures._T_Copy = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'device not ready': return _pa.ss($, ($) => ({
            'state': "device not ready",
            'value': ['nothing', null],
        }))
        case 'file too large': return _pa.ss($, ($) => ({
            'state': "file too large",
            'value': ['nothing', null],
        }))
        case 'node is not a file': return _pa.ss($, ($) => ({
            'state': "node is not a file",
            'value': ['nothing', null],
        }))
        case 'permission denied': return _pa.ss($, ($) => ({
            'state': "permission denied",
            'value': ['nothing', null],
        }))
        case 'source does not exist': return _pa.ss($, ($) => ({
            'state': "source does not exist",
            'value': ['nothing', null],
        }))
        default: return _pa.au($[0])
    }
})]
export const Make_Directory: _i_signatures._T_Make_Directory = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'directory already exists': return _pa.ss($, ($) => ({
            'state': "directory already exists",
            'value': ['nothing', null],
        }))
        case 'permission denied': return _pa.ss($, ($) => ({
            'state': "permission denied",
            'value': ['nothing', null],
        }))
        default: return _pa.au($[0])
    }
})]
export const Read_Directory: _i_signatures._T_Read_Directory = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'directory does not exist': return _pa.ss($, ($) => ({
            'state': "directory does not exist",
            'value': ['nothing', null],
        }))
        case 'node is not a directory': return _pa.ss($, ($) => ({
            'state': "node is not a directory",
            'value': ['nothing', null],
        }))
        default: return _pa.au($[0])
    }
})]
export const Read_File: _i_signatures._T_Read_File = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'device not ready': return _pa.ss($, ($) => ({
            'state': "device not ready",
            'value': ['nothing', null],
        }))
        case 'file does not exist': return _pa.ss($, ($) => ({
            'state': "file does not exist",
            'value': ['nothing', null],
        }))
        case 'file too large': return _pa.ss($, ($) => ({
            'state': "file too large",
            'value': ['nothing', null],
        }))
        case 'node is not a file': return _pa.ss($, ($) => ({
            'state': "node is not a file",
            'value': ['nothing', null],
        }))
        case 'permission denied': return _pa.ss($, ($) => ({
            'state': "permission denied",
            'value': ['nothing', null],
        }))
        default: return _pa.au($[0])
    }
})]
export const Remove: _i_signatures._T_Remove = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'node does not exist': return _pa.ss($, ($) => ({
            'state': "node does not exist",
            'value': ['nothing', null],
        }))
        case 'permission denied': return _pa.ss($, ($) => ({
            'state': "permission denied",
            'value': ['nothing', null],
        }))
        default: return _pa.au($[0])
    }
})]
export const Stat: _i_signatures._T_Stat = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'node does not exist': return _pa.ss($, ($) => ({
            'state': "node does not exist",
            'value': ['nothing', null],
        }))
        default: return _pa.au($[0])
    }
})]
export const Write_File: _i_signatures._T_Write_File = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'permission denied': return _pa.ss($, ($) => ({
            'state': "permission denied",
            'value': ['nothing', null],
        }))
        default: return _pa.au($[0])
    }
})]
