import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.page.html',
  styleUrls: ['./sources.page.scss'],
})
export class SourcesPage implements OnInit {

  public listOfSources: any;

  constructor(private newsService: NewsService, private router: Router) {}

  ngOnInit() {
    this.newsService.getData('sources?').subscribe(data => {
      this.listOfSources = data;
      console.log(this.listOfSources);
    });
  }

  onGoToNewsSourcePage(source: any) {
    this.router.navigate(['/custom-source/' + source]);
  }
}
