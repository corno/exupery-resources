import * as _et from 'exupery-core-types'

import * as _i_core from "../../../core/resolved"

// **** TYPES

export type _T_Path = {
    readonly 'path': string
    readonly 'escape spaces in path': boolean
}

export type _T_Parameters = {
    readonly 'path': _T_Path
    readonly 'error if not exists': boolean
}

export type _T_Error = _i_core._T_State_Group<null, 
    | readonly ['node does not exist', null]
    | readonly ['permission denied', null]
>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Path = _T_Path

export type Parameters = _T_Parameters

export type Error = _T_Error

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Path {
    export type path = string
    export type escape_spaces_in_path = boolean
}

export namespace _T_Parameters {
    
    export namespace path {
    }
    export type path = _T_Path
    export type error_if_not_exists = boolean
}

export namespace _T_Error {
    
    export namespace SG {
        export type node_does_not_exist = null
        export type permission_denied = null
    }
    export type SG = 
        | readonly ['node does not exist', null]
        | readonly ['permission denied', null]
}

// *** ALIASES FOR NESTED TYPES

export namespace Path {
    export type path = string
    export type escape_spaces_in_path = boolean
}

export namespace Parameters {
    
    export namespace path {
    }
    export type path = _T_Path
    export type error_if_not_exists = boolean
}

export namespace Error {
    
    export namespace SG {
        export type node_does_not_exist = null
        export type permission_denied = null
    }
    export type SG = 
        | readonly ['node does not exist', null]
        | readonly ['permission denied', null]
}
