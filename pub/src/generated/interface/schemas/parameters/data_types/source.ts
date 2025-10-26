import * as _pt from 'exupery-core-types'

import * as _i_core from "../../../core/resolved"

// **** TYPES

export type _T_Copy = {
    readonly 'options': {
        readonly 'errorOnExist': _pt.Optional_Value<boolean>
        readonly 'force': _pt.Optional_Value<boolean>
        readonly 'recursive': _pt.Optional_Value<boolean>
    }
    readonly 'source': _T_Path
    readonly 'target': _T_Path
}

export type _T_Log = {
    readonly 'lines': _i_core._T_List<null, string>
}

export type _T_Path = {
    readonly 'escape spaces in path': boolean
    readonly 'path': string
}

export type _T_Remove = {
    readonly 'error if not exists': boolean
    readonly 'path': _T_Path
}

export type _T_Write_File = {
    readonly 'data': string
    readonly 'path': _T_Path
}

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Copy = _T_Copy

export type Log = _T_Log

export type Path = _T_Path

export type Remove = _T_Remove

export type Write_File = _T_Write_File

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Copy {
    
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

export namespace _T_Log {
    
    export namespace lines {
        export type L = string
    }
    export type lines = _i_core._T_List<null, string>
}

export namespace _T_Path {
    export type escape_spaces_in_path = boolean
    export type path = string
}

export namespace _T_Remove {
    export type error_if_not_exists = boolean
    
    export namespace path {
    }
    export type path = _T_Path
}

export namespace _T_Write_File {
    export type data = string
    
    export namespace path {
    }
    export type path = _T_Path
}

// *** ALIASES FOR NESTED TYPES

export namespace Copy {
    
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

export namespace Log {
    
    export namespace lines {
        export type L = string
    }
    export type lines = _i_core._T_List<null, string>
}

export namespace Path {
    export type escape_spaces_in_path = boolean
    export type path = string
}

export namespace Remove {
    export type error_if_not_exists = boolean
    
    export namespace path {
    }
    export type path = _T_Path
}

export namespace Write_File {
    export type data = string
    
    export namespace path {
    }
    export type path = _T_Path
}
