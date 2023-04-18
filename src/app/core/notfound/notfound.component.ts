import { Component } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
	templateUrl: './notfound.component.html'
})
export class NotfoundComponent {
  constructor(private title: TitleService) {}

  ngOnInit(): void {
    this.title.changeTitle('Error 404');
  }

}
