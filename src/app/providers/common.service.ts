import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommonServices {

  constructor(private http: Http){ }



       get(url) {
        return this.http.get(url)
            .map(data => data.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }

}
