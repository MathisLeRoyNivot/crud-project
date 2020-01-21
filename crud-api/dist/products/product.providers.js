"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_entity_1 = require("./product.entity");
exports.photoProviders = [
    {
        provide: 'PRODUCT_REPOSITORY',
        useFactory: (connection) => connection.getRepository(product_entity_1.Product),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=product.providers.js.map