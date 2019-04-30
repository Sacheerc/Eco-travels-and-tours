import {Answer} from "./answer.model";

export class Question {
    _id: string;
    title: string;
    description: string;
    author: {_id: string;
            username: string;}
    answers: Answer[];
    date: Date;
}
