import * as _pt from 'exupery-core-types'

import * as _i_core from "../../../core/resolved"

// **** TYPES

export type _T_Node_Type = _i_core._T_State_Group<null, 
    | readonly ['directory', null]
    | readonly ['file', null]
>

export type _T_Read_Directory = _i_core._T_Dictionary<null, _T_Node_Type>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Node_Type = _T_Node_Type

export type Read_Directory = _T_Read_Directory

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Node_Type {
    
    export namespace SG {
        export type directory = null
        export type file = null
    }
    export type SG = 
        | readonly ['directory', null]
        | readonly ['file', null]
}

export namespace _T_Read_Directory {
    
    export namespace D {
    }
    export type D = _T_Node_Type
}

// *** ALIASES FOR NESTED TYPES

export namespace Node_Type {
    
    export namespace SG {
        export type directory = null
        export type file = null
    }
    export type SG = 
        | readonly ['directory', null]
        | readonly ['file', null]
}

export namespace Read_Directory {
    
    export namespace D {
    }
    export type D = _T_Node_Type
}
