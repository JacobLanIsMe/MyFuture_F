import { Component, OnInit } from '@angular/core';
import { StockInfoModel } from 'src/app/@Model/stockInfoModel.model';
import { GetStockService } from 'src/app/@Service/get-stock.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  constructor(private getStockService: GetStockService){}
  ngOnInit(): void {
    this.getStockService.getJumpEmptyStocks().subscribe(res=>{
      this.stockInfos = res;
    });
  }
  stockInfos: StockInfoModel | null = null;
  linkTo(id: string | null){
    if (id){
      let url = `https://histock.tw/stock/tchart.aspx?no=${id}`;
      window.open(url, "_blank");
      window.focus();
    }
  }
}
