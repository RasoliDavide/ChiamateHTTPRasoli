import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../post.model'
@Component({
  selector: 'app-http-get-post',
  templateUrl: './http-get-post.component.html',
  styleUrls: ['./http-get-post.component.css']
})
export class HttpGetPostComponent implements OnInit {
  http: HttpClient;
  osservatore: Observable<Post[]>;
  posts : Post[];
  loading : Boolean;
  constructor(http: HttpClient) {
    this.http = http;
  }
  richistaGETTipizzata()
  {
    this.loading = true;
    this.osservatore = this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    this.osservatore.subscribe(this.getPost);
  }
  getPost = (post : Post[]) =>
  {
    this.posts = post;
    this.loading = false;
  }
  ngOnInit() {
  }

}
