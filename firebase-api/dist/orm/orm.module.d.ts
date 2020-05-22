import { Connection } from 'typeorm';
export declare class OrmModule {
    private readonly connection;
    constructor(connection: Connection);
}
