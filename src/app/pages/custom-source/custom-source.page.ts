import { Component, ViewChild, OnInit } from '@angular/core';
import { NewsService } from '../../news.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-custom-source',
  templateUrl: './custom-source.page.html',
  styleUrls: ['./custom-source.page.scss'],
})
export class CustomSourcePage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public listOfArticles: any[];
  public sourceId: string;
  public currentApiPage: number;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private router: Router,
    ){
    this.currentApiPage = 1;
    this.listOfArticles = [];
    this.sourceId = this.route.snapshot.paramMap.get('id');
  }

  public ngOnInit(): void {
    this.getNewsFromSource();
  }

  public onGoToNewsDetailsPage(article: any): void {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-details']);
  }

  public getNewsFromSource(): void {
    let reqArticles: any;
    this.newsService.getData('top-headlines?sources=' + this.sourceId
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
      this.getNewsFromSource();
    }, 100);
  }
}
