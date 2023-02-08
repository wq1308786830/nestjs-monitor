import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { DataSource } from 'typeorm';

import { MongooseModule } from '@nestjs/mongoose';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DirectiveLocation, GraphQLDirective } from 'graphql';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
// import { Cat } from './cats/cat.entity';
import { upperDirectiveTransformer } from './common/directives/upper-case.directives';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      transformSchema: schema => upperDirectiveTransformer(schema, 'upper'),
      installSubscriptionHandlers: true,
      buildSchemaOptions: {
        directives: [
          new GraphQLDirective({
            name: 'upper',
            locations: [DirectiveLocation.FIELD_DEFINITION]
          })
        ]
      },
      debug: true,
      // playground: false,
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mongodb',
    //   host: 'localhost',
    //   port: 27017,
    //   database: 'test',
    //   entities: [Cat],
    //   synchronize: true,
    //   // useUnifiedTopology: true,
    //   logging: "all",
    // }),
    CatsModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
