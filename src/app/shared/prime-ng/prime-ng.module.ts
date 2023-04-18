import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule, Header, Footer } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { Dialog, DialogModule } from 'primeng/dialog';
import { ConfirmDialog, ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PanelModule } from 'primeng/panel';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { FocusTrapModule } from 'primeng/focustrap';
import { CheckboxModule } from 'primeng/checkbox';
import { TreeTableModule } from 'primeng/treetable';
import { TreeModule } from 'primeng/tree';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';

export const APP_PRIMENG_MODULE = [
  SharedModule,
  TableModule,
  DialogModule,
  ConfirmDialogModule,
  DropdownModule,
  MenubarModule,
  ButtonModule,
  ListboxModule,
  RadioButtonModule,
  PanelModule,
  AccordionModule,
  CalendarModule,
  TabViewModule,
  FocusTrapModule,
  CheckboxModule,
  TreeTableModule,
  TreeModule,
  PanelMenuModule,
  SidebarModule,
  ScrollTopModule,
  AvatarModule,
];
export const APP_PRIMENG_COMPONENTS = [Dialog, ConfirmDialog, Header, Footer];
import { ConfirmationService } from 'primeng/api';

export const APP_PRIMENG_PROVIDERS = [ConfirmationService];

@NgModule({
  declarations: [],
  imports: [CommonModule, APP_PRIMENG_MODULE],
  exports: [APP_PRIMENG_MODULE],
  providers: [APP_PRIMENG_PROVIDERS],
})
export class PRIMENGModule {}
