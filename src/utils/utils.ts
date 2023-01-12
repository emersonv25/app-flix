import { Episode } from "../@types/serie"

export  const array_chunk_episode = (array: Episode [], tamanho: number) => {
    const chunks = []
    let i = 0
    const n = array.length
    while (i < n) {
        chunks.push(array.slice(i, i += tamanho))
    }
    return chunks
}
export function dynamicSort(property: any) {
    let sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a: any, b: any) {
        /* next line works with strings and numbers, 
         * and you may want to customize it to your needs
         */
        const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}