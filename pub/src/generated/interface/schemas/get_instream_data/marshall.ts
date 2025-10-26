import * as _pt from 'exupery-core-types'

import * as _i_in from "./data_types/source"
import * as _i_out from "../../core/astn_target"
import * as _i_vs from "./value_serializers"

// **** TYPES

export type _T_Result = (
    $$_: _i_in._T_Result,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Result = _T_Result

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Result {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Result
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

// *** ALIASES FOR NESTED TYPES

export namespace Result {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Result
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}
