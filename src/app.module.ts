import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TuitsController } from './tuits/tuits.controller';
import { Tests2Controller } from './tests2/tests2.controller';
import { TuitsService } from './tuits/tuits.service';

@Module({
  imports: [],
  controllers: [AppController, TuitsController, Tests2Controller],
  providers: [AppService, TuitsService],
})
export class AppModule {}
