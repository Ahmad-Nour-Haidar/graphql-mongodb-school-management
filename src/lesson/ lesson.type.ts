import { Field, ID, ObjectType } from '@nestjs/graphql';
import { StudentType } from '../student/student.type';

@ObjectType('Lesson')
export class LessonType {
  @Field((_type) => ID)
  id: string;

  @Field((_type) => ID)
  _id: string;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;

  @Field((type) => [StudentType])
  students: string[];
}
