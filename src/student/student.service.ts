import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './create-student.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async getStudent(id: string): Promise<Student> {
    return this.studentRepository.findOne({ where: { id } });
  }

  async getStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    return this.studentRepository.save({
      ...createStudentInput,
      id: uuid(),
    });
  }

  async getManyStudents(studentIds: string[]): Promise<Student[]> {
    // const result = await this.studentRepository.find({
    //   where: {
    //     id: In(studentIds),
    //   },
    // });
    // console.log('result', result);
    // return result;

    const students = await this.studentRepository.find();
    // console.log(In(studentIds));
    console.log('students', students);
    console.log('studentIds', studentIds);
    const s = students.filter((student) => {
      return studentIds.includes(student.id);
    });
    return s;
  }
}
