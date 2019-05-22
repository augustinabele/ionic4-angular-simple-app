import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public listOfArticles: any;

  constructor(private newsService: NewsService, private router: Router) {}

  ngOnInit() {
    this.newsService.getNews('top-headlines?country=gb').subscribe(data => {
      this.listOfArticles = data;
      console.log(this.listOfArticles);
    });
  }

  onGoToNewsDetailsPage(article: any) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-details']);
  }
}
