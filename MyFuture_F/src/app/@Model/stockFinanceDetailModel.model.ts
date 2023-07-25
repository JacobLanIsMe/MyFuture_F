export class StockFinanceDetailModel{
    constructor(
        public quarter: string | null,
        public eps: number,
        public qoq: number,
        public yoy: number
    ){}
}