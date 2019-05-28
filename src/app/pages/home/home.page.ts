import { Component, ViewChild, OnInit } from '@angular/core';
import { NewsService } from '../../news.service';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public listOfArticles: any[];
  public currentApiPage: number;

  constructor(
    private newsService: NewsService,
    private router: Router
    ){
    this.currentApiPage = 1;
    this.listOfArticles = [];
  }

  public ngOnInit(): void {
    this.getNewsHeadlines();
  }

  public onGoToNewsDetailsPage(article: any): void {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-details']);
  }

  public getNewsHeadlines(): void {
    let reqArticles: any;
    this.newsService.getData('top-headlines?country=gb'
      + '&pageSize=4&page=' + this.currentApiPage).subscribe(data => {
        reqArticles = data;

      for (let article of reqArticles.articles) {
        this.listOfArticles.push(article);
      }
      console.log(this.listOfArticles);
    });
  }
  
  public loadData(event: any): void {
    this.currentApiPage += 1;
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
      this.getNewsHeadlines();
    }, 100);
  }
}




