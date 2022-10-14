import { ObjectId } from "mongodb";
import { Url } from "url";

export default class Job {
    constructor(
        public id: ObjectId,
        public title: string,
        public companyName: string,
        public description: string,
        public experienceLevel: string,
        public link: Url,
        public ubication: string,
        public remote: boolean,
        public payRange: string,
        public category: string,
        public applicants: number,
    ) {}
}