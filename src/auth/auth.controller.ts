import { Body, Controller, HttpCode, Post, HttpStatus, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { Request, Response } from 'express';
import { LoginDto } from './dto/login.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';

@Controller('auth')
export class AuthController {
  public constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.OK)
  public async register(@Req() req: Request, @Body() dto: RegisterDto) {
    return this.authService.register(req, dto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  public async login(@Req() req: Request, @Body() dto: LoginDto) {
    return this.authService.login(req, dto);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  public async logout(
    @Req() req: Request, 
    @Res({passthrough: true}) res: Response
  ) {
    return this.authService.logout(req, res);
  }

  // Мобильные эндпоинты

  @Post('mobile/register')
  @HttpCode(HttpStatus.OK)
  public async mobileRegister(@Body() dto: RegisterDto) {
    return this.authService.mobileRegister(dto);
  }

  @Post('mobile/login')
  @HttpCode(HttpStatus.OK)
  public async mobileLogin(@Body() dto: LoginDto) {
    return this.authService.mobileLogin(dto);
  }

  @Post('mobile/refresh')
  @HttpCode(HttpStatus.OK)
  public async refreshToken(@Body() dto: RefreshTokenDto) {
    return this.authService.refreshToken(dto.refreshToken);
  }

  @Post('mobile/logout')
  @HttpCode(HttpStatus.OK)
  public async mobileLogout(@Body() dto: RefreshTokenDto) {
    await this.authService.mobileLogout(dto.refreshToken);
    return { message: 'Выход выполнен успешно.' };
  }
}
