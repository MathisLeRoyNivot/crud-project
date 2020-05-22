export declare class User {
    username: String;
    password: String;
    roles: Array<String>;
    constructor(username: String, password: String, roles: Array<String>);
    getUsername(): String;
    getPassword(): String;
    getRoles(): String[];
    setPassword(password: String): void;
    setRoles(roles: Array<String>): void;
}
