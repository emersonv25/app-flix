export interface Serie {
    serieKey?: string,
    title?: string,
    description?: string,
    posterImg?: string,
    releasedDate?: string,
    categories?: string[],
    seasons : Season[],
}

export interface Season {
    seasonKey: string,
    seasonNum: number,
    episodes: Episode []
}

export interface Episode  {
    episodeKey: string,
    episodeNum: number,
    title?: string,
    description?: string,
    episodeVideo: string [],
    episodeImg? : string,
    seasonKey? : string, 
    serieKey?: string,
    previousEpisodeKey?: string,
    nextEpisodeKey?: string
}
