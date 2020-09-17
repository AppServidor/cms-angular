export class User {
    constructor(
        public id: number,
        public name: string,
        public surname: string,
        public password,
        public email: string,
        public role: string,
        public createdAt: string,
    ){}
}
