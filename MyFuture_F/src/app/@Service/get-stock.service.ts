import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StockInfoModel } from '../@Model/stockInfoModel.model';

@Injectable({
  providedIn: 'root'
})
export class GetStockService {
  constructor(private http: HttpClient) { }
  getJumpEmptyStocks(){
    return this.http.get<StockInfoModel>("/api/GetStock/GetJumpEmptyStocks");
  }
}
