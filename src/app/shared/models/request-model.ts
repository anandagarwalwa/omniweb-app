export class RequestModel{
    title: string;
    description: string;
    email: string;
    progress: string = "In Progress";
    CreatedBy:string='1';
    UpdatedBy:string='1';
}

export class VotesModel{
    email: string;
    requestId: string;
    CreatedBy:string = '1';
    UpdatedBy:string='1';
}
