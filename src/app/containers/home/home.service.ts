import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getAllDatasets(): Observable<any> {
    return this.http.get<any>("https://localhost:44320/api/datasets");
  }

  saveDataset(datasetModel: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>("https://localhost:44320/api/datasets", datasetModel, { headers: headers });
  }

  uploadDataByDatasetId(id: any, formData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'multipart/form-data' });
    return this.http.post<any>("https://localhost:44320/api/datasets/" + id + "/upload", formData);
  }

  getUserCountByDatasetId(id: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any>("https://localhost:44320/api/datasets/" + id, { headers: headers });
  }
}
