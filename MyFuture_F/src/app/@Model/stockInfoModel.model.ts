import { ApiDataResponse } from "./apiDataResponse.model";
import { StockDetailModel } from "./stockDetailModel.model";

export class StockInfoModel extends ApiDataResponse{
    constructor(
        public data: Data[] | null
    ){
        super(null, null, null);
    }
}
class Data{
    constructor(
        public id: string | null,
        public name: string | null,
        public stockDetails: StockDetailModel[] | null
    ){}
}