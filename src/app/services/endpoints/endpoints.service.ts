import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class EndpointsService {
  apiHost: string;
  storageHost: string;
  headers: HttpHeaders;
  localApiHost: string;
  productionApiHost: string;
  constructor() {
    // http://events369.logitall.biz/api/v1/get_all_events
    this.productionApiHost = 'http://events369.logitall.biz';
    this.localApiHost = 'http://127.0.0.1:8000';
    this.apiHost = this.productionApiHost;
    // this.apiHost = this.productionApiHost;
    this.storageHost = this.apiHost + '/storage/';
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
  }
  getHeaders() {
    // const token = sessionStorage.getItem('token');
    const token = environment.apiKey

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return headers;
  }
  getFileUploadHeader() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return headers;
  }
}