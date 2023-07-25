import { Component} from '@angular/core';
import { StrategyEnum } from 'src/app/@Enum/StrategyEnum';
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
      this.getStockService.techMatchedStocks.next(res);
    })
  }
  getJumpEmptyStocks(){
    this.getStockService.getJumpEmptyStocks().subscribe(res=>{
      this.getStockService.techMatchedStocks.next(res);
    })
  }
  getEpsIncreasingStocks(){
    this.getStockService.getEpsIncreasingStocks().subscribe(res=>{
      this.getStockService.financeMatchedStocks.next(res);
    })
  }
}
