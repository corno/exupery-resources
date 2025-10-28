import * as _pt from 'exupery-core-types'

import * as _i_core from "../../../core/resolved"

// **** TYPES

export type _T_Errors = _i_core._T_State_Group<null, 
    | readonly ['node does not exist', null]
    | readonly ['permission denied', null]
>

export type _T_Parameters = {
    readonly 'error if not exists': boolean
    readonly 'path': _T_Path
}

export type _T_Path = {
    readonly 'escape spaces in path': boolean
    readonly 'path': string
}

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Errors = _T_Errors

export type Parameters = _T_Parameters

export type Path = _T_Path

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Errors {
    
    export namespace SG {
        export type node_does_not_exist = null
        export type permission_denied = null
    }
    export type SG = 
        | readonly ['node does not exist', null]
        | readonly ['permission denied', null]
}

export namespace _T_Parameters {
    export type error_if_not_exists = boolean
    
    export namespace path {
    }
    export type path = _T_Path
}

export namespace _T_Path {
    export type escape_spaces_in_path = boolean
    export type path = string
}

// *** ALIASES FOR NESTED TYPES

export namespace Errors {
    
    export namespace SG {
        export type node_does_not_exist = null
        export type permission_denied = null
    }
    export type SG = 
        | readonly ['node does not exist', null]
        | readonly ['permission denied', null]
}

export namespace Parameters {
    export type error_if_not_exists = boolean
    
    export namespace path {
    }
    export type path = _T_Path
}

export namespace Path {
    export type escape_spaces_in_path = boolean
    export type path = string
}
