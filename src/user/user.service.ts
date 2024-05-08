import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private UserRepository: Repository<User>
) {}

  create(createUserDto: CreateUserDto) {
    return this.UserRepository.save(createUserDto);
  }

  findAll() {
    return this.UserRepository.find();
  }

  findOne(id: number) {
    return this.UserRepository.findOneBy({id});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    try {
      this.UserRepository.update(id, updateUserDto)
      return {
        message: "actualizado correctamente",
        update: updateUserDto
      }
    } catch (error) {
      return {
        error
      }
    }
  }

  remove(id: number) {
    try {
      this.UserRepository.delete(id)
      return {
        message: "Eliminado correctamente",
      }
    } catch (error) {
      return {
        error
      }
    }
  }
}
