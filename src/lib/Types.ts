import { Url } from "next/dist/shared/lib/router/router";

export interface IListRoute  {
    icon  : JSX.Element,
    link  : Url,
    title : String,
}

export interface IListNav {
    title : string,
    link  : Url,
}

export interface IListStatus  {
    title       : String,
    post        : number,
    link        : Url,
    icon        : JSX.Element,
    iconButton  : JSX.Element,
}

export interface ILayout {
    children : React.ReactNode
}