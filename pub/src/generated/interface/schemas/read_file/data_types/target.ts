import * as _pt from 'exupery-core-types'

import * as _i_core from "../../../core/unconstrained"

// **** TYPES

export type _T_Errors = _i_core._T_State_Group<null, 
    | readonly ['device not ready', null]
    | readonly ['file does not exist', null]
    | readonly ['file too large', null]
    | readonly ['node is not a file', null]
    | readonly ['permission denied', null]
>

export type _T_Parameters = _T_Path

export type _T_Path = {
    readonly 'escape spaces in path': boolean
    readonly 'path': string
}

export type _T_Result = string

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Errors = _T_Errors

export type Parameters = _T_Parameters

export type Path = _T_Path

export type Result = _T_Result

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Errors {
    
    export namespace SG {
        export type device_not_ready = null
        export type file_does_not_exist = null
        export type file_too_large = null
        export type node_is_not_a_file = null
        export type permission_denied = null
    }
    export type SG = 
        | readonly ['device not ready', null]
        | readonly ['file does not exist', null]
        | readonly ['file too large', null]
        | readonly ['node is not a file', null]
        | readonly ['permission denied', null]
}

export namespace _T_Parameters {
}

export namespace _T_Path {
    export type escape_spaces_in_path = boolean
    export type path = string
}

// *** ALIASES FOR NESTED TYPES

export namespace Errors {
    
    export namespace SG {
        export type device_not_ready = null
        export type file_does_not_exist = null
        export type file_too_large = null
        export type node_is_not_a_file = null
        export type permission_denied = null
    }
    export type SG = 
        | readonly ['device not ready', null]
        | readonly ['file does not exist', null]
        | readonly ['file too large', null]
        | readonly ['node is not a file', null]
        | readonly ['permission denied', null]
}

export namespace Parameters {
}

export namespace Path {
    export type escape_spaces_in_path = boolean
    export type path = string
}
