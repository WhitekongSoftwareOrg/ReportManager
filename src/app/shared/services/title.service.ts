import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  title$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private translate: TranslateService) {}

  changeTitle(newTitle: string) {
    const label = this.translate.instant(newTitle);
    this.title$.next(label);
  }
}
