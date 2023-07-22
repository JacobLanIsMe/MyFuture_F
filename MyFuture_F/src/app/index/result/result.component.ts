import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { StockInfoModel } from 'src/app/@Model/stockInfoModel.model';
import { GetStockService } from 'src/app/@Service/get-stock.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit, OnDestroy {
  constructor(private getStockService: GetStockService){}
  ngOnDestroy(): void {
    this.strategyMatchedStockSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.strategyMatchedStockSubscription = this.getStockService.strategyMatchedStocks.subscribe(res=>{
      this.stockInfos = res;
    })
    this.getStockService.getBullishPullbackStocks().subscribe(res=>{
      this.stockInfos = res;
    });
  }
  stockInfos: StockInfoModel | null = null;
  linkTo(id: string | null){
    if (id){
      this.getStockService.selectedStock.next(id);
    }
  }
  strategyMatchedStockSubscription!: Subscription;
}
