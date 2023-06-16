"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCronWithLimit = void 0;
const p_limit_1 = __importDefault(require("p-limit"));
const os_1 = __importDefault(require("os"));
const cronLimit = (0, p_limit_1.default)(os_1.default.cpus().length);
function runCronWithLimit(fn) {
    return cronLimit(() => {
        return fn();
    });
}
exports.runCronWithLimit = runCronWithLimit;
//# sourceMappingURL=pLimit.js.map