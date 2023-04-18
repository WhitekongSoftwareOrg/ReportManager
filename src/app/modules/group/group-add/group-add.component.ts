import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-group-add',
  templateUrl: './group-add.component.html',
  styleUrls: ['./group-add.component.scss']
})
export class GroupAddComponent implements OnInit {

  constructor(private title: TitleService) {}

  ngOnInit(): void {
    this.title.changeTitle('Añadir grupo');
  }

}
