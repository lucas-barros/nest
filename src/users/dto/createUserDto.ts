import { IsString, IsDateString, IsEmail, IsNotEmpty } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'

export default class {
  @ApiModelProperty()
  @IsString()
  @IsNotEmpty()
  readonly firstName: string

  @ApiModelProperty()
  @IsString()
  readonly lastName: string

  @ApiModelProperty()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string

  @ApiModelProperty()
  @IsDateString()
  @IsNotEmpty()
  readonly birthDate: string
}
