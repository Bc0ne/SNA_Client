import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getAllDatasets(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + "datasets");
  }

  saveDataset(datasetModel: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(environment.apiUrl + "datasets", datasetModel, { headers: headers });
  }

  uploadDataByDatasetId(id: any, formData: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'multipart/form-data' });

    return this.http.post<any>(environment.apiUrl + "datasets/" + id + "/data", formData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(map((event) => {
      switch (event.type) {
        case HttpEventType.UploadProgress:
          const progress = Math.round(100 * event.loaded / event.total);
          return { status: 'progress', message: progress };
        case HttpEventType.Response:
          return event.body;
        default:
          return `Unhandled event: ${event.type}`;
      }
    })
    );
  }

  getUsersByDatasetId(id: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any>(environment.apiUrl + "datasets/" + id + "/users", { headers: headers });
  }

  getFriendshipsByDatasetId(id: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any>(environment.apiUrl + "datasets/" + id + "/friendships", { headers: headers });
  }

  deleteDatasetById(id: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<any>(environment.apiUrl + "datasets/" + id, { headers: headers });
  }
}
