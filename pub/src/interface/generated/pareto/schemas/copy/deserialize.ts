import * as _et from 'exupery-core-types'

import * as _i_out from "./data_types/target"
import * as _i_vd from "./value_deserializers"

// **** TYPES

export type _T_Path = (
    $$_: string,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Path

export type _T_Parameters = (
    $$_: string,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Parameters

export type _T_Error = (
    $$_: string,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Error

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Path = _T_Path

export type Parameters = _T_Parameters

export type Error = _T_Error

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Path {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Path
}

export namespace _T_Parameters {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Parameters
}

export namespace _T_Error {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Error
}

// *** ALIASES FOR NESTED TYPES

export namespace Path {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Path
}

export namespace Parameters {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Parameters
}

export namespace Error {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Error
}
