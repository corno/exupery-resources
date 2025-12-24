import * as _et from 'exupery-core-types'
import * as _easync from 'exupery-core-async'

export type Node =
    | ['other', null]
    | ['file', string]
    | ['directory', Directory]

export type Directory = _et.Dictionary<Node>
