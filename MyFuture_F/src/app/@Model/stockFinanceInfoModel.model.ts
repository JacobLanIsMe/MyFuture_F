import { ApiDataResponse } from "./apiDataResponse.model";
import { StockFinanceDetailModel } from "./stockFinanceDetailModel.model";

export class StockFinanceInfoModel extends ApiDataResponse{
    constructor(
        public data : Data[] | null
    ){
        super(null, null, null);
    }
}

class Data{
    constructor(
        public id: string | null,
        public name: string | null,
        public stockDetails: StockFinanceDetailModel[] | null
    ){}
}