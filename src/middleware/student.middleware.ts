import { HttpException, Injectable, NestMiddleware } from "@nestjs/common";
import { students } from "src/data";

@Injectable()
export class StudentMiddleware implements NestMiddleware{
    use(req: any, res: any, next: (error?: any) => void) {
        const id=req.params.studentId;
        const studentExist=students.some((student)=>{
                return student.id===id;
                    
        })
        if(!studentExist){
            throw new HttpException("Student not found",400);
        }
        next();
        
    }
}