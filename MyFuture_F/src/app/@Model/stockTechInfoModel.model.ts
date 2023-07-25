import { ApiDataResponse } from "./apiDataResponse.model";
import { StockTechDetailModel } from "./stockTechDetailModel.model";

export class StockTechInfoModel extends ApiDataResponse{
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
        public stockDetails: StockTechDetailModel[] | null
    ){}
}