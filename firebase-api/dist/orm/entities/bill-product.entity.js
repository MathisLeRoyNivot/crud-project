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
const bill_entity_1 = require("./bill.entity");
const product_entity_1 = require("../../products/product.entity");
let BillProduct = class BillProduct {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], BillProduct.prototype, "id", void 0);
__decorate([
    typeorm_1.OneToOne(type => bill_entity_1.Bill, billId => billId.id),
    typeorm_1.OneToOne(type => product_entity_1.Product, productId => productId.id),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], BillProduct.prototype, "quantity", void 0);
BillProduct = __decorate([
    typeorm_1.Entity()
], BillProduct);
exports.BillProduct = BillProduct;
//# sourceMappingURL=bill-product.entity.js.map