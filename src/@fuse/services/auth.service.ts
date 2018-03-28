import {Injectable} from '@angular/core';
import {HttpHeaders, HttpParams, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthService {
    
    private token: string;
    
    constructor(private httpClient: HttpClient) {
    }

    login(username: string, password: string): Observable<any> {
        const body = new HttpParams()
            .set('username', username)
            .set('password', password);

        return this.httpClient.post('http://80.22.246.138:50480/api/login_check', body, {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded')
        }).pipe(
            tap((data: any) => {
                this.token = data.token;
            }),
        );
    }

    getToken(): string {
        return this.token;
    }
}
