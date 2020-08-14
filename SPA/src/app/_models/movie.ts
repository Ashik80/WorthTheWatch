export interface Movie {
    id: number;
    name: string;
    description: string;
    genre: string;
    thumbNail: string;
    pgRating?: string;
    duration: string;
    releaseInfo: Date;
    trailerUrl?: string;
}

export interface UnreleasedMovie extends Movie {
    displayImage: string;
    news: string;
}

export interface ReleasedMovie extends Movie {
    rating: number;
}
