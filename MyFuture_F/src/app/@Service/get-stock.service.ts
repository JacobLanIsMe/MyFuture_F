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
  strategyMatchedStocks = new Subject<StockBaseModel | null>();
  isResultLoading = new Subject<boolean>();
  getJumpEmptyStocks(selectedDate: string) {
    return this.http.get<StockBaseModel>(`https://intothefuture.azurewebsites.net/api/GetStock/GetJumpEmptyStocks?selectedDate=${selectedDate}`);
  }
  getBullishPullbackStocks(selectedDate: string) {
    return this.http.get<StockBaseModel>(`https://intothefuture.azurewebsites.net/api/GetStock/GetBullishPullbackStocks?selectedDate=${selectedDate}`)
  }
  getOrganizedStocks(selectedDate: string) {
    return this.http.get<StockBaseModel>(`https://intothefuture.azurewebsites.net/api/GetStock/GetOrganizedStocks?selectedDate=${selectedDate}`)
  }
  getSandwichStocks(selectedDate: string) {
    return this.http.get<StockBaseModel>(`https://intothefuture.azurewebsites.net/api/GetStock/GetSandwichStocks?selectedDate=${selectedDate}`)
  }
  getEpsIncreasingStocks() {
    return this.http.get<StockBaseModel>("https://intothefuture.azurewebsites.net/api/GetStock/GetFinanceIncreasingStocks")
  }
  getHighYieldStocks() {
    return this.http.get<StockBaseModel>("https://intothefuture.azurewebsites.net/api/GetStock/GetHighYieldStocks");
  }
}
