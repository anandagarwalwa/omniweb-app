import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public tabIndexArray = [1,2,3];
  public selected = 0;
  public index = 0;
  public mainPageData = {
    title: 'Discover Your Data Landscape',
    description: 'Omni is a data catalog tool that allows organizations to get complete visibility into their interconnected ecosytem of data & set alerts to better understand data accuracy.'
  };

  public mainPageContentData = {
    imgPath1: '../../../assets/images/fliter.png',
    imageOneTitle: 'Easy Filtering',
    imgonedescription:'Breakdown data quickly & easily to understand whats available at any breakdown allowing for fun exploration.',
    imgnboxvideo1: '../../../../assets/videos/Easy_Filtering.mp4',
    imgPath2: '../../../assets/images/alerts-01.png',
    imagetwoTitle: 'Create Alerts',
    imgtwodescription:'Build complex alerts with dimension & metric criteria & receive email/slack communications when they fail.',
    imgnboxvideo2: '../../../../assets/videos/Add_Alert.mp4',
    imgPath3: '../../../assets/images/zoom-01.png',
    imagethreeTitle: 'Zoom for details',
    imgthreedescription:'Click on data points to reveal extra details such as preview & detailed description.',
    imgnboxvideo3: '../../../../assets/videos/Veiw_Node_Details.mp4'
  }
 

  constructor() { }

  ngOnInit() {
    this.sliderFunction();
  }

  sliderFunction() {
    interval(5000)
    .subscribe(() => {
        this.index += 1;
        if(this.index > 2) {
          this.index = 0;
        }
       this.selected = this.index;
    });
}



  

}
