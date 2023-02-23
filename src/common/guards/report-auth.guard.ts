import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class ReportAuthGuard implements CanActivate {
  validateRequest(request) {
    return request.body.variables?.auth_key === 'NEST';
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;
    if (this.validateRequest(request)) {
      return true;
    }

    throw new UnauthorizedException();
  }
}
