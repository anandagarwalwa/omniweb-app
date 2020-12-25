import { AfterContentInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterContentInit {
  
  status: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    (() => {
      let nav = document.getElementById('nav');
      window.addEventListener('scroll', () => {
        console.log('YYYYYYY : ', window.scrollY)
        if (window.scrollY > 1.5) {
          nav.classList.add("fixed-top");
          // document.body.style.paddingTop = '70';
        } else {
          nav.classList.remove("fixed-top");
          // document.body.style.paddingTop = '0';
        }
      });
      console.log('Listner added');
    })()
  }

  clickEvent() {
    this.status = !this.status;       
  }



}
