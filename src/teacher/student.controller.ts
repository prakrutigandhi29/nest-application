import { Body, Controller, Get, Param, ParseUUIDPipe, Put } from "@nestjs/common";
import { FindStudentDto, StudentDto } from "src/student/student.dto";
import { StudentService } from "src/student/student.service";

@Controller('/teachers/:teacherId/students')
export class StudentTeacherController{
    
    constructor(private readonly studentservice:StudentService){}
    @Get()
    getStudents(@Param('teacherId',new ParseUUIDPipe()) teacherId:string):FindStudentDto[]{
        return this.studentservice.getStudentsByTeacherId(teacherId)
    }

    @Put('/:studentId')
    updateStudentTeacher(
        @Param('teacherId',new ParseUUIDPipe()) teacherId:string,
        @Param('studentId',new ParseUUIDPipe()) studentId:string,
        @Body() body
    ):StudentDto{
        return this.studentservice.updateStudents_Teacher(teacherId,studentId);
    }
}