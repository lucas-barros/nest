import { IsNumberString } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'

export class UserParams {
  @ApiModelProperty()
  @IsNumberString()
  id: string
}
