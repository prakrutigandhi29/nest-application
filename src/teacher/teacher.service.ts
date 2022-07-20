import { Injectable } from '@nestjs/common';
import { teachers } from 'src/data';
import { TeacherDto } from './teacher.dto';

@Injectable()
export class TeacherService {
    private teachers=teachers;

    getTeachers():TeacherDto[]{
        return this.teachers
    }

    getTeacherById(teacherId:string):TeacherDto{
        return this.teachers.find(teacher=>{return teacherId===teacher.id})
    }

}
