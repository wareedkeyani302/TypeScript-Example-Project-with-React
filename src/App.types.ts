export interface AppProps {
    title: string;
}
export interface Name {
    title: string;
    first: string;
    last: string;
}
export interface Login {
    uuid: string;
}
export interface Id {
    name: string;
    value: number;
}
export interface Picture {
    large: string;
    medium: string;
    thumbail: string;
}
export interface Users {
    id: Id;
    name: Name;
    login: Login;
    email: string;
    gender: string;
    phone: number;
    picture: Picture;
}