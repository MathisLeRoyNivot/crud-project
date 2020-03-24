export class User {
    public username: String;
    public password: String;
    public roles: Array<String>;

    constructor(username: String, password: String, roles: Array<String>) {
        this.username = username;
        this.password = password;
        this.roles = roles;
    }

    getUsername() {
        return this.username;
    }

    getPassword() {
        return this.password;
    }

    getRoles() {
        return this.roles;
    }

    setPassword(password: String) {
        this.password = password;
    }

    setRoles(roles: Array<String>) {
        this.roles = roles;
    }
}