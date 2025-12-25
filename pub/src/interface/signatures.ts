import * as _et from 'exupery-core-types'

import * as resources from "./resources"

import * as d_write_directory_content from "./to_be_generated/write_directory_content"

export namespace commands {

    export type write_directory_content = _et.Command_Procedure<
        resources.commands.write_directory_content,
        {
            // 'make directory': resources_exupery.commands.make_directory
            'write file': resources.commands.write_file

        },
        null>
    export type write_file = _et.Command_Procedure<
        resources.commands.write_file,
        null,
        null
    >
    export type make_directory = _et.Command_Procedure<
        resources.commands.make_directory,
        null,
        null
    >
    export type remove = _et.Command_Procedure<
        resources.commands.remove,
        null,
        null
    >
    export type copy = _et.Command_Procedure<
        resources.commands.copy,
        null,
        null
    >
    export type log = _et.Command_Procedure<
        resources.commands.log,
        null,
        null
    >
    export type log_error = _et.Command_Procedure<
        resources.commands.log_error,
        null,
        null
    >
    export type execute_command_procedure_executable = _et.Command_Procedure<
        resources.commands.execute_command_executable,
        null,
        null
    >
    export type execute_any_command_procedure_executable = _et.Command_Procedure<
        resources.commands.execute_any_command_executable,
        null,
        null
    >
    export type execute_any_smelly_command_procedure_executable = _et.Command_Procedure<
        resources.commands.execute_any_smelly_command_executable,
        null,
        null
    >
    export type write_to_stdout = _et.Command_Procedure<
        resources.commands.write_to_stdout,
        null,
        null
    >
    export type write_to_stderr = _et.Command_Procedure<
        resources.commands.write_to_stderr,
        null,
        null
    >

}

export namespace queries {
    export type read_directory_content = _et.Query_Function<
        resources.queries.read_directory_content,
        {
            'read directory': resources.queries.read_directory,
            'read file': resources.queries.read_file,
        }
    >
    export type read_file = _et.Query_Function<
        resources.queries.read_file,
        null
    >
    export type stat = _et.Query_Function<
        resources.queries.stat,
        null
    >
    export type get_instream_data = _et.Query_Function<
        resources.queries.get_instream_data,
        null
    >
    export type execute_any_query_executable = _et.Query_Function<
        resources.queries.execute_any_query_executable,
        null
    >

}