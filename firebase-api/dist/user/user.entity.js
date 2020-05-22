"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(username, password, roles) {
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
    setPassword(password) {
        this.password = password;
    }
    setRoles(roles) {
        this.roles = roles;
    }
}
exports.User = User;
//# sourceMappingURL=user.entity.js.map