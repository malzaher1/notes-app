export interface Note {
    id: number;
    title: string;
    content: string;
    photoUrl?: string; // Optional property for the photo URL
    timestamp?: Date;  // Optional property for the timestamp
    photo?: string;    // Optional property for the photo data
    weather?: any;     // Optional property for the weather data
}