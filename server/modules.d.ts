declare namespace NodeJS {
    export interface ProcessEnv {
        PORT: string;
        MONGO_URI: string;
        SECRET_STRING: string;
    }
}
