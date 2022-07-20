import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { students } from 'src/data';
import { CreateStudentDto, FindStudentDto, StudentDto, UpdateStudentDto } from './student.dto';
@Injectable()
export class StudentService {
    private students=students
    getStudents():FindStudentDto[]{
        return this.students;
    }

    getStudentById(studentId:string):FindStudentDto{
        return this.students.find(student=>{return student.id===studentId})
    }

    createStudent(student:CreateStudentDto):StudentDto{
        let newStudent={
            id:randomUUID(),
            ...student
        }
        this.students.push(newStudent)
        return newStudent
    }

    updateStudent(studentId:string,student:UpdateStudentDto):StudentDto{
        let updateStudent:StudentDto

        let newStudentsList=this.students.map((item)=>{
            if(item.id===studentId){
                updateStudent={
                    id:studentId,
                    ...student
                }
                return updateStudent
            }
            else{return item}
        })

        this.students=newStudentsList;
        return updateStudent
    }

    getStudentsByTeacherId(teacherId:string):StudentDto[]{
        return this.students.filter((student)=>{return student.teacher===teacherId})
    }

    updateStudents_Teacher(teacherId:string,studentId:string):StudentDto{
        let updateStudent:StudentDto

        let newStudentsList=this.students.map((student)=>{
            if(student.id===studentId){
                updateStudent={
                    ...student,
                    teacher:teacherId
                }
                return updateStudent
            }
            else{return student}
        })

        this.students=newStudentsList;
        return updateStudent
    }
}

