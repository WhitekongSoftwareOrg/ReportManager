import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule, Header, Footer, MessageService } from 'primeng/api';
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
import { SkeletonModule } from 'primeng/skeleton';
import { ToastModule } from 'primeng/toast';
import { PaginatorModule } from 'primeng/paginator';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MenuModule } from 'primeng/menu';

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
  SkeletonModule,
  ConfirmDialogModule,
  ToastModule,
  InputTextModule,
  CheckboxModule,
  FormsModule,
  PaginatorModule,
  OverlayPanelModule,
  MenuModule
];
export const APP_PRIMENG_COMPONENTS = [Dialog, ConfirmDialog, Header, Footer];
import { ConfirmationService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

export const APP_PRIMENG_PROVIDERS = [ConfirmationService, MessageService, ConfirmationService];

@NgModule({
  declarations: [],
  imports: [CommonModule, APP_PRIMENG_MODULE],
  exports: [APP_PRIMENG_MODULE],
  providers: [APP_PRIMENG_PROVIDERS],
})
export class PRIMENGModule { }
