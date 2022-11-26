export interface IGetDemand {
    ID: number;
    Admin_ID: number;
    Client_ID: number;
    Order_Number: string;
    Itens_quantity: number;
    Date: string;
    Amount: number;
    CreatedAt: Date;
    UpdatedAt: Date;
    DeletedAt?: any;
}