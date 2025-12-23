import * as _et from 'exupery-core-types'
import * as _easync from 'exupery-core-async'

import * as d_read_directory from "../generated/pareto/schemas/read_directory/data_types/source"
import * as d_read_file from "../generated/pareto/schemas/read_file/data_types/source"
import * as d_path from "../generated/pareto/schemas/path/data_types/source"


export type Node =
    | ['other', null]
    | ['file', string]
    | ['directory', Directory]

export type Directory = _et.Dictionary<Node>
