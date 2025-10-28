import * as _easync from 'exupery-core-async'
import * as _ei from 'exupery-core-internals'
import * as _et from 'exupery-core-types'

import * as d from "../../interface/generated/pareto/schemas/get_instream_data/data_types/target"

export const $$: _easync.Guaranteed_Query_Initializer<null, d.Result> = (
) => {
    return _easync.__create_guaranteed_query({
        'execute': (on_value) => {
            
            const stdin = process.stdin;
            let data = '';
            stdin.setEncoding('utf8');

            stdin.on('data', (chunk: string) => {
                data += chunk;
            });

            stdin.on('end', () => {
                on_value(data);
            });

            stdin.resume();
        }
    })
}