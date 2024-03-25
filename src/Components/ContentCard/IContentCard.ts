export interface IContentCard{
    key: number,
    title: string,
    img: string,
    description: string,
    onClick: () => void,
    delay: number,
}