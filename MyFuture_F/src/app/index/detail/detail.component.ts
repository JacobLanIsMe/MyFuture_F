import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetStockService } from 'src/app/@Service/get-stock.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {
  constructor(private getStockService: GetStockService){}
  ngOnDestroy(): void {
    this.selectedStockSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.selectedStockSubscription = this.getStockService.selectedStock.subscribe(res=>{
      this.selectedStockSrc = `https://histock.tw/stock/tchart.aspx?no=${res}`;
    })
  }
  selectedStockSubscription!: Subscription;
  selectedStockSrc: string | null = null; 
}
