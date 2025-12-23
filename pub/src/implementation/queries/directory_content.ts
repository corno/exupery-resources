import * as _easync from 'exupery-core-async'
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _ei from 'exupery-core-internals'

import * as d from "../../interface/to_be_generated/directory_content"
import * as inf from "../../interface/algorithms/queries/read_directory_content"

export const $$: inf.Signature = _easync.create_query_function(
    ($p, $r) => $r['read directory'](
        {
            'path': $p.path,
        },
        ($): inf.Error => ['read directory', $],
    ).query_without_error_transformation(
        ($) => {
            return _easync.q.dictionary.parallel(
                $.map(($): _et.Query_Result<d.Node, inf.Node_Error> => {
                    const path = $.path
                    return _ea.cc($['node type'], ($) => {
                        switch ($[0]) {
                            case 'file': return _ea.ss($, ($): _et.Query_Result<d.Node, inf.Node_Error> => $r['read file'](
                                path,
                                ($): inf.Node_Error => ['file', $],
                            ).transform_result<d.Node>(($) => ['file', $]))
                            case 'directory': return _ea.ss($, ($): _et.Query_Result<d.Node, inf.Node_Error> => {
                                return $$(
                                    $r,
                                )(
                                    {
                                        'path': path,
                                    },
                                    ($): inf.Node_Error => ['directory', $]
                                ).transform_result<d.Node>(($): d.Node => ['directory', $])
                            })
                            case 'other': return _ea.ss($, ($) => _easync.q.fixed(['other', null]))
                            default: return _ea.au($[0])
                        }
                    })
                }),
                ($): inf.Error => ['directory content processing', $],
            )
        }
    )
)
