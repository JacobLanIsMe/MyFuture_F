import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StockTechInfoModel } from '../@Model/stockTechInfoModel.model';
import { Subject } from 'rxjs';
import { StockFinanceInfoModel } from '../@Model/stockFinanceInfoModel.model';
import { StrategyEnum } from '../@Enum/StrategyEnum';

@Injectable({
  providedIn: 'root'
})
export class GetStockService {
  constructor(private http: HttpClient) { }
  selectedStock = new Subject<string>();
  techMatchedStocks = new Subject<StockTechInfoModel>();
  financeMatchedStocks = new Subject<StockFinanceInfoModel>();
  getJumpEmptyStocks(){
    return this.http.get<StockTechInfoModel>("https://intothefuture.azurewebsites.net/api/GetStock/GetJumpEmptyStocks");
  }
  getBullishPullbackStocks(){
    return this.http.get<StockTechInfoModel>("https://intothefuture.azurewebsites.net/api/GetStock/GetBullishPullbackStocks")
  }
  getEpsIncreasingStocks(){
    return this.http.get<StockFinanceInfoModel>("https://intothefuture.azurewebsites.net/api/GetStock/GetEpsIncreasingStocks")
  }
}
