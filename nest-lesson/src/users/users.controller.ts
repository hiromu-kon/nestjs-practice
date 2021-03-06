import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {

    @Post()
    create(@Body() createUser: CreateUserDto) {
        return createUser
    }
}
