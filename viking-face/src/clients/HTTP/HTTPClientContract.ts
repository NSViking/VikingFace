import {RequestOptionsArgs} from '@angular/http';

export abstract class HTTPClientContract {
  abstract get(url: string, options: RequestOptionsArgs);
}
