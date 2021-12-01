import { ITokenGeneratorEventHandler } from 'src/app/interfaces/itoken-generator-event-handler';
import { TokenGeneratorAPI } from 'src/app/interfaces/token-generator-api';
import { ITokenGeneratorShower } from 'src/app/interfaces/itoken-generator-shower';

export class TokenGeneratorEventHandler implements ITokenGeneratorEventHandler {
  private tokenGeneratorShower: ITokenGeneratorShower | undefined;
  private apiProxy: TokenGeneratorAPI;

  constructor(private api: TokenGeneratorAPI) {
    this.apiProxy = api;
  }

  init(tokenGeneratorShower: ITokenGeneratorShower) {
    this.tokenGeneratorShower = tokenGeneratorShower;
  }

  generateTokenClicked(): void {
    this.apiProxy.generateToken().subscribe((token) => {
      this.tokenGeneratorShower!.showTokenModal(token);
    });
  }
}
