import { Sequelize } from 'sequelize-typescript'
import { ConfigModule } from '../config/config.module'
import { ConfigService } from '../config/config.service'
import { User } from '../users/user.model'

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (config: ConfigService) => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: config.dbHost,
        port: config.dbPort,
        username: config.dbUser,
        password: config.dbPassword,
        database: config.dbName
      })
      sequelize.addModels([User])
      await sequelize.sync()
      return sequelize
    }
  }
]
