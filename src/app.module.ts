import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DirectiveLocation, GraphQLDirective } from 'graphql';
import { CatsModule } from './cats/cats.module';
import { upperDirectiveTransformer } from './common/directives/upper-case.directives';
import { WebPerformanceModule } from './web-performance/web-performance.module';
import { ResourcePerformanceModule } from './resource-performance/resource-performance.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      transformSchema: (schema) => upperDirectiveTransformer(schema, 'upper'),
      installSubscriptionHandlers: true,
      buildSchemaOptions: {
        directives: [
          new GraphQLDirective({
            name: 'upper',
            locations: [DirectiveLocation.FIELD_DEFINITION],
          }),
        ],
      },
      debug: true,
      // playground: false,
    }),
    CatsModule,
    WebPerformanceModule,
    ResourcePerformanceModule,
  ],
})
export class AppModule {}
