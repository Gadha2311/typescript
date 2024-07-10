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
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.addition = function (num1, num2) {
        return num1 + num2;
    };
    Calculator.prototype.subtraction = function (num1, num2) {
        return num1 - num2;
    };
    Calculator.prototype.multiplication = function (num1, num2) {
        return num1 * num2;
    };
    Calculator.prototype.division = function (num1, num2) {
        if (num2 === 0) {
            throw new Error('Division by zero is not allowed.');
        }
        return num1 / num2;
    };
    return Calculator;
}());
function askQuestion(query) {
    return new Promise(function (resolve) { return rl.question(query, resolve); });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var calculator, choiceInput, choice, _a, addNum1, _b, addNum2, _c, subNum1, _d, subNum2, _e, mulNum1, _f, mulNum2, _g, divNum1, _h, divNum2, _j;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0:
                    calculator = new Calculator();
                    console.log('Menu:');
                    console.log('1. Addition');
                    console.log('2. Subtraction');
                    console.log('3. Multiplication');
                    console.log('4. Division');
                    console.log('5. Exit');
                    _k.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 18];
                    return [4 /*yield*/, askQuestion('Enter your choice (1-5): ')];
                case 2:
                    choiceInput = _k.sent();
                    choice = parseInt(choiceInput, 10);
                    _a = choice;
                    switch (_a) {
                        case 1: return [3 /*break*/, 3];
                        case 2: return [3 /*break*/, 6];
                        case 3: return [3 /*break*/, 9];
                        case 4: return [3 /*break*/, 12];
                        case 5: return [3 /*break*/, 15];
                    }
                    return [3 /*break*/, 16];
                case 3:
                    _b = parseFloat;
                    return [4 /*yield*/, askQuestion('Enter first number: ')];
                case 4:
                    addNum1 = _b.apply(void 0, [_k.sent()]);
                    _c = parseFloat;
                    return [4 /*yield*/, askQuestion('Enter second number: ')];
                case 5:
                    addNum2 = _c.apply(void 0, [_k.sent()]);
                    console.log("Result: ".concat(calculator.addition(addNum1, addNum2)));
                    return [3 /*break*/, 17];
                case 6:
                    _d = parseFloat;
                    return [4 /*yield*/, askQuestion('Enter first number: ')];
                case 7:
                    subNum1 = _d.apply(void 0, [_k.sent()]);
                    _e = parseFloat;
                    return [4 /*yield*/, askQuestion('Enter second number: ')];
                case 8:
                    subNum2 = _e.apply(void 0, [_k.sent()]);
                    console.log("Result: ".concat(calculator.subtraction(subNum1, subNum2)));
                    return [3 /*break*/, 17];
                case 9:
                    _f = parseFloat;
                    return [4 /*yield*/, askQuestion('Enter first number: ')];
                case 10:
                    mulNum1 = _f.apply(void 0, [_k.sent()]);
                    _g = parseFloat;
                    return [4 /*yield*/, askQuestion('Enter second number: ')];
                case 11:
                    mulNum2 = _g.apply(void 0, [_k.sent()]);
                    console.log("Result: ".concat(calculator.multiplication(mulNum1, mulNum2)));
                    return [3 /*break*/, 17];
                case 12:
                    _h = parseFloat;
                    return [4 /*yield*/, askQuestion('Enter first number: ')];
                case 13:
                    divNum1 = _h.apply(void 0, [_k.sent()]);
                    _j = parseFloat;
                    return [4 /*yield*/, askQuestion('Enter second number: ')];
                case 14:
                    divNum2 = _j.apply(void 0, [_k.sent()]);
                    try {
                        console.log("Result: ".concat(calculator.division(divNum1, divNum2)));
                    }
                    catch (error) {
                        console.log(error.message);
                    }
                    return [3 /*break*/, 17];
                case 15:
                    rl.close();
                    return [2 /*return*/];
                case 16:
                    console.log('Invalid choice. Please enter a number between 1 and 5.');
                    _k.label = 17;
                case 17: return [3 /*break*/, 1];
                case 18: return [2 /*return*/];
            }
        });
    });
}
main().catch(function (error) { return console.error(error); }).finally(function () { return rl.close(); });
