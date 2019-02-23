import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }
    test() {
        this.httpClient.post('http://localhost:8083/test/webresources/test.usuario', {
          headers: {
            contenttype: 'application/json',
            charset: 'utf-8',
            id: 2607077
          }
        }).subscribe(resp => console.log(resp), error => console.log('no se pudo : ' + error));
    }
}
