import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class ContentComponent implements OnInit {

  public integrationPageData = {
    title: 'The Data Catalog That Sees The Whole Picture',
    description: 'Visualise complete data lineage allowing non-technical users complete data discovery.'
  }
 
  public mainPageContentData = {
    imgPath1: '../../../assets/images/intentive-search-01.png',
    imageOneTitle: 'Intuitive Searching',
    imgonedescription:'Built for finding exactly what you want or allowing you to browse & discover what you never knew you needed.',
    imgnboxvideo1: '../../../assets/videos/intuitive_searching.mp4',
    imgPath2: '../../../assets/images/data-monitoring-01.png',
    imagetwoTitle: 'Data Monitoring',
    imgtwodescription:'Automatically spot data inaccuracies & understand downstream implications.',
    imgnboxvideo2: '../../../assets/videos/data_monitoring.mp4',
    imgPath3: '../../../assets/images/keep-01.png',
    imagethreeTitle: 'Keep up to date',
    imgthreedescription:'Data becomes stale quickly. Easily locate the most up-to-date data sources/analyses.',
    imgnboxvideo3: '../../../assets/videos/keep_up_to_date.mp4'
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
