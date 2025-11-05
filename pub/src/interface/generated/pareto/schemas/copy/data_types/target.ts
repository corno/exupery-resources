import * as _pt from 'exupery-core-types'

import * as _i_core from "../../../core/unconstrained"

// **** TYPES

export type _T_Error = _i_core._T_State_Group<null, 
    | readonly ['device not ready', null]
    | readonly ['file too large', null]
    | readonly ['node is not a file', null]
    | readonly ['permission denied', null]
    | readonly ['source does not exist', null]
>

export type _T_Parameters = {
    readonly 'options': {
        readonly 'errorOnExist': _pt.Optional_Value<boolean>
        readonly 'force': _pt.Optional_Value<boolean>
        readonly 'recursive': _pt.Optional_Value<boolean>
    }
    readonly 'source': _T_Path
    readonly 'target': _T_Path
}

export type _T_Path = {
    readonly 'escape spaces in path': boolean
    readonly 'path': string
}

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Error = _T_Error

export type Parameters = _T_Parameters

export type Path = _T_Path

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Error {
    
    export namespace SG {
        export type device_not_ready = null
        export type file_too_large = null
        export type node_is_not_a_file = null
        export type permission_denied = null
        export type source_does_not_exist = null
    }
    export type SG = 
        | readonly ['device not ready', null]
        | readonly ['file too large', null]
        | readonly ['node is not a file', null]
        | readonly ['permission denied', null]
        | readonly ['source does not exist', null]
}

export namespace _T_Parameters {
    
    export namespace options {
        
        export namespace errorOnExist {
            export type O = boolean
        }
        export type errorOnExist = _pt.Optional_Value<boolean>
        
        export namespace force {
            export type O = boolean
        }
        export type force = _pt.Optional_Value<boolean>
        
        export namespace recursive {
            export type O = boolean
        }
        export type recursive = _pt.Optional_Value<boolean>
    }
    export type options = {
        readonly 'errorOnExist': _pt.Optional_Value<boolean>
        readonly 'force': _pt.Optional_Value<boolean>
        readonly 'recursive': _pt.Optional_Value<boolean>
    }
    
    export namespace source {
    }
    export type source = _T_Path
    
    export namespace target {
    }
    export type target = _T_Path
}

export namespace _T_Path {
    export type escape_spaces_in_path = boolean
    export type path = string
}

// *** ALIASES FOR NESTED TYPES

export namespace Error {
    
    export namespace SG {
        export type device_not_ready = null
        export type file_too_large = null
        export type node_is_not_a_file = null
        export type permission_denied = null
        export type source_does_not_exist = null
    }
    export type SG = 
        | readonly ['device not ready', null]
        | readonly ['file too large', null]
        | readonly ['node is not a file', null]
        | readonly ['permission denied', null]
        | readonly ['source does not exist', null]
}

export namespace Parameters {
    
    export namespace options {
        
        export namespace errorOnExist {
            export type O = boolean
        }
        export type errorOnExist = _pt.Optional_Value<boolean>
        
        export namespace force {
            export type O = boolean
        }
        export type force = _pt.Optional_Value<boolean>
        
        export namespace recursive {
            export type O = boolean
        }
        export type recursive = _pt.Optional_Value<boolean>
    }
    export type options = {
        readonly 'errorOnExist': _pt.Optional_Value<boolean>
        readonly 'force': _pt.Optional_Value<boolean>
        readonly 'recursive': _pt.Optional_Value<boolean>
    }
    
    export namespace source {
    }
    export type source = _T_Path
    
    export namespace target {
    }
    export type target = _T_Path
}

export namespace Path {
    export type escape_spaces_in_path = boolean
    export type path = string
}
