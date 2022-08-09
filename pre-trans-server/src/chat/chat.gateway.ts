import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';

@WebSocketGateway({ cors: { origin: '*' } })
export class ChatGateway {
  private logger: Logger = new Logger('Gateway Log');

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    this.logger.log('message recieved');
    return 'Hello world!';
  }
}
