import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'All Students';
  }

  @Get('/:studentId')
  getStudentById(@Param('studentId') studentId: string) {
    return `Get Student with Id of: ${studentId}`;
  }

  @Post()
  createStudent(@Body() body) {
    return `Create Student with the following Data: ${JSON.stringify(body)}`;
  }

  @Put('/:studentId')
  updateStudent(@Param('studentId') studentId: string, @Body() body) {
    return `Update Student with Id of: ${studentId} With the Data of: ${JSON.stringify(
      body,
    )}`;
  }
}
