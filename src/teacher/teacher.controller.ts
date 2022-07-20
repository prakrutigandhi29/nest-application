import { Controller,Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { TeacherDto } from './teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('/teachers')
export class TeacherController {

    constructor(private readonly teacherservice:TeacherService){}

    @Get()
    getTeachers():TeacherDto[]{
        return this.teacherservice.getTeachers();
    }

    @Get('/:teacherId')
    getTeacherById(@Param('teacherId',new ParseUUIDPipe()) teacherId:string):TeacherDto{
        return this.teacherservice.getTeacherById(teacherId);
    }

}
