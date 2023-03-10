"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const author_1 = require("../controllers/author");
const authorRouter = (0, express_1.Router)();
authorRouter.get('/', author_1.list);
authorRouter.get('/:id', author_1.find);
authorRouter.post('/', author_1.create);
exports.default = authorRouter;
