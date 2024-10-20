import {
  ConflictException,
  ExceptionFilter,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignUpDto } from './dto/sign-up.dto';
import { Users } from '@prisma/client';
import { SignInDto } from './dto/sign-in.dto';
import { compare, hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  /**
   * Registers a new user.
   *
   * @param {SignUpDto} data - The data transfer object containing user sign-up information.
   * @returns {Promise<Users | ExceptionFilter>} The created user object or exception throw.
   * @throws {ConflictException} If a user with the given email already exists.
   */
  async signUp(data: SignUpDto): Promise<Users | ExceptionFilter> {
    // Check if a user with the given email already exists
    const checkExists = await this.prismaService.users.findUnique({
      where: { email: data.email },
    });
    // If user exists, throw a conflict exception
    if (checkExists) throw new ConflictException('User Already Exists');
    // Hash the user's password
    const hashPassword = await hash(data.password, 12);
    // Create and return the new user
    return this.prismaService.users.create({
      data: { ...data, password: hashPassword },
    });
  }

  async signIn(data: SignInDto) {
    const user = await this.prismaService.users.findUnique({
      where: { email: data.email },
    });
    if (!user) throw new NotFoundException('User Not Found');
    const decryptPass = await compare(data.password, user.password);
    if (!decryptPass)
      throw new UnauthorizedException('Invalid User Credentials');
    const payload = { sub: user.id, email: user.email, role: user.role };
    return {
      accessToken: await this.jwtService.signAsync(payload),
      id: user.id,
      email: user.email,
      role: user.role,
    };
  }
}
