import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { GetStockService } from 'src/app/@Service/get-stock.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {
  constructor(private getStockService: GetStockService, private sanitizer: DomSanitizer){}
  ngOnDestroy(): void {
    this.selectedStockSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.selectedStockSubscription = this.getStockService.selectedStock.subscribe(res=>{
      // let unSafeUrl = `https://histock.tw/stock/tchart.aspx?no=${res}`;
      let unSafeUrl = `https://www.cnyes.com/twstock/${res}/summary/full-technical`;
      this.selectedStockSrc = this.sanitizer.bypassSecurityTrustResourceUrl(unSafeUrl);
      
    })
  }
  selectedStockSubscription!: Subscription;
  selectedStockSrc: SafeResourceUrl | null = null; 
}
