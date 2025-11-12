import * as _pt from 'exupery-core-types'

import * as _i_core from "../../../core/resolved"

// **** TYPES

export type _T_Path = {
    readonly 'path': string
    readonly 'escape spaces in path': boolean
}

export type _T_Parameters = _T_Path

export type _T_Error = _i_core._T_State_Group<null, 
    | readonly ['node does not exist', null]
>

export type _T_Node_Type = _i_core._T_State_Group<null, 
    | readonly ['file', null]
    | readonly ['directory', null]
>

export type _T_Result = _T_Node_Type

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Path = _T_Path

export type Parameters = _T_Parameters

export type Error = _T_Error

export type Node_Type = _T_Node_Type

export type Result = _T_Result

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Path {
    export type path = string
    export type escape_spaces_in_path = boolean
}

export namespace _T_Parameters {
}

export namespace _T_Error {
    
    export namespace SG {
        export type node_does_not_exist = null
    }
    export type SG = 
        | readonly ['node does not exist', null]
}

export namespace _T_Node_Type {
    
    export namespace SG {
        export type file = null
        export type directory = null
    }
    export type SG = 
        | readonly ['file', null]
        | readonly ['directory', null]
}

export namespace _T_Result {
}

// *** ALIASES FOR NESTED TYPES

export namespace Path {
    export type path = string
    export type escape_spaces_in_path = boolean
}

export namespace Parameters {
}

export namespace Error {
    
    export namespace SG {
        export type node_does_not_exist = null
    }
    export type SG = 
        | readonly ['node does not exist', null]
}

export namespace Node_Type {
    
    export namespace SG {
        export type file = null
        export type directory = null
    }
    export type SG = 
        | readonly ['file', null]
        | readonly ['directory', null]
}

export namespace Result {
}
