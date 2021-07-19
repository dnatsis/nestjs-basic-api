import { Controller, Get, Param, Put } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudentsByTeacherId(@Param('teacherId') teacherId: string) {
    return `Get all Students that belong to the Teacher with the Id of: ${teacherId}`;
  }

  @Put('/:studentId')
  updateStudentTeacher(@Param('teacherId') teacherId: string, @Param('studentId') studentId: string) {
    return `Update the Student with Id of ${studentId} to the Teacher with Id of ${teacherId}`;
  }
}
