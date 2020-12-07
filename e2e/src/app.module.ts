import { Module } from '@nestjs/common'
import { UnleashModule } from '../../src'
import { AppController } from './app.controller'
import { MyCustomStrategy } from './my-custom-strategy'
import { UnleashMockController } from './unleash-mock.controller'
import { UsersService } from './users.service'

@Module({
  imports: [
    // UnleashModule.forRoot({
    //   // url: 'http://127.0.0.1:3000/unleash',
    //   url: 'https://unleash.herokuapp.com/api/client',
    //   appName: 'my-app-name',
    //   instanceId: 'my-unique-instance', //process.pid.toString(),
    //   refreshInterval: 20000,
    //   // metricsInterval: 3000,
    //   strategies: [MyCustomStrategy],
    // }),
    UnleashModule.forRootAsync({
      useFactory: () => ({
        // url: 'http://127.0.0.1:3000/unleash',
        url: 'https://unleash.herokuapp.com/api/client',
        appName: 'my-app-name',
        instanceId: 'my-unique-instance', //process.pid.toString(),
        refreshInterval: 20000,
        // metricsInterval: 3000,
        // strategies: [MyCustomStrategy],
      }),
    }),
  ],
  providers: [UsersService, MyCustomStrategy],
  controllers: [AppController, UnleashMockController],
})
export class ApplicationModule {}
