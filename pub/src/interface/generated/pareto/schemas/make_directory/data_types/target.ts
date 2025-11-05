import * as _pt from 'exupery-core-types'

import * as _i_core from "../../../core/unconstrained"

// **** TYPES

export type _T_Error = _i_core._T_State_Group<null, 
    | readonly ['directory already exists', null]
    | readonly ['permission denied', null]
>

export type _T_Parameters = _T_Path

export type _T_Path = {
    readonly 'escape spaces in path': boolean
    readonly 'path': string
}

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Error = _T_Error

export type Parameters = _T_Parameters

export type Path = _T_Path

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Error {
    
    export namespace SG {
        export type directory_already_exists = null
        export type permission_denied = null
    }
    export type SG = 
        | readonly ['directory already exists', null]
        | readonly ['permission denied', null]
}

export namespace _T_Parameters {
}

export namespace _T_Path {
    export type escape_spaces_in_path = boolean
    export type path = string
}

// *** ALIASES FOR NESTED TYPES

export namespace Error {
    
    export namespace SG {
        export type directory_already_exists = null
        export type permission_denied = null
    }
    export type SG = 
        | readonly ['directory already exists', null]
        | readonly ['permission denied', null]
}

export namespace Parameters {
}

export namespace Path {
    export type escape_spaces_in_path = boolean
    export type path = string
}
