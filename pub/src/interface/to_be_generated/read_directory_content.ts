import * as _et from 'exupery-core-types'
import * as _easync from 'exupery-core-async'

import * as d_read_directory from "../generated/pareto/schemas/read_directory/data_types/source"
import * as d_read_file from "../generated/pareto/schemas/read_file/data_types/source"
import * as d_path from "../generated/pareto/schemas/path/data_types/source"
import * as d_directory_contents from "./directory_content"



export type Parameters = {
    'path': d_path.Node_Path,
}

export type Result = d_directory_contents.Directory

export type Node_Error =
    | ['file', d_read_file.Error]
    | ['directory', Error]

export type Error =
    | ['read directory', d_read_directory.Error]
    | ['directory content processing', _et.Dictionary<Node_Error>]
