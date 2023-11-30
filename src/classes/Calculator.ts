import { evaluate } from "mathjs";

export class Calculator {
    result: number;

    constructor(result: number) {
        this.result = result;
    }

    evaluteExpression(expression: string): number {
        try {
            console.log(`Estoy en la clase calculator y entre a la función evaluateExpression`)
            this.result = evaluate(expression);
            console.log(`The result is ${this.result}`);
            return this.result;
        }catch( error ) {
            console.error('There was an error while evaluating');
        }

        return this.result;
    }
}