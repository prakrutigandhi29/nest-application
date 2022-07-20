import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import { CreateStudentDto, FindStudentDto, StudentDto, UpdateStudentDto } from "./student.dto";
import { StudentService } from "./student.service";

@Controller('/students')
export class StudentController{

    constructor(private readonly studentservice:StudentService){}

    @Get()
    getStudents():FindStudentDto[]{
        return this.studentservice.getStudents();
    }

    @Get('/:studentId')
    getStudentById(@Param('studentId',new ParseUUIDPipe()) studentId:string):FindStudentDto{
        return this.studentservice.getStudentById(studentId);
    }

    @Post()
    createStudent(@Body() body:CreateStudentDto):StudentDto{
        return this.studentservice.createStudent(body);
    }

    @Put('/:studentId')
    updateStudent(@Param('studentId', new ParseUUIDPipe()) studentId:string, @Body() body:UpdateStudentDto):StudentDto{
        console.log(studentId);

        return this.studentservice.updateStudent(studentId,body);
    }
}