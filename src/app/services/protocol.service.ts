import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProtocolService {

  private apiUrl = environment.host;

  constructor(private http: HttpClient) { }

  getEmergencies(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/emergencies`);
  }

  getAttendants(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/attendants`);
  }

  findAttendantByEmail(email: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/findAttendantByEmail/${email}`);
  }

  registerAttendant(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/registerAttendant`, data);
  }

  removeAttendantByEmail(email: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/removeAttendantByEmail/${email}`);
  }

  attendRequest(requestId: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/attendRequest/${requestId}`, {});
  }
}
