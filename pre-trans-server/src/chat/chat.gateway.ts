import {
  SubscribeMessage,
  WebSocketGateway,
  MessageBody,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';

@WebSocketGateway({ cors: { origin: '*' } })
export class ChatGateway {
  private logger: Logger = new Logger('Gateway Log');

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): string {
    this.logger.log(message);
    return 'Hello world!';
  }
}
