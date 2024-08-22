export default interface CustomFile {
    _id: string
    name: string
    type: string
    children: CustomFile[]
    parent: string
    createdOn: string
    lastModified: string
    __v: number
}