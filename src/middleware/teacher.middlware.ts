import { HttpException, Injectable, NestMiddleware } from "@nestjs/common";
import { teachers } from "src/data";

@Injectable()
export class TeacherMiddleware implements NestMiddleware{
    use(req: any, res: any, next: (error?: any) => void) {
        const id=req.params.teacherId;
        const teacherExist=teachers.some((teacher)=>{
                return teacher.id===id;
                    
        })
        if(!teacherExist){
            throw new HttpException("Teacher not found",400);
        }
        next();
        
    }
}