import { Module } from '@nestjs/common'
import { databaseProvider } from './database.providers'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forRootAsync(databaseProvider)]
})
export class DatabaseModule {}
