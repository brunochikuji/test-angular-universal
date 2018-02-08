import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class PropertiesService {   
    
    private TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZpY2UiOiJjb3JlIiwidXNlcl9pZCI6NTEwNTAyODI1OTkwNTUzNiwiZXhwIjoxNTE4MTgzNDI0fQ.1IxaqvzeozUGDy6mjmLSyvcYc8llyjlk1CThHWMKFAw';
    
    constructor(
        private http: Http
    ) { }

    getProperties(): Observable<any> {
        return new Observable<any>(observer => {
            let opt: RequestOptions;
            let myHeaders: Headers = new Headers;
            myHeaders.set('Content-Type', 'application/json');
            myHeaders.set('Authorization', this.TOKEN);            
            this.http.get('http://api.imobzi.com/v1/properties', {headers: myHeaders})
                .map(response => response.json())
                .subscribe(response => observer.next(response.properties));
        });
    }

    getProperty(propertyCode: string): Observable<any> {
        return new Observable<any>(observer => {
            let opt: RequestOptions;
            let myHeaders: Headers = new Headers;
            myHeaders.set('Content-Type', 'application/json');
            myHeaders.set('Authorization', this.TOKEN);            
            this.http.get(`http://api.imobzi.com/v1/property/${propertyCode}`, {headers: myHeaders})
                .map(response => response.json())
                .subscribe(response => observer.next(response.success.property));
        });
    }    
}