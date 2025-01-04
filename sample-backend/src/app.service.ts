import { Injectable } from '@nestjs/common';
import { CreateUserRequest } from './create-user-request.dto';

@Injectable()
export class AppService {
  private readonly users: any[] = [];
  getHello(): string {
    return 'Hello World!';
  }

  createUser(createUserRequest: CreateUserRequest) {
    this.users.push(createUserRequest);
  }
}
