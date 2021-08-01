import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  constructor() {}

  checkUandP(uname: string, pwd: string) {
    if (uname == 'apcse131' && pwd == 'apcse131') {
      localStorage.setItem('username', 'apcse131');
      localStorage.setItem('pwd', 'apcse131');
      return true;
    } else {
      return false;
    }
  }
}
