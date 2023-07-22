import { Component} from '@angular/core';
import { GetStockService } from 'src/app/@Service/get-stock.service';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.css']
})
export class StrategyComponent {
  constructor(private getStockService: GetStockService){}
  getBullishPullbackStocks(){
    this.getStockService.getBullishPullbackStocks().subscribe(res=>{
      this.getStockService.strategyMatchedStocks.next(res);
    })
  }
  getJumpEmptyStocks(){
    this.getStockService.getJumpEmptyStocks().subscribe(res=>{
      this.getStockService.strategyMatchedStocks.next(res);
    })
  }
}
