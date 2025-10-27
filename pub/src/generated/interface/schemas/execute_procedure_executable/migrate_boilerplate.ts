import * as _pt from 'exupery-core-types'

import * as _i_in from "./data_types/source"
import * as _i_out from "./data_types/target"

// **** TYPES

export type _T_Errors = (
    $$_: _i_in._T_Errors,
    $$_p: null,
) => _i_out._T_Errors

export type _T_Parameters = (
    $$_: _i_in._T_Parameters,
    $$_p: null,
) => _i_out._T_Parameters

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Errors = _T_Errors

export type Parameters = _T_Parameters

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Errors {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Errors
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Errors
}

export namespace _T_Parameters {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Parameters
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Parameters
}

// *** ALIASES FOR NESTED TYPES

export namespace Errors {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Errors
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Errors
}

export namespace Parameters {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Parameters
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Parameters
}
