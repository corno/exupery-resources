import * as _pt from 'exupery-core-types'

import * as _i_core from "../../../core/unconstrained"

// **** TYPES

export type _T_Errors = _i_core._T_State_Group<null, 
    | readonly ['directory does not exist', null]
    | readonly ['node is not a directory', null]
>

export type _T_Node_Type = _i_core._T_State_Group<null, 
    | readonly ['directory', null]
    | readonly ['file', null]
>

export type _T_Parameters = _T_Path

export type _T_Path = {
    readonly 'escape spaces in path': boolean
    readonly 'path': string
}

export type _T_Result = _i_core._T_Dictionary<null, _T_Node_Type>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Errors = _T_Errors

export type Node_Type = _T_Node_Type

export type Parameters = _T_Parameters

export type Path = _T_Path

export type Result = _T_Result

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Errors {
    
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
        export type directory = null
        export type file = null
    }
    export type SG = 
        | readonly ['directory', null]
        | readonly ['file', null]
}

export namespace _T_Parameters {
}

export namespace _T_Path {
    export type escape_spaces_in_path = boolean
    export type path = string
}

export namespace _T_Result {
    
    export namespace D {
    }
    export type D = _T_Node_Type
}

// *** ALIASES FOR NESTED TYPES

export namespace Errors {
    
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
        export type directory = null
        export type file = null
    }
    export type SG = 
        | readonly ['directory', null]
        | readonly ['file', null]
}

export namespace Parameters {
}

export namespace Path {
    export type escape_spaces_in_path = boolean
    export type path = string
}

export namespace Result {
    
    export namespace D {
    }
    export type D = _T_Node_Type
}
