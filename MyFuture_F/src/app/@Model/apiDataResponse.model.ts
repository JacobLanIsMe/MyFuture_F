export class ApiDataResponse{
    constructor(
        public isSuccess: boolean | null,
        public errorMsg: string | null,
        public errorMsgDetail: string | null,
    ){}
}