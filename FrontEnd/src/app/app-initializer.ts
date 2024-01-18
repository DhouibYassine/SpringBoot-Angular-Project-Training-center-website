import { Injectable } from '@angular/core';
import { SessionService } from './services/Session/session.service';

@Injectable()
export class MyService {
  constructor(private sessionService:SessionService) {}

  doSomething(): void {
    this.sessionService.clear("_CURRENT_ID");
    this.sessionService.clear("_CURRENT_USER");   
     console.log('Initialization tasks executed');
  }
}

export function initializeApp(myService: MyService): () => Promise<any> {
  return (): Promise<any> => {
    const hasInitialized = localStorage.getItem('appInitialized');

    if (!hasInitialized) {
      localStorage.setItem('appInitialized', 'true');
      myService.doSomething();
    }

    return Promise.resolve();
  };
}
