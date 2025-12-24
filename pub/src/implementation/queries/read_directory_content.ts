import * as _easync from 'exupery-core-async'
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _ei from 'exupery-core-internals'

import * as d_directory_content from "../../interface/to_be_generated/directory_content"
import * as d_read_directory_content from "../../interface/to_be_generated/read_directory_content"

import * as signatures from "../../interface/signatures"

export const $$: signatures.queries.read_directory_content = _easync.create_query_function(
    ($p, $r) => $r['read directory'](
        {
            'path': $p.path,
        },
        ($): d_read_directory_content.Error => ['read directory', $],
    ).query_without_error_transformation(
        ($) => {
            return _easync.q.dictionary.parallel(
                $.map(($): _et.Query_Result<d_directory_content.Node, d_read_directory_content.Node_Error> => {
                    const path = $.path
                    return _ea.cc($['node type'], ($) => {
                        switch ($[0]) {
                            case 'file': return _ea.ss($, ($): _et.Query_Result<d_directory_content.Node, d_read_directory_content.Node_Error> => $r['read file'](
                                path,
                                ($): d_read_directory_content.Node_Error => ['file', $],
                            ).transform_result<d_directory_content.Node>(($) => ['file', $]))
                            case 'directory': return _ea.ss($, ($): _et.Query_Result<d_directory_content.Node, d_read_directory_content.Node_Error> => {
                                return $$(
                                    $r,
                                )(
                                    {
                                        'path': path,
                                    },
                                    ($): d_read_directory_content.Node_Error => ['directory', $]
                                ).transform_result<d_directory_content.Node>(($): d_directory_content.Node => ['directory', $])
                            })
                            case 'other': return _ea.ss($, ($) => _easync.q.fixed(['other', null]))
                            default: return _ea.au($[0])
                        }
                    })
                }),
                ($): d_read_directory_content.Error => ['directory content processing', $],
            )
        }
    )
)
