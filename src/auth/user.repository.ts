import { User } from 'src/entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = this.create({ ...createUserDto });
    await this.save(user);
    return user;
  }
}
