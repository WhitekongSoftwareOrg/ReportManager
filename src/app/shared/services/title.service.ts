import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  title$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  changeTitle(newTitle: string) {
    this.title$.next(newTitle);
  }
}
