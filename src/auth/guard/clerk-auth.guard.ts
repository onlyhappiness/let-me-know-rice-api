import { clerkClient } from '@clerk/clerk-sdk-node';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class ClerkAuthGuard implements CanActivate {
  private readonly logger = new Logger();

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const sessionToken = request.cookies.__session;

    if (!sessionToken) {
      throw new UnauthorizedException('No session token provided');
    }

    try {
      const session = await clerkClient.verifyToken(request.cookies.__session);

      console.log('session::::', session);
      //   const session = await clerkClient.sessions.verifySession(sessionToken);
      // Optionally, you can attach the session or user information to the request
      request.user = session.userId;
      return true;
    } catch (error) {
      this.logger.error('Failed to verify session token', error);
      throw new UnauthorizedException('Invalid session token');
    }
  }
}
