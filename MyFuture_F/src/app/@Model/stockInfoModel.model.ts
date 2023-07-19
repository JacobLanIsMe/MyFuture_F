import { ApiDataResponse } from "./apiDataResponse.model";
import { StockDetailModel } from "./stockDetailModel.model";

export class StockInfoModel extends ApiDataResponse{
    constructor(
        public Id: string,
        public Name: string,
        public StockDetails: StockDetailModel[]
    ){
        super(undefined, undefined, undefined);
    }
}