import { IsNumberString } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'

export class GroupsParams {
  @ApiModelProperty()
  @IsNumberString()
  id: string
}
