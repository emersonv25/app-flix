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