import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EndpointsService } from '../endpoints/endpoints.service';

const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey

@Injectable({
  providedIn: 'root'
})

export class EventsService {
  private headers: HttpHeaders;
  constructor(private http: HttpClient, private endpoints: EndpointsService) {
    this.headers = this.endpoints.getHeaders();
  }

  postEvent(body: any): Promise<boolean> {
    return new Promise((resolve, reject) => { });
  }

  getAllEvents() {
    // this works same as event by type
    return this.http.get(`${API_URL}`);

  }

  getAllCategories() {
    return this.http.get(`http://events369.logitall.biz/api/view_categories`)
  }

  editEvent(body: any): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const url = this.endpoints.apiHost + '/api/v1/edit_event';
      this.http.post(url, body, { headers: this.headers }).subscribe(
        (res: any) => {
          if (res.message.toLowerCase() == 'failed') {
            resolve(false);
          }
          else {
            sessionStorage.setItem('event_id', body.id);
            this.setEventData(body.id).then(
              ok => {
                resolve(true);
              },
              err => {
                reject(err);
              }
            );
          }
        },
        err => {
          reject(err);
        }
      );
    });
  }
  getEventData(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const url = this.endpoints.apiHost + '/api/v1/get_event_data/' + id;
      this.http.get(url, { headers: this.headers }).subscribe(
        (res: any) => {
          resolve(res);
        },
        err => {
          reject(err);
        }
      );
    });
  }
  async getEventsByCategory(category: string, limit?: number, offset?: number) {
    return new Promise((resolve, reject) => {
      const url = this.endpoints.apiHost + '/api/get_events_by_category/' + category;
      this.http.get(url).subscribe(
        (events: any) => {
          resolve(events);
        },
        err => {
          reject(err);
        }
      );
    });
  }


  private setEventData(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getEventData(id).then(
        res => {
          sessionStorage.removeItem('event_data');
          sessionStorage.setItem('event_data', JSON.stringify(res));
          resolve(null);
        },
        err => {
          reject(err);
        }
      );
    });
  }
}