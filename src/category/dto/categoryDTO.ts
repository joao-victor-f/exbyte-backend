import Question from 'src/question/question';

export default class CategoryDTO {
  readonly title: string;
  readonly questions: Question[];
}
