import * as _et from 'exupery-core-types'

import * as _i_core from "../../../core/unconstrained"

// **** TYPES

export type _T_Path = {
    readonly 'path': string
    readonly 'escape spaces in path': boolean
}

export type _T_Parameters = {
    readonly 'path': _T_Path
    readonly 'prepend results with path': boolean
}

export type _T_Error = _i_core._T_State_Group<null, 
    | readonly ['directory does not exist', null]
    | readonly ['node is not a directory', null]
>

export type _T_Node_Type = _i_core._T_State_Group<null, 
    | readonly ['file', null]
    | readonly ['directory', null]
>

export type _T_Result = _i_core._T_Dictionary<null, _T_Node_Type>

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
    
    export namespace path {
    }
    export type path = _T_Path
    export type prepend_results_with_path = boolean
}

export namespace _T_Error {
    
    export namespace SG {
        export type directory_does_not_exist = null
        export type node_is_not_a_directory = null
    }
    export type SG = 
        | readonly ['directory does not exist', null]
        | readonly ['node is not a directory', null]
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
    
    export namespace D {
    }
    export type D = _T_Node_Type
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
    export type prepend_results_with_path = boolean
}

export namespace Error {
    
    export namespace SG {
        export type directory_does_not_exist = null
        export type node_is_not_a_directory = null
    }
    export type SG = 
        | readonly ['directory does not exist', null]
        | readonly ['node is not a directory', null]
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
    
    export namespace D {
    }
    export type D = _T_Node_Type
}
