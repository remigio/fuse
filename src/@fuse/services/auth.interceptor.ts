import {Injectable} from '@angular/core';
import {HttpEvent, HttpHeaders, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(this.addHeaders(req));
    }

    private addHeaders(req: HttpRequest<any>): HttpRequest<any> {
        if (req.url.indexOf('/api/login_check') == -1) {
            let headers: HttpHeaders = req.headers;
            
            headers = headers.set('Authorization', 'Bearer ' + this.authService.getToken());
            return req.clone({headers});
        } else {
            return req;
        }
    }
}
