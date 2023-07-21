import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { StrategyComponent } from './index/strategy/strategy.component';
import { ResultComponent } from './index/result/result.component';
import { HeaderComponent } from './index/header/header.component';
import { DetailComponent } from './index/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    StrategyComponent,
    ResultComponent,
    HeaderComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
