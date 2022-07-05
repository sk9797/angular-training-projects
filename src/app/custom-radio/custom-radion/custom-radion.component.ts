import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-radion',
  templateUrl: './custom-radion.component.html',
  styleUrls: ['./custom-radion.component.css']
})
export class CustomRadionComponent implements OnInit {

  firstVal : boolean = false
  secVal : boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  toggleBtn(id: string):void{
    console.log(id);
    
    if (id === '1') {
      this.firstVal = !this.firstVal
      this.secVal = !this.secVal
      console.log(this.firstVal);
    } else if (id === '2') {
      this.firstVal = false
      this.secVal = true
      console.log(this.secVal);
    }
  }

  toggleBtnFirst ():void {
    this.firstVal = true
      this.secVal = false
      console.log(this.firstVal);
  }

  toggleBtnSec(){
    this.firstVal = false
      this.secVal = true
      console.log(this.secVal);
  }

}
