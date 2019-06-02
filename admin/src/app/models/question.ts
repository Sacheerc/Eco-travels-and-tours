import {Answer} from "./answer";

export class Question {
    _id: string;
    title: string;
    description: string;
    author: {_id: string;
            username: string;}
    answers: Answer[];
    date: Date;
}
