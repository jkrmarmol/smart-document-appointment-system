import { IsOptional, IsString } from 'class-validator';
import * as sanitizeHtml from 'sanitize-html';
import { Transform } from 'class-transformer';

export class CreateProfileDto {
  @IsOptional()
  @IsString()
  @Transform(({ value }) => sanitizeHtml(value))
  firstName: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => sanitizeHtml(value))
  middleName: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => sanitizeHtml(value))
  lastName: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => sanitizeHtml(value))
  studentNo: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => sanitizeHtml(value))
  specialOrder: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => sanitizeHtml(value))
  lrn: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => sanitizeHtml(value))
  address: string;
}
