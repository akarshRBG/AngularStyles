import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnChanges {

  // these input properties are one way of getting values into the component
  // however, if there are a lot of values this can be tiring
  // something like
  // @Input() config: ButtonConfig;
  // can be used to send all styles in one shot

  // directives can be used for special behavior on the button like button of skew type
  // ideally directives are used for complex behaviour and not just for configs

  @Input() type: String = 'dark';
  @Input() label: String = 'Button';

  styles:any = {};

  constructor() {}

  // whenever we send data from parent to child and if the data changes in the parent,
  // this interface method can dynamically act on those changes and update the template
  ngOnChanges(changes: SimpleChanges): void {
    this.generateStyles();
  }

  // this is where magic happens
  generateStyles() {

    //sigh, can do much better than this manual assignment

    this.styles = {
      "fontSize": "14px",
      "fontWeight": "bold",
      "text-transform": "uppercase",
      "letter-spacing": "5px",
      "padding": "15px 40px",
      "border": "none",
      // making dynamic styles, this can however much more stable using dictionaries than manual assignments
      "background-color": this.type.toLowerCase() === "dark" ? 'black' : 'white',
      "color": this.type.toLowerCase() === "dark" ? 'white' : 'black',
      "box-shadow": "0px 1px 10px 0px rgba(0,0,0,0.6)"
    };

  }

}
