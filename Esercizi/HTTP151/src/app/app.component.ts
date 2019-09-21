import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HTTP151';
  data : Object;
  loading : Boolean;
  o : Observable<Object>;
  http: HttpClient;

  constructor(public httpc: HttpClient)
  {
    this.http = httpc;

  }
  richiestaHTTP()
  {
    this.loading = true;
    this.o = this.http.get('https://jsonplaceholder.typicode.com/posts/1');
    this.o.subscribe(this.getData);
  }
  getData = (d:Object) =>
  {
    this.data = d;
    this.loading = false;
  }
}
