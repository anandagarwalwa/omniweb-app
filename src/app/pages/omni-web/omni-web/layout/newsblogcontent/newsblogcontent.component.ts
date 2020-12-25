import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-newsblogcontent',
  templateUrl: './newsblogcontent.component.html',
  styleUrls: ['./newsblogcontent.component.scss']
})
export class NewsblogcontentComponent implements OnInit {
  @Input() Newsblogsdata: any;

  constructor() { }

  ngOnInit(): void {
  }

}
