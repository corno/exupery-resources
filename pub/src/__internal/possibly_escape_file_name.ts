export const $$ = (path: string, escape: boolean): string => {
    if (escape) {
        return path.replace(/ /g, '_')
    }
    return path
}