import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isVisisble$ = new BehaviorSubject<boolean>(false);

  open() {
    this.isVisisble$.next(true);
  }

  close() {
    this.isVisisble$.next(false);
  }

  constructor() {}
}
