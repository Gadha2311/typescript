class NotANumberError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NotANumberError";
  }
}

class HugeHeightError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "HugeHeightError";
  }
}

class TinyHeightError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "TinyHeightError";
  }
}

function validateHeight(my_height: any): string | number {
  try {
    if (isNaN(my_height)) {
      throw new NotANumberError("notANumberError");
    } else if (my_height > 100) {
      throw new HugeHeightError("hugeHeightError");
    } else if (my_height < 10) {
      throw new TinyHeightError("tinyHeightError");
    } else {
      return my_height;
    }
  } catch (error) {
    return error.message;
  }
}

console.log(validateHeight("seven"));
console.log(validateHeight(77));
console.log(validateHeight(105));
console.log(validateHeight(8));
