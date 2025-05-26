import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  // IsPhoneNumber,
  IsString,
} from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  email: string;
  password: string;
  // @IsPhoneNumber()
  phone: string;
  imageUrl: string;
  @IsEnum(['ADMIN', 'STUDENT', 'TEACHER'], {
    message: 'valid role requered',
  })
  role: 'ADMIN' | 'STUDENT' | 'TEACHER';
  createdAt: string;
}
