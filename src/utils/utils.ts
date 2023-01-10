import { Episode } from "../@types/serie"

export  const array_chunk = (array: any [], tamanho: number) => {
    let chunks = [], i = 0, n = array.length
    while (i < n) {
        chunks.push(array.slice(i, i += tamanho))
    }
    return chunks
}

export  const array_chunk_episode = (array: Episode [], tamanho: number) => {
    let chunks = [], i = 0, n = array.length
    while (i < n) {
        chunks.push(array.slice(i, i += tamanho))
    }
    return chunks
}