import { Get, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import path from 'path/posix';
import { StudentMiddleware } from 'src/middleware/student.middleware';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
    controllers:[StudentController],
    providers:[StudentService],
    exports:[StudentService]
})
export class StudentModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        console.log("Middlware")
        consumer.apply(StudentMiddleware).forRoutes({
            path:'/students/:studentId',
            method:RequestMethod.GET
         }
        )
        consumer.apply(StudentMiddleware).forRoutes({
            path:'/students/:studentId',
            method:RequestMethod.PUT
         }
        )
    }
}
