import * as _easync from 'exupery-core-async'
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _ei from 'exupery-core-internals'

import * as d from "../../interface/to_be_generated/directory_content"
import * as inf from "../../interface/algorithms/commands/write_directory_content"

import * as t_path_to_path from "../transformers/path/path"

export const $$: inf.Signature = _easync.create_command_procedure(
    ($p, $cr, $qr) => [
        // $cr['make directory'].execute(
        //     $p.path,
        //     ($): inf.Error => ['make directory', $]
        // ),
        _easync.p.dictionary.parallel<d.Node, inf.Error, inf.Node_Error>(
            $p.directory,
            ($, key) => [
                _ea.cc($, ($) => {
                    switch ($[0]) {
                        case 'other': return _ea.ss($, ($) => _easync.p.sequence([]))
                        case 'file': return _ea.ss($, ($) => $cr['write file'].execute(
                            {
                                'path': t_path_to_path.create_node_path($p.path, key),
                                'data': $
                            },
                            ($): inf.Node_Error => ['file', $]
                        ))
                        case 'directory': return _ea.ss($, ($) => $$($cr, null).execute(
                            {
                                'directory': $,
                                'path': t_path_to_path.extend_context_path($p.path, { 'addition': _ea.list_literal([key]) }),
                            },
                            ($): inf.Node_Error => ['directory', $]
                            
                        ))
                            
                        default: return _ea.au($[0])
                    }
                })
            ],
            ($): inf.Error => ['directory content', $]
        )
    ]
)
