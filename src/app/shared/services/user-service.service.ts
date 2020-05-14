import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users = new BehaviorSubject<string[]>([]);

  addUser(username: string) {
    this.users.next(this.users.getValue().concat([username]));
  }

  constructor() { }
}
