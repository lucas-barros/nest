import { ApiModelProperty } from '@nestjs/swagger'
import { IsOptional, IsDefined, IsString } from 'class-validator'
import { VALIDATION_GROUPS } from '../../constants'

export default class {
  readonly id: number

  @ApiModelProperty({ example: 'Micheal' })
  @IsDefined({ groups: [VALIDATION_GROUPS.CREATE] })
  @IsOptional({ groups: [VALIDATION_GROUPS.UPDATE] })
  @IsString({ always: true })
  readonly name: string
}
