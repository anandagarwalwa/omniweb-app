import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild,  } from '@angular/core';

@Component({
  selector: 'app-content-filter',
  templateUrl: './content-filter.component.html',
  styleUrls: ['./content-filter.component.scss']
})
export class ContentFilterComponent implements OnInit, AfterViewInit {
  
  @Input() contentData: any;
  @Input() pageName: any;
  @ViewChild('video1', {static: false}) video1: ElementRef;
  @ViewChild('video2', {static: false}) video2: ElementRef;
  @ViewChild('video3', {static: false}) video3: ElementRef;
  videoNumber: number;

  constructor() { }

  @HostListener("window:scroll", ["$event"])
    onWindowScroll() {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    console.log('nikhil : ', this.pageName, ':  ', pos);
    if (this.pageName === 'main') {
      if (pos > 5300) {
        this.videoNumber = 1;
        this.ngAfterViewInit();
      }
      if (pos > 6000) {
        this.videoNumber = 2;
        this.ngAfterViewInit();
      }
      if (pos > 7000) {
        this.videoNumber = 3;
        this.ngAfterViewInit();
      }
    }  
    else if (this.pageName === 'feature') {
      if (pos > 3000 ) {
        this.videoNumber = 1;
        this.ngAfterViewInit();
      }
      if (pos > 4500) {
        this.videoNumber = 2;
        this.ngAfterViewInit();
      }
      if (pos > 5200) {
        this.videoNumber = 3;
        this.ngAfterViewInit();
      }
    }
    }

  ngAfterViewInit(): void {
    this.playContentFilterVideo();
  }

  playContentFilterVideo() {
    if (this.videoNumber === 1) {
      this.video1.nativeElement.play();
    }
    if (this.videoNumber === 2) {
      this.video2.nativeElement.play();
    }
    if (this.videoNumber === 3) {
      this.video3.nativeElement.play();
    }
  }


  ngOnInit(): void {
  }

  myFunction() {
    alert('fdknfvln')
  }

  onScroll(event: Event) {
    console.log((event.target as HTMLElement).scrollHeight);
  }

}
