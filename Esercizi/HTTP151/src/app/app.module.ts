import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HttpGETComponent } from './http-get/http-get.component';
import { HttpGetPostComponent } from './http-get-post/http-get-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HttpGETComponent,
    HttpGetPostComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
