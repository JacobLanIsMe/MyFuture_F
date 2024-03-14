import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StockTechInfoModel } from '../@Model/stockTechInfoModel.model';
import { Subject } from 'rxjs';
import { StockFinanceInfoModel } from '../@Model/stockFinanceInfoModel.model';
import { StockBaseModel } from '../@Model/stockBaseModel';

@Injectable({
  providedIn: 'root'
})
export class GetStockService {
  constructor(private http: HttpClient) { }
  selectedStock = new Subject<string>();
  strategyMatchedStocks = new Subject<StockBaseModel>();
  getJumpEmptyStocks(){
    return this.http.get<StockBaseModel>("https://intothefuture.azurewebsites.net/api/GetStock/GetJumpEmptyStocks");
  }
  getBullishPullbackStocks(){
    return this.http.get<StockBaseModel>("https://intothefuture.azurewebsites.net/api/GetStock/GetBullishPullbackStocks")
  }
  getEpsIncreasingStocks(){
    return this.http.get<StockBaseModel>("https://intothefuture.azurewebsites.net/api/GetStock/GetFinanceIncreasingStocks")
  }
  getHighYieldStocks(){
    return this.http.get<StockBaseModel>("https://intothefuture.azurewebsites.net/api/GetStock/GetHighYieldStocks");
  }
}
