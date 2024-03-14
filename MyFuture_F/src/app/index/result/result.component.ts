import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { StockBaseModel } from 'src/app/@Model/stockBaseModel';
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
    this.strategyMatchedStockSubscription.unsubscribe();
    this.isResultLoadingSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.getStockService.getBullishPullbackStocks().subscribe(res=>{
      this.isLoading = false;
      this.strategyMatchedStocks = res;
    });
    this.strategyMatchedStockSubscription = this.getStockService.strategyMatchedStocks.subscribe(res=>{
      this.strategyMatchedStocks = res;
    })
    this.isResultLoadingSubscription = this.getStockService.isResultLoading.subscribe(res=>{
      this.isLoading = res;
    })
  }
  strategyMatchedStocks: StockBaseModel | null = null;
  isLoading: boolean = true;
  strategyMatchedStockSubscription!: Subscription;
  isResultLoadingSubscription!: Subscription;
  linkTo(id: string | null){
    if (id){
      this.getStockService.selectedStock.next(id);
    }
  }
  
  
}
