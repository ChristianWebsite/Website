import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  // articles holds the article list we get from our service we made
  articles;

  // here dependancy injection is used to grab an instance of the articles service we do not need to pass anything to it
  // angular creates one instance for each service and all components share that instance in other words it uses a singleton pattern to save memory
  constructor(articleService: ArticleService) {
    this.articles = articleService.getArticles();
   }

  ngOnInit(): void {
  }

}
