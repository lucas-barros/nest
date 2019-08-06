import { ConfigModule } from '../config/config.module'
import { ConfigService } from '../config/config.service'
import { User } from '../users/user.entity'

export const databaseProvider = {
  provide: 'DATABASE_CONNECTION',
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (config: ConfigService) => ({
    type: 'postgres' as 'postgres',
    host: config.dbHost,
    port: config.dbPort,
    username: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true
  })
}
