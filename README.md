## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript搭建的前端监控总服务端

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## 约定

### 目录结构

- `/src/main.ts` 入口启动文件；
- `/src/main.ts` 入口启动文件；
- `/src/app.module.ts` Nest的根模块文件；
- `/src/common` 存放通用文件夹，如通用的工具函数、装饰器（decorators）、守卫（guards）
  、枚举等；
- `/src/**` 具体业务域文件夹；
- `/src/**/dto/*` http等请求入参定义；
- `/src/**/entities/*.entity.ts` nest框架下apollo graphql字段以及mongoose字段定义；
- `/src/**/*.module.ts` 业务模块入口文件；
- `/src/**/*.resolver.ts` 业务模块对应的graphql命令的resolvers代码文件；
- `/src/**/*.service.ts` 业务模块需要的服务代码文件；
- `/src/**/*.spec.ts` resolver或者service对应的测试代码文件；
- `/test` 测试代码文件夹；
- `/schema.gql` 此文件<i>不能编辑</i>，属于自动生成。本项目采用`code-first`方式通过项目代码生成graphql的schema定义文件
- 其他项目配置文件请参考Nest官网。

## Technology stack
- [Nest](https://github.com/nestjs/nest)
- [Graphql](https://graphql.org/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server)
- [Mongoose](https://mongoosejs.com/)
- [Mongodb](https://www.mongodb.com/)
- [Jest](https://jestjs.io/)
