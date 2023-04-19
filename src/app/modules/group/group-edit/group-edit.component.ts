import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GroupsMockService as mock } from 'src/app/core/mock/groups.mock';
import { groupFields as fields } from '../config/group.form';

@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.scss'],
})
export class GroupEditComponent implements OnInit {
  id: string | number = '';
  group: any = {};
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = fields;

  constructor(
    private title: TitleService,
    private mock: mock,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.title.changeTitle('Editar grupo');

    this.route.params.subscribe((params: any) => {
      this.id = params.id;
    });

    this.mock.getGroupsById(this.id).subscribe((data) => {
      this.group = data;
    });

    setTimeout(() => {
      this.setData();
    }, 500);
  }

  setData() {
    this.fields = [
      {
        key: 'name',
        type: 'input',
        defaultValue: this.group.name,
        props: {
          label: 'Grupo',
          required: true,
          cols: 12,
        },
      },
      {
        key: 'description',
        type: 'textarea',
        defaultValue: this.group.description,
        props: {
          label: 'Descripción',
          required: true,
          maxLength: 100,
          rows: 5,
        },
      },
    ];
  }

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
    //DO API THINGS
    this.router.navigate(['../']);
  }
}
