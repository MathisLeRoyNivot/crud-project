"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const express = require("express");
const functions = require("firebase-functions");
const app_module_1 = require("./app.module");
const helmet = require("helmet");
const bootstrap = async (expressApp) => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(expressApp), { cors: true });
    app.use(helmet());
    return app.init();
};
const server = express();
bootstrap(server).catch(err => console.error('Nest did not start', err));
exports.api = functions.region('europe-west1').https.onRequest(server);
//# sourceMappingURL=main.js.map