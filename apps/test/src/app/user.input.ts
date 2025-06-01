import { InputType } from '@nestjs/graphql';

@InputType('UserInput')
export class UserInput {
  firstName!: string;
  lastName!: string;
}
