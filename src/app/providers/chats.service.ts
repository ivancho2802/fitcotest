import { Injectable } from '@angular/core';
import { apiurl } from './config';
import { HttpClient } from '@angular/common/http';
import { Chats } from '../interfaces/chats'
@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor(
    public http: HttpClient
  ) { }

  getChats(){
    return this.http.get<Chats>(apiurl + '/chats');
  }
}
