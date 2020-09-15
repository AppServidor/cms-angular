export class Post {

    constructor(
        public id: number,
        public title: string,
        public content : string,
        public created_at: string,
        public updated_at: string,
        public slug: string

    ){}
}
