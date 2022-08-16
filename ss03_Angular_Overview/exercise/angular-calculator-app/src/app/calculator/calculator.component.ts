import {Component, OnInit} from '@angular/core';
import {Calculator} from '../calculator';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  calculator: Calculator = {
    firstOperand: 5,
    operator: '/',
    secondOperand: 0
  };

  calculate() {
    switch (this.calculator.operator) {
      case '+':
        return (this.calculator.firstOperand * 1) + (this.calculator.secondOperand * 1);
      case '-':
        return this.calculator.firstOperand - this.calculator.secondOperand;
      case '*':
        return this.calculator.firstOperand * this.calculator.secondOperand;
      case '/':
        if (this.calculator.secondOperand == 0) {
          return 'Can not Devide By Zero !';
        }
        return this.calculator.firstOperand / this.calculator.secondOperand;
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}
