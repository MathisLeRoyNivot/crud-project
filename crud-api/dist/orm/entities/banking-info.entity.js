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
const uuid_1 = require("uuid");
let BankingInfo = class BankingInfo {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
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
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 255,
        default: uuid_1.uuidv4(),
    }),
    __metadata("design:type", String)
], BankingInfo.prototype, "uuid", void 0);
BankingInfo = __decorate([
    typeorm_1.Entity()
], BankingInfo);
exports.BankingInfo = BankingInfo;
//# sourceMappingURL=banking-info.entity.js.map