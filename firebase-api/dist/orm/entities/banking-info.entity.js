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
const typeorm_1 = require("typeorm");
const client_entity_1 = require("./client.entity");
let BankingInfo = class BankingInfo {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], BankingInfo.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => client_entity_1.Client, clientId => clientId.id),
    typeorm_1.Column(),
    __metadata("design:type", String)
], BankingInfo.prototype, "cardNumber", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BankingInfo.prototype, "cryptogram", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BankingInfo.prototype, "expirationDate", void 0);
BankingInfo = __decorate([
    typeorm_1.Entity()
], BankingInfo);
exports.BankingInfo = BankingInfo;
//# sourceMappingURL=banking-info.entity.js.map