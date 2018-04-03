import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class OperatoriService implements Resolve<any>
{
    operatori: any[];
    onOperatorisChanged: BehaviorSubject<any> = new BehaviorSubject({});

    constructor(
//        private http: HttpClient,
        private httpClient: HttpClient
    )
    {
    }

    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {

        return new Promise((resolve, reject) => {

            Promise.all([
                this.getOperatori()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    getOperatori(): Promise<any>
    {
        return new Promise((resolve, reject) => {

            //prova con chiamata fuse style
           /* this.http.get('http://80.22.246.138:50480/api/operatoris')
                .subscribe((response: any) => {
                    this.operatori = response['hydra:member'];
                    this.onOperatorisChanged.next(this.operatori);
                    resolve(response['hydra:member']);
                }, reject);*/

            //prova con fake db
//            this.http.get('api/operatori')
//                .subscribe((response: any) => {
//                    this.operatori = response;
//                    this.onOperatorisChanged.next(this.operatori);
//                    resolve(response);
//                }, reject);

            //prova con chiamata httpClient
           this.httpClient.get('http://80.22.246.138:50480/api/operatoris').subscribe((data: any) => {
                this.operatori = data['hydra:member'];
                this.onOperatorisChanged.next(this.operatori);
                resolve(this.operatori);
                });
                
        });



     

    }
}
