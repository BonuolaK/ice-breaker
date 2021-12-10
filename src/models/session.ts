export class Session{
    id: number;
    question: string;
    responses: SessionResponse[];

    constructor(id: number, question: string) {
        this.id = id;
        this.question = question;
        this.responses = [];
    }
}

export class SessionResponse{
    userId: number;
    userName: string;
    answer: string;
    constructor(userId: number, userName: string, answer: string) {
        this.userId = userId;
        this.userName = userName;
        this.answer = answer;
    }
}