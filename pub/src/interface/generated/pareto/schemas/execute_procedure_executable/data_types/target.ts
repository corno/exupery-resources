import * as _pt from 'exupery-core-types'

import * as _i_core from "../../../core/unconstrained"

// **** TYPES

export type _T_Errors = _i_core._T_State_Group<null, 
    | readonly ['failed to spawn', {
        readonly 'message': string
    }]
    | readonly ['non zero exit code', {
        readonly 'exitCode': number
        readonly 'stderr': string
    }]
>

export type _T_Parameters = {
    readonly 'args': _i_core._T_List<null, string>
    readonly 'program': string
}

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Errors = _T_Errors

export type Parameters = _T_Parameters

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Errors {
    
    export namespace SG {
        
        export namespace failed_to_spawn {
            export type message = string
        }
        export type failed_to_spawn = {
            readonly 'message': string
        }
        
        export namespace non_zero_exit_code {
            export type exitCode = number
            export type stderr = string
        }
        export type non_zero_exit_code = {
            readonly 'exitCode': number
            readonly 'stderr': string
        }
    }
    export type SG = 
        | readonly ['failed to spawn', {
            readonly 'message': string
        }]
        | readonly ['non zero exit code', {
            readonly 'exitCode': number
            readonly 'stderr': string
        }]
}

export namespace _T_Parameters {
    
    export namespace args {
        export type L = string
    }
    export type args = _i_core._T_List<null, string>
    export type program = string
}

// *** ALIASES FOR NESTED TYPES

export namespace Errors {
    
    export namespace SG {
        
        export namespace failed_to_spawn {
            export type message = string
        }
        export type failed_to_spawn = {
            readonly 'message': string
        }
        
        export namespace non_zero_exit_code {
            export type exitCode = number
            export type stderr = string
        }
        export type non_zero_exit_code = {
            readonly 'exitCode': number
            readonly 'stderr': string
        }
    }
    export type SG = 
        | readonly ['failed to spawn', {
            readonly 'message': string
        }]
        | readonly ['non zero exit code', {
            readonly 'exitCode': number
            readonly 'stderr': string
        }]
}

export namespace Parameters {
    
    export namespace args {
        export type L = string
    }
    export type args = _i_core._T_List<null, string>
    export type program = string
}
