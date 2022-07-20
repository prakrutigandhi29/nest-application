import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TeacherMiddleware } from 'src/middleware/teacher.middlware';
import { StudentModule } from 'src/student/student.module';
import { StudentTeacherController } from './student.controller';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';

@Module({
    imports:[StudentModule],
    controllers:[TeacherController,StudentTeacherController],
    providers:[TeacherService]
})
export class TeacherModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(TeacherMiddleware).forRoutes({
            path:'/teachers/:teacherId',
            method:RequestMethod.GET
        })
        consumer.apply(TeacherMiddleware).forRoutes({
            path:'/teachers/:teacherId/students',
            method:RequestMethod.GET
        })
    }
    
}
