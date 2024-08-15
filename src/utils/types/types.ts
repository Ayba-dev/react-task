export interface  IUser {
    name: string;
    email: string;
    password: string
}

export interface INotes  {
    id: string;
    title: string;
    date: string
    text?: string
}