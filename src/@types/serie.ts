export interface Serie {
    serieKey?: string,
    title?: string,
    description?: string,
    posterImg?: string,
    releasedDate?: string,
    rating?: string
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
    episodeVideos: EpisodeVideos [],
    episodeImg? : string,
    seasonKey? : string, 
    serieKey?: string,
    previousEpisodeKey?: string,
    nextEpisodeKey?: string,
    releasedDate?: string
}
export interface EpisodeVideos {
    optionName?: string,
    videoUrl: string,
    isIframe: boolean
}
