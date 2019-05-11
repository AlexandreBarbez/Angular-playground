import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  public pageTitle = 'Welcome';

  options = [
    {name:'OptionA', value:'1', checked:true},
    {name:'OptionB', value:'2', checked:false},
    {name:'OptionC', value:'3', checked:true}
  ]

  get selectedOptions() { // right now: ['1','3']
    return this.options
        .filter(opt => opt.checked)
        .map(opt => opt.value)
  }

  printChecked() {
    console.log(this.selectedOptions);
  }
}
