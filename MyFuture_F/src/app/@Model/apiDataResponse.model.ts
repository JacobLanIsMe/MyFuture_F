export class ApiDataResponse{
    constructor(
        public IsSuccess?: boolean,
        public ErrorMsg?: string,
        public ErrorMsgDetail?: string,
    ){}
}