import * as _pt from 'exupery-core-types'

import * as _i_core from "../../../core/unconstrained"

// **** TYPES

export type _T_Copy = _i_core._T_State_Group<null, 
    | readonly ['device not ready', null]
    | readonly ['file too large', null]
    | readonly ['node is not a file', null]
    | readonly ['permission denied', null]
    | readonly ['source does not exist', null]
>

export type _T_Make_Directory = _i_core._T_State_Group<null, 
    | readonly ['directory already exists', null]
    | readonly ['permission denied', null]
>

export type _T_Read_Directory = _i_core._T_State_Group<null, 
    | readonly ['directory does not exist', null]
    | readonly ['node is not a directory', null]
>

export type _T_Read_File = _i_core._T_State_Group<null, 
    | readonly ['device not ready', null]
    | readonly ['file does not exist', null]
    | readonly ['file too large', null]
    | readonly ['node is not a file', null]
    | readonly ['permission denied', null]
>

export type _T_Remove = _i_core._T_State_Group<null, 
    | readonly ['node does not exist', null]
    | readonly ['permission denied', null]
>

export type _T_Stat = _i_core._T_State_Group<null, 
    | readonly ['node does not exist', null]
>

export type _T_Write_File = _i_core._T_State_Group<null, 
    | readonly ['permission denied', null]
>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Copy = _T_Copy

export type Make_Directory = _T_Make_Directory

export type Read_Directory = _T_Read_Directory

export type Read_File = _T_Read_File

export type Remove = _T_Remove

export type Stat = _T_Stat

export type Write_File = _T_Write_File

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Copy {
    
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

export namespace _T_Make_Directory {
    
    export namespace SG {
        export type directory_already_exists = null
        export type permission_denied = null
    }
    export type SG = 
        | readonly ['directory already exists', null]
        | readonly ['permission denied', null]
}

export namespace _T_Read_Directory {
    
    export namespace SG {
        export type directory_does_not_exist = null
        export type node_is_not_a_directory = null
    }
    export type SG = 
        | readonly ['directory does not exist', null]
        | readonly ['node is not a directory', null]
}

export namespace _T_Read_File {
    
    export namespace SG {
        export type device_not_ready = null
        export type file_does_not_exist = null
        export type file_too_large = null
        export type node_is_not_a_file = null
        export type permission_denied = null
    }
    export type SG = 
        | readonly ['device not ready', null]
        | readonly ['file does not exist', null]
        | readonly ['file too large', null]
        | readonly ['node is not a file', null]
        | readonly ['permission denied', null]
}

export namespace _T_Remove {
    
    export namespace SG {
        export type node_does_not_exist = null
        export type permission_denied = null
    }
    export type SG = 
        | readonly ['node does not exist', null]
        | readonly ['permission denied', null]
}

export namespace _T_Stat {
    
    export namespace SG {
        export type node_does_not_exist = null
    }
    export type SG = 
        | readonly ['node does not exist', null]
}

export namespace _T_Write_File {
    
    export namespace SG {
        export type permission_denied = null
    }
    export type SG = 
        | readonly ['permission denied', null]
}

// *** ALIASES FOR NESTED TYPES

export namespace Copy {
    
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

export namespace Make_Directory {
    
    export namespace SG {
        export type directory_already_exists = null
        export type permission_denied = null
    }
    export type SG = 
        | readonly ['directory already exists', null]
        | readonly ['permission denied', null]
}

export namespace Read_Directory {
    
    export namespace SG {
        export type directory_does_not_exist = null
        export type node_is_not_a_directory = null
    }
    export type SG = 
        | readonly ['directory does not exist', null]
        | readonly ['node is not a directory', null]
}

export namespace Read_File {
    
    export namespace SG {
        export type device_not_ready = null
        export type file_does_not_exist = null
        export type file_too_large = null
        export type node_is_not_a_file = null
        export type permission_denied = null
    }
    export type SG = 
        | readonly ['device not ready', null]
        | readonly ['file does not exist', null]
        | readonly ['file too large', null]
        | readonly ['node is not a file', null]
        | readonly ['permission denied', null]
}

export namespace Remove {
    
    export namespace SG {
        export type node_does_not_exist = null
        export type permission_denied = null
    }
    export type SG = 
        | readonly ['node does not exist', null]
        | readonly ['permission denied', null]
}

export namespace Stat {
    
    export namespace SG {
        export type node_does_not_exist = null
    }
    export type SG = 
        | readonly ['node does not exist', null]
}

export namespace Write_File {
    
    export namespace SG {
        export type permission_denied = null
    }
    export type SG = 
        | readonly ['permission denied', null]
}
