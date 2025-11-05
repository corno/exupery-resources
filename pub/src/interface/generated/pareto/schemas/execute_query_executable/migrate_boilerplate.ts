import * as _pt from 'exupery-core-types'

import * as _i_in from "./data_types/source"
import * as _i_out from "./data_types/target"

// **** TYPES

export type _T_Error = (
    $$_: _i_in._T_Error,
    $$_p: null,
) => _i_out._T_Error

export type _T_Parameters = (
    $$_: _i_in._T_Parameters,
    $$_p: null,
) => _i_out._T_Parameters

export type _T_Result = (
    $$_: _i_in._T_Result,
    $$_p: null,
) => _i_out._T_Result

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Error = _T_Error

export type Parameters = _T_Parameters

export type Result = _T_Result

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Error {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Error
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Error
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

export namespace _T_Result {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Result
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Result
}

// *** ALIASES FOR NESTED TYPES

export namespace Error {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Error
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Error
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

export namespace Result {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Result
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Result
}
