import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-http-get',
  templateUrl: './http-get.component.html',
  styleUrls: ['./http-get.component.css']
})
export class HttpGETComponent implements OnInit {

  data : Object;
  loading : Boolean;
  o : Observable<Object>;
  http: HttpClient;
  loading2 : Boolean;
  o2 : Observable<Object>;
  data2 : Object;
  constructor(http: HttpClient)
  {
    this.http = http;
  }
  richiestaGET()
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
  richiestaPOST(): void {
   this.loading2 = true;
   this.http
     .post('https://jsonplaceholder.typicode.com/posts',
       JSON.stringify({
         body: 'bar',
         title: 'foo',
         userId: 1
       })
     )
     .subscribe(data => {
       this.data2 = data;
       this.loading2 = false;
     });
 }
  ngOnInit() {
  }

}

