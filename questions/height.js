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
var NotANumberError = /** @class */ (function (_super) {
    __extends(NotANumberError, _super);
    function NotANumberError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "NotANumberError";
        return _this;
    }
    return NotANumberError;
}(Error));
var HugeHeightError = /** @class */ (function (_super) {
    __extends(HugeHeightError, _super);
    function HugeHeightError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "HugeHeightError";
        return _this;
    }
    return HugeHeightError;
}(Error));
var TinyHeightError = /** @class */ (function (_super) {
    __extends(TinyHeightError, _super);
    function TinyHeightError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "TinyHeightError";
        return _this;
    }
    return TinyHeightError;
}(Error));
function validateHeight(my_height) {
    try {
        if (isNaN(my_height)) {
            throw new NotANumberError("notANumberError");
        }
        else if (my_height > 100) {
            throw new HugeHeightError("hugeHeightError");
        }
        else if (my_height < 10) {
            throw new TinyHeightError("tinyHeightError");
        }
        else {
            return my_height;
        }
    }
    catch (error) {
        return error.message;
    }
}
console.log(validateHeight("seven"));
console.log(validateHeight(77));
console.log(validateHeight(105));
console.log(validateHeight(8));
