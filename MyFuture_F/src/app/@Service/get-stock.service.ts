import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StockInfoModel } from '../@Model/stockInfoModel.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetStockService {
  constructor(private http: HttpClient) { }
  selectedStock = new Subject<string>();
  strategyMatchedStocks = new Subject<StockInfoModel>();
  getJumpEmptyStocks(){
    return this.http.get<StockInfoModel>("https://intothefuture.azurewebsites.net/api/GetStock/GetJumpEmptyStocks");
  }
  getBullishPullbackStocks(){
    return this.http.get<StockInfoModel>("https://intothefuture.azurewebsites.net/api/GetStock/GetBullishPullbackStocks")
  }
}
