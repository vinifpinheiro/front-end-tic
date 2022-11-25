export interface IGetProduct {
    Id: number;
    Admin_ID: number;
    Product_ID: string;
    Price: number;
    Description: string;
    Heigth: number;
    Situation: string;
    Model: string;
    Family: string;
    Out: string;
    CreatedAt: Date;
    UpdatedAt: Date;
    DeletedAt?: any;
}