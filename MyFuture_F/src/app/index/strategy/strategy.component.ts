import { Component} from '@angular/core';
import { StrategyEnum } from 'src/app/@Enum/StrategyEnum';
import { StockBaseModel } from 'src/app/@Model/stockBaseModel';
import { GetStockService } from 'src/app/@Service/get-stock.service';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.css']
})
export class StrategyComponent {
  constructor(private getStockService: GetStockService){}
  getBullishPullbackStocks(){
    this.statusBeforeGetResult();
    this.getStockService.getBullishPullbackStocks().subscribe(res=>{
      this.statusAfterGetResult(res);
    })
  }
  getJumpEmptyStocks(){
    this.statusBeforeGetResult();
    this.getStockService.getJumpEmptyStocks().subscribe(res=>{
      this.statusAfterGetResult(res);
    })
  }
  getOrganizedStocks(){
    this.statusBeforeGetResult();
    this.getStockService.getOrganizedStocks().subscribe(res=>{
      this.statusAfterGetResult(res);
    })
  }
  getEpsIncreasingStocks(){
    this.statusBeforeGetResult();
    this.getStockService.getEpsIncreasingStocks().subscribe(res=>{
      this.statusAfterGetResult(res);
    })
  }
  getHighYieldStocks(){
    this.statusBeforeGetResult();
    this.getStockService.getHighYieldStocks().subscribe(res=>{
      this.statusAfterGetResult(res);
    })
  }

  statusBeforeGetResult(){
    this.getStockService.strategyMatchedStocks.next(null);
    this.getStockService.isResultLoading.next(true);
  }

  statusAfterGetResult(res: StockBaseModel){
    this.getStockService.isResultLoading.next(false);
    this.getStockService.strategyMatchedStocks.next(res);
  }
}
