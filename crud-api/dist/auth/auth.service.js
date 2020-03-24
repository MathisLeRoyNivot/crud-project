"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const jwt_1 = require("@nestjs/jwt");
const fs = require("fs");
const user_entity_1 = require("../user/user.entity");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async checkUser(username, pass) {
        const userData = await this.userService.findOneByName(username);
        const user = new user_entity_1.User(userData["username"], userData["password"], userData["roles"]);
        if (user && user.getPassword()) {
            const bcrypt = require('bcrypt');
            const isMatching = await bcrypt.compare(pass, user.getPassword());
            if (isMatching) {
                const { password } = user, result = __rest(user, ["password"]);
                return result;
            }
            else {
                return null;
            }
        }
    }
    async login(user, checkAdmin = false) {
        const payload = { username: user.username, sub: user.userId, roles: user.roles, publicKey: fs.readFileSync('src/auth/public.key', 'utf8') };
        if (checkAdmin) {
            const isAdmin = (role) => role === 'admin';
            if (user.roles.some(isAdmin)) {
                return {
                    access_token: this.jwtService.sign(payload),
                };
            }
            else {
                return {
                    error: 'Insufficient privileges'
                };
            }
        }
        else {
            return {
                access_token: this.jwtService.sign(payload),
            };
        }
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map