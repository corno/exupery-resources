import * as _et from 'exupery-core-types'
import * as _easync from 'exupery-core-async'

import * as d_make_directory from "../generated/pareto/schemas/make_directory/data_types/source"
import * as d_write_file from "../generated/pareto/schemas/write_file/data_types/source"
import * as d_path from "../generated/pareto/schemas/path/data_types/source"
import * as d_directory_contents from "../to_be_generated/directory_content"

export type Parameters = {
    'path': d_path.Context_Path,
    'directory': d_directory_contents.Directory
}

export type Node_Error =
    | ['file', d_write_file.Error]
    | ['directory', Error]

export type Error =
    // | ['make directory', d_make_directory.Error]
    | ['directory content', _et.Dictionary<Node_Error>]
