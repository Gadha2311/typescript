"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Area = /** @class */ (function () {
    function Area() {
    }
    Area.prototype.circle = function (radius) {
        return Math.PI * radius * radius;
    };
    Area.prototype.square = function (side) {
        return side * side;
    };
    Area.prototype.rectangle = function (length, breadth) {
        return length * breadth;
    };
    Area.prototype.triangle = function (base, height) {
        return 0.5 * base * height;
    };
    return Area;
}());
var MyClass = /** @class */ (function (_super) {
    __extends(MyClass, _super);
    function MyClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyClass.prototype.main = function () {
        return __awaiter(this, void 0, void 0, function () {
            var choice, _a, area, _b, radius, _c, side, _d, length_1, _e, breadth, _f, base, _g, height, _h;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        _a = parseInt;
                        return [4 /*yield*/, askQuestion("Enter your choice:\n1. Circle\n2. Square\n3. Rectangle\n4. Triangle\n")];
                    case 1:
                        choice = _a.apply(void 0, [_j.sent(), 10]);
                        _b = choice;
                        switch (_b) {
                            case 1: return [3 /*break*/, 2];
                            case 2: return [3 /*break*/, 4];
                            case 3: return [3 /*break*/, 6];
                            case 4: return [3 /*break*/, 9];
                        }
                        return [3 /*break*/, 12];
                    case 2:
                        _c = parseFloat;
                        return [4 /*yield*/, askQuestion('Enter the radius: ')];
                    case 3:
                        radius = _c.apply(void 0, [_j.sent()]);
                        area = this.circle(radius);
                        console.log("Area of the circle is: ".concat(area.toFixed(2)));
                        return [3 /*break*/, 13];
                    case 4:
                        _d = parseFloat;
                        return [4 /*yield*/, askQuestion('Enter the length: ')];
                    case 5:
                        side = _d.apply(void 0, [_j.sent()]);
                        area = this.square(side);
                        console.log("Area of the square is: ".concat(area));
                        return [3 /*break*/, 13];
                    case 6:
                        _e = parseFloat;
                        return [4 /*yield*/, askQuestion('Enter the length: ')];
                    case 7:
                        length_1 = _e.apply(void 0, [_j.sent()]);
                        _f = parseFloat;
                        return [4 /*yield*/, askQuestion('Enter the breadth: ')];
                    case 8:
                        breadth = _f.apply(void 0, [_j.sent()]);
                        area = this.rectangle(length_1, breadth);
                        console.log("Area of the rectangle is: ".concat(area));
                        return [3 /*break*/, 13];
                    case 9:
                        _g = parseFloat;
                        return [4 /*yield*/, askQuestion('Enter the base: ')];
                    case 10:
                        base = _g.apply(void 0, [_j.sent()]);
                        _h = parseFloat;
                        return [4 /*yield*/, askQuestion('Enter the height: ')];
                    case 11:
                        height = _h.apply(void 0, [_j.sent()]);
                        area = this.triangle(base, height);
                        console.log("Area of the triangle is: ".concat(area));
                        return [3 /*break*/, 13];
                    case 12:
                        console.log('Invalid choice');
                        _j.label = 13;
                    case 13:
                        rl.close();
                        return [2 /*return*/];
                }
            });
        });
    };
    return MyClass;
}(Area));
var myClass = new MyClass();
myClass.main().catch(function (error) { return console.error(error); });
