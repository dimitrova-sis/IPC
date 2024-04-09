import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { EMPTY, Observable } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { environment } from '../../../enviroments/environment'

@Injectable()
export class ApiService {

    headers: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json'
    })

    api_url: string = environment.apiBaseUrl

    constructor(
        private http: HttpClient,
    ) { }

    get(path: string): Observable<any> {
        return this.executeHttpMethod('get', path, {})
    }

    post(path: string, body: { [key: string]: any }): Observable<any> {
        return this.executeHttpMethod('post', path, body)
    }

    put(path: string, body: { [key: string]: any }): Observable<any> {
        return this.executeHttpMethod('put', path, body)
    }

    delete(path: string): Observable<any> {
        return this.executeHttpMethod('delete', path, {})
    }

    patch(path: string, body: { [key: string]: any } = {}): Observable<any> {
        return this.executeHttpMethod('patch', path, body)
    }

    private executeHttpMethod(httpMethodName: string, url: string, data?: { [key: string]: any }): Observable<any> {
        var options = {
            body: data,
            headers: this.headers
        }

        return this.http.request(httpMethodName, `${this.api_url}${url}`, options)
            .pipe(
                map((response: Object) => response),
                catchError(this.handleError.bind(this))
            )
    }

    private handleError(err: HttpErrorResponse): Observable<any> {
        console.log(err)

        return EMPTY // throw(err)
    }
}
