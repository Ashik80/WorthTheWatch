export interface Movie {
    id: number;
    name: string;
    description: string;
    genre: string;
    thumbNail: string;
    displayImage: string;
    pgRating?: string;
    duration: string;
    releaseInfo: Date;
    trailerUrl?: string;
}

export interface UnreleasedMovie extends Movie {
    news: string;
}
