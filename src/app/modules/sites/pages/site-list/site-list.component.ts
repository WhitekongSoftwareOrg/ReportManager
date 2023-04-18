import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SiteMockService } from 'src/app/core/mock/sites.mock';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss'],
})
export class SiteListComponent implements OnInit {
  sites: any[] = [];
  selectedSites: any[] = [];
  numResultsDisplayed: number = 10;
  actualFirst = 0;

  constructor(private title: TitleService, private siteMock: SiteMockService, private router: Router) {}

  ngOnInit(): void {
    this.title.changeTitle('Sitios');
    this.siteMock.getSites().subscribe((data) => {
      this.sites = data;
    });
  }

  open(id: string) {
    this.router.navigate(['/sites/edit/', id]);
  }

  delete(id: string) {
    console.log('delete', id);
  }

  add(){
    this.router.navigate(['/sites/add']);
  }

  updateRowsInTable(event: any) {
    this.numResultsDisplayed = event.rows;
    this.actualFirst = event.first;
  }
}
