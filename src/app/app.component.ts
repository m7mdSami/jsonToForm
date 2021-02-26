import { Component } from '@angular/core';
import { InputType } from './interfaces/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  jsonInput:any = `

  {
      "${InputType.INPUT}": "Input field",
      "${InputType.SELECT_BOX}": [1,2,3],
      "${InputType.LABLE}": "Lable field",
      "${InputType.BUTTON_SUBMIT}": "Submit Button"
  }
  
  `;

  get InputType(): typeof InputType {
    return InputType
  }

  jsonToForm(): any {
    try {
      if(this.jsonInput.trim() && this.jsonInput.length) {
        let value = JSON.parse(this.jsonInput);
        return {
          keys: Object.keys(value) as any,
          values: Object.values(value) as any
        };
      }
      return false;
    } catch (error) {
      console.log('error ==>', error)
      return false
    }
  }
}