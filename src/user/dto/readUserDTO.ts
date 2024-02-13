export default class ReadUserDTO {
  id: number;
  username: string;
  createdAt: Date;
  questions: ReadUserQuestions[];
}

type ReadUserQuestions = {
  id: number;
  title: string;
  likes: number;
  createdAt: Date;
};
