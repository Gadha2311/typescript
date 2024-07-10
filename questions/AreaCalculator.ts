import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query: string): Promise<string> {
    return new Promise((resolve) => rl.question(query, resolve));
}

class Area {
    circle(radius: number): number {
        return Math.PI * radius * radius;
    }

    square(side: number): number {
        return side * side;
    }

    rectangle(length: number, breadth: number): number {
        return length * breadth;
    }

    triangle(base: number, height: number): number {
        return 0.5 * base * height;
    }
}

class MyClass extends Area {
    async main() {
        const choice = parseInt(await askQuestion(`Enter your choice:\n1. Circle\n2. Square\n3. Rectangle\n4. Triangle\n`), 10);
        let area: number;

        switch (choice) {
            case 1:
                const radius = parseFloat(await askQuestion('Enter the radius: '));
                area = this.circle(radius);
                console.log(`Area of the circle is: ${area.toFixed(2)}`);
                break;
            case 2:
                const side = parseFloat(await askQuestion('Enter the length: '));
                area = this.square(side);
                console.log(`Area of the square is: ${area}`);
                break;
            case 3:
                const length = parseFloat(await askQuestion('Enter the length: '));
                const breadth = parseFloat(await askQuestion('Enter the breadth: '));
                area = this.rectangle(length, breadth);
                console.log(`Area of the rectangle is: ${area}`);
                break;
            case 4:
                const base = parseFloat(await askQuestion('Enter the base: '));
                const height = parseFloat(await askQuestion('Enter the height: '));
                area = this.triangle(base, height);
                console.log(`Area of the triangle is: ${area}`);
                break;
            default:
                console.log('Invalid choice');
                console.log('areaa');
                
        }

        rl.close();
    }
}

const myClass = new MyClass();
myClass.main().catch(error => console.error(error));
