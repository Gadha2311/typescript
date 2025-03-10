"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function askQuestion(query) {
    return new Promise(function (resolve) { return rl.question(query, resolve); });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var size, _a, array1, array2, array1Values, array1ValuesArray, array2Values, array2ValuesArray;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = parseInt;
                    return [4 /*yield*/, askQuestion('Enter the size of arrays: ')];
                case 1:
                    size = _a.apply(void 0, [_c.sent(), 10]);
                    if (isNaN(size) || size <= 0) {
                        console.log('Please enter a valid positive number for the size of arrays.');
                        rl.close();
                        return [2 /*return*/];
                    }
                    array1 = [];
                    array2 = [];
                    return [4 /*yield*/, askQuestion('Enter the values of Array 1 (comma-separated): ')];
                case 2:
                    array1Values = _c.sent();
                    array1ValuesArray = array1Values.split(',').map(function (value) { return parseFloat(value.trim()); });
                    if (array1ValuesArray.length !== size || array1ValuesArray.some(isNaN)) {
                        console.log('Please enter valid numbers for Array 1.');
                        rl.close();
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, askQuestion('Enter the values of Array 2 (comma-separated): ')];
                case 3:
                    array2Values = _c.sent();
                    array2ValuesArray = array2Values.split(',').map(function (value) { return parseFloat(value.trim()); });
                    if (array2ValuesArray.length !== size || array2ValuesArray.some(isNaN)) {
                        console.log('Please enter valid numbers for Array 2.');
                        rl.close();
                        return [2 /*return*/];
                    }
                    _b = [array2ValuesArray, array1ValuesArray], array1 = _b[0], array2 = _b[1];
                    console.log('Arrays after swapping:');
                    console.log('Array1:', array1.join(', '));
                    console.log('Array2:', array2.join(', '));
                    rl.close();
                    return [2 /*return*/];
            }
        });
    });
}
main().catch(function (error) { return console.error(error); });
