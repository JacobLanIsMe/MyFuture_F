import { ApiDataResponse } from "./apiDataResponse.model";

export class StockBaseModel extends ApiDataResponse{
    constructor(
        public data : Data[] | null
    ){
        super(null, null, null);
    }
}
class Data {
    constructor(
        public stockId: string | null,
        public name: string | null
    ){}
}