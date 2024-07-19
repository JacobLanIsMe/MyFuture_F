import { Component } from '@angular/core';
import { StrategyEnum } from 'src/app/@Enum/StrategyEnum';
import { TechStrategyEnum } from 'src/app/@Enum/TechStrategyEnum';
import { StockBaseModel } from 'src/app/@Model/stockBaseModel';
import { GetStockService } from 'src/app/@Service/get-stock.service';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.css']
})
export class StrategyComponent {
  constructor(private getStockService: GetStockService) {
    this.selectedDate = new Date().toISOString().split('T')[0];
    this.selectedStrategy = TechStrategyEnum.BullishPullback;
  }
  selectedDate: string;
  selectedStrategy: TechStrategyEnum;
  dateChanging() {
    switch (this.selectedStrategy) {
      case TechStrategyEnum.BullishPullback:
        this.getBullishPullbackStocks();
        break;
      case TechStrategyEnum.JumpEmpty:
        this.getJumpEmptyStocks();
        break;
      case TechStrategyEnum.Organized:
        this.getOrganizedStocks();
        break;
      case TechStrategyEnum.Sandwich:
        this.getSandwichStocks();
        break;
      default:
        this.getBullishPullbackStocks();
        break;
    }
  }
  getBullishPullbackStocks() {
    this.selectedStrategy = TechStrategyEnum.BullishPullback;
    this.statusBeforeGetResult();
    this.getStockService.getBullishPullbackStocks(this.selectedDate).subscribe(res => {
      this.statusAfterGetResult(res);
    })
  }
  getJumpEmptyStocks() {
    this.selectedStrategy = TechStrategyEnum.JumpEmpty;
    this.statusBeforeGetResult();
    this.getStockService.getJumpEmptyStocks(this.selectedDate).subscribe(res => {
      this.statusAfterGetResult(res);
    })
  }
  getOrganizedStocks() {
    this.selectedStrategy = TechStrategyEnum.Organized;
    this.statusBeforeGetResult();
    this.getStockService.getOrganizedStocks(this.selectedDate).subscribe(res => {
      this.statusAfterGetResult(res);
    })
  }
  getSandwichStocks() {
    this.selectedStrategy = TechStrategyEnum.Sandwich;
    this.statusBeforeGetResult();
    this.getStockService.getSandwichStocks(this.selectedDate).subscribe(res => {
      this.statusAfterGetResult(res);
    })
  }
  getEpsIncreasingStocks() {
    this.statusBeforeGetResult();
    this.getStockService.getEpsIncreasingStocks().subscribe(res => {
      this.statusAfterGetResult(res);
    })
  }
  getHighYieldStocks() {
    this.statusBeforeGetResult();
    this.getStockService.getHighYieldStocks().subscribe(res => {
      this.statusAfterGetResult(res);
    })
  }

  statusBeforeGetResult() {
    this.getStockService.strategyMatchedStocks.next(null);
    this.getStockService.isResultLoading.next(true);
  }

  statusAfterGetResult(res: StockBaseModel) {
    this.getStockService.isResultLoading.next(false);
    this.getStockService.strategyMatchedStocks.next(res);
  }
}
