export interface MixPictures {
    medium: string;
    large: string;
    xl: string;
}

export interface Mix {
    key: string;
    slug: string;
    name: string;
    url: string;
    createdTime: string;
    audioLength: number | null;
    playCount: number | null;
    favoriteCount: number | null;
    tags: string[];
    pictures: MixPictures;
}

export interface MixcloudProfile {
    name: string;
    username: string;
    url: string;
    location: string;
    biog: string;
    createdTime: string;
    cloudcastCount: number;
    followerCount: number;
    picture: string;
}

export interface MixesSnapshot {
    generatedAt: string;
    source: string;
    profile: MixcloudProfile;
    mixes: Mix[];
}

export interface InstagramPost {
    shortcode: string;
    kind: "p" | "reel";
    media: "photo" | "video";
    date: string;
    caption: string;
}
