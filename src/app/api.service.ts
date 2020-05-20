import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  offres: Observable<any>;

  constructor(public httpClient: HttpClient) { }

  getAllOffres() {
    return this.httpClient.get("https://webservice-rest-velo-back.herokuapp.com/product");
  }

}
