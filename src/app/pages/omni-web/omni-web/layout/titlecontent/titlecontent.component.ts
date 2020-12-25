import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-titlecontent',
  templateUrl: './titlecontent.component.html',
  styleUrls: ['./titlecontent.component.scss']
})
export class TitlecontentComponent implements OnInit {
  @Input() titledata: any;
  constructor() { }

  ngOnInit(): void {
  }

}
