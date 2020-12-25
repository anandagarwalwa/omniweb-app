import { Component, OnInit,ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RequestModel, VotesModel } from 'src/app/shared/models/request-model';
import { RequestService } from 'src/app/shared/services/request.service';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {
  display = 'none'; //default Variable
  displayRequest = 'none';
  Requestmodel: RequestModel = new RequestModel();
  voteModel: VotesModel = new VotesModel();
  isUniqueEmail = false;
  emailCount = 0;
  items = [];
  @ViewChild('f') addRequest: any;
  @ViewChild('request') request: any;
  selectedRequestId = '';
  constructor(
    private requestService: RequestService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getrequests();
  }
  getrequests() {
    this.requestService.getRequest().subscribe((response: any) => {
      console.log('response', response);
      if (response) {
        this.items = response.data;
      }
    });
  }

  getVotes() {
    this.requestService.getRequestVotes().subscribe((response: any) => {
      console.log('response', response);
      if (response) {
        this.items = response.data;
      }
    });
  }

  
  onSubmit() {
    if (this.Requestmodel) {
      console.log(this.Requestmodel);
      this.requestService.addReq(this.Requestmodel).subscribe((response: any) => {
        console.log('response', response);
        if (response) {
          this.toastrService.success('Request Details Add Successfully.', 'Success Message');
          this.getrequests();
          this.addRequest.reset();
          this.closeModalDialog();
        }
      })
    }
  }

  onVotesSubmit() {

    if (this.voteModel) {
      console.log(this.voteModel);
      this.voteModel.requestId = this.selectedRequestId;
      this.requestService.setRequestVotes(this.voteModel).subscribe((response: any) => {
        console.log('response', response);
        if (response) {
          this.toastrService.success('Vote Successfully.', 'Success Message');
          this.getrequests();
          this.request.reset();
          this.closeRequestModelDialog();
        }
      });
    }
  }

  openModalDialog() {
    this.addRequest.reset();
    this.display = 'block'; //Set block css
  }

  closeModalDialog() {
    this.addRequest.reset();
    this.display = 'none'; //set none css after close dialog
  }

  openRequestModelDialog(Id: string) {
    this.request.reset();
    this.selectedRequestId = Id;
    this.isUniqueEmail = false;
    this.displayRequest = "block";
  }

  closeRequestModelDialog() {
    this.request.reset();
    this.selectedRequestId = '';
    this.isUniqueEmail = false;
    this.displayRequest = "none";
  }

  CheckUniqueEmail() {
    this.isUniqueEmail = false;
    let inputEmail = this.voteModel.email;
    this.requestService.getVotesByEmail(inputEmail, this.selectedRequestId).subscribe((response: any) => {
      console.log('response--------->', response);
      if (response.length && response.length > 0) {
        this.isUniqueEmail = true;
      }
    });
  }

}
