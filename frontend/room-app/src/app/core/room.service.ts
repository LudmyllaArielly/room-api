import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../shared/model/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl = 'http://localhost:8080/api/v1/rooms'

  constructor(private http: HttpClient) { }

  createRoom(room: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, room, { responseType: 'text'});
  }

  listRoom(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.baseUrl}`);
  }

  getRoom(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateRoom(room: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}`, room, { responseType: 'text'});
  }

  deleteRoom(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`,{ responseType: 'text'});
  }
}
