export interface Card{
    title: string
    subtitle: string
    description: string
    link: string 
    category: CategoryType
    topics: Array<TopicType>

}

export enum CategoryType
{
    App,
    Studies,
    Projects
}

export enum TopicType
{
    dotnet,
    cSharp,
    angular,
    reactJs,
    backend,
    frontend,
    xamarin,
    sql,
    sqlite

}

