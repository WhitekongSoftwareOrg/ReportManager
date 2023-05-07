import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-chips',
  template: `<p-chips [formControl]="formControl" [formlyAttributes]="field" separator=";" placeholder="Hint: a; b; c"></p-chips>`,
})
export class FormlyChips extends FieldType<FieldTypeConfig> {}
