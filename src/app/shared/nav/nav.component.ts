import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  showCombustibles = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
    if(this.showCombustibles){
      this.showCombustibles = false;
      console.log('hide')
    } else {
      this.showCombustibles = true;
      console.log('show')
    }
  }
}
