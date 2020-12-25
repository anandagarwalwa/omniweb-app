import { Component, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
// import gsap from "gsap";
// import Draggable from "gsap/Draggable";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { MotionPathPlugin } from "gsap/all";

// gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin); 

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})

export class PricingComponent implements OnInit {
  color: ThemePalette = 'accent';
  @ViewChild("addfrontside") addFrontside;
  @ViewChild("addbackside") addBackside;
  checked = false;
  disabled = false;
  price = "150";
  monthOryear = "Mo";
  constructor() { }
  ngOnInit(): void {
  }
  changed() {
    console.log(this.checked)
    if (this.checked == true) {
      this.price = "200";
      this.monthOryear = "Yr";
      this.addFrontside.nativeElement.classList.add("card-year-front");
      this.addBackside.nativeElement.classList.add("card-year-back");
    }
    else {
      this.addFrontside.nativeElement.classList.remove("card-year-front");
      this.addBackside.nativeElement.classList.remove("card-year-back");
      this.price = "150";
      this.monthOryear = "Mo";
    }
  }
}
