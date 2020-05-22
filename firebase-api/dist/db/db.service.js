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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../user/user.entity");
const admin = require("firebase-admin");
const functions = require("firebase-functions");
let DbService = class DbService {
    constructor() {
        admin.initializeApp(functions.config().firebase);
        this.db = admin.firestore();
    }
    async addUser(user) {
        const bcrypt = require('bcrypt');
        const hashedPassword = String(bcrypt.hashSync(user.getPassword(), 10));
        await this.db.collection('users').add({
            username: user.getUsername(),
            password: hashedPassword,
            roles: user.getRoles()
        }).then(ref => {
            console.log('Added document with ID: ', ref.id);
        });
    }
    async getUsers() {
        let users = [];
        await this.db.collection('users').get()
            .then((snapshot) => {
            snapshot.forEach((doc) => {
                let user = new user_entity_1.User(doc.get("username"), doc.get("password"), doc.get("roles"));
                users.push(JSON.parse(JSON.stringify(user)));
            });
        })
            .catch((err) => {
            console.log('Error getting documents', err);
        });
        return users;
    }
    async getUserByName(username) {
        let user;
        let data;
        await this.db.collection('users').where('username', '==', username).get()
            .then((snapshot) => {
            if (snapshot.empty) {
                return;
            }
            snapshot.forEach(doc => {
                data = new user_entity_1.User(doc.data().username, doc.data().password, doc.data().roles);
                user = JSON.parse(JSON.stringify(data));
            });
        })
            .catch((err) => {
            console.log('Error getting documents', err);
        });
        return user;
    }
    async getUserById(id) {
        let user;
        await this.db.collection('users').get()
            .then((snapshot) => {
            snapshot.forEach((doc) => {
                if (doc.id == id) {
                    let data = new user_entity_1.User(doc.data().username, doc.data().password, doc.data().roles);
                    user = JSON.parse(JSON.stringify(data));
                }
            });
        })
            .catch((err) => {
            console.log('Error getting documents', err);
        });
        return user;
    }
};
DbService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], DbService);
exports.DbService = DbService;
//# sourceMappingURL=db.service.js.map