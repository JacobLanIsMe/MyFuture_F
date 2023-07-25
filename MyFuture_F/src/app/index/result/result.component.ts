import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { StockFinanceInfoModel } from 'src/app/@Model/stockFinanceInfoModel.model';
import { StockTechInfoModel } from 'src/app/@Model/stockTechInfoModel.model';
import { GetStockService } from 'src/app/@Service/get-stock.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit, OnDestroy {
  constructor(private getStockService: GetStockService){}
  ngOnDestroy(): void {
    this.techMatchedStockSubscription.unsubscribe();
    this.financeMatchedStockSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.getStockService.getBullishPullbackStocks().subscribe(res=>{
      this.techStocks = res;
    });
    this.techMatchedStockSubscription = this.getStockService.techMatchedStocks.subscribe(res=>{
      this.techStocks = res;
      this.financeStocks = null;
    })
    this.financeMatchedStockSubscription = this.getStockService.financeMatchedStocks.subscribe(res=>{
      this.financeStocks = res;
      this.techStocks = null;
    })
  }
  techStocks: StockTechInfoModel | null = null;
  financeStocks: StockFinanceInfoModel | null = null;
  linkTo(id: string | null){
    if (id){
      this.getStockService.selectedStock.next(id);
    }
  }
  techMatchedStockSubscription!: Subscription;
  financeMatchedStockSubscription!: Subscription;
}
