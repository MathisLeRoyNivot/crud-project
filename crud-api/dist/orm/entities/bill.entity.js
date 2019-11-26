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
let Bill = class Bill {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Bill.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => client_entity_1.Client, clientId => clientId.id),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Bill.prototype, "totalPrice", void 0);
__decorate([
    typeorm_1.Column({
        type: 'boolean',
        default: false,
    }),
    __metadata("design:type", Boolean)
], Bill.prototype, "isPaid", void 0);
__decorate([
    typeorm_1.Column({
        type: 'datetime',
    }),
    __metadata("design:type", Date)
], Bill.prototype, "paidAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Bill.prototype, "address", void 0);
__decorate([
    typeorm_1.Column({
        type: 'datetime',
        default: Date.now(),
    }),
    __metadata("design:type", Date)
], Bill.prototype, "emittedAt", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 255,
        default: uuid_1.uuidv4(),
    }),
    __metadata("design:type", String)
], Bill.prototype, "uuid", void 0);
Bill = __decorate([
    typeorm_1.Entity()
], Bill);
exports.Bill = Bill;
//# sourceMappingURL=bill.entity.js.map