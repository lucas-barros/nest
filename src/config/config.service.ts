import * as dotenv from 'dotenv'
import * as Joi from '@hapi/joi'
import * as fs from 'fs'

export interface EnvConfig {
  [key: string]: string
}

export class ConfigService {
  private readonly envConfig: EnvConfig

  constructor(filePath: string) {
    const config = dotenv.parse(fs.readFileSync(filePath))
    this.envConfig = this.validateInput(config)
  }

  private validateInput(envConfig: EnvConfig): EnvConfig {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string()
        .valid(['local', 'development', 'production', 'test', 'provision'])
        .default('local'),
      PORT: Joi.number().default(3000),
      DB_NAME: Joi.string(),
      DB_USER: Joi.string(),
      DB_PASSWORD: Joi.string(),
      DB_HOST: Joi.string(),
      DB_PORT: Joi.number(),
      JWT_SECRET: Joi.string()
    })

    const { error, value: validatedEnvConfig } = Joi.validate(
      envConfig,
      envVarsSchema
    )
    if (error) {
      throw new Error(`Config validation error: ${error.message}`)
    }
    return validatedEnvConfig
  }

  get dbName(): string {
    return this.envConfig.DB_NAME
  }

  get dbHost(): string {
    return this.envConfig.DB_HOST
  }

  get dbPort(): number {
    return Number(this.envConfig.DB_PORT)
  }
  get dbUser(): string {
    return this.envConfig.DB_USER
  }

  get dbPassword(): string {
    return this.envConfig.DB_PASSWORD
  }

  get jwtSecret(): string {
    return this.envConfig.JWT_SECRET
  }
}
