import * as _pt from 'exupery-core-types'

import * as _i_in from "./data_types/source"
import * as _i_out from "./data_types/target"

// **** TYPES

export type _T_Node_Type = (
    $$_: _i_in._T_Node_Type,
    $$_p: null,
) => _i_out._T_Node_Type

export type _T_Read_Directory = (
    $$_: _i_in._T_Read_Directory,
    $$_p: null,
) => _i_out._T_Read_Directory

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Node_Type = _T_Node_Type

export type Read_Directory = _T_Read_Directory

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Node_Type {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Node_Type
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Node_Type
}

export namespace _T_Read_Directory {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Read_Directory
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Read_Directory
}

// *** ALIASES FOR NESTED TYPES

export namespace Node_Type {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Node_Type
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Node_Type
}

export namespace Read_Directory {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Read_Directory
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Read_Directory
}
