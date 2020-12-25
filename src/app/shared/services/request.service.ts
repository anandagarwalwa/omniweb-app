import { Injectable } from '@angular/core';
import { RequestModel } from 'src/app/shared/models/request-model';
import { v4 as uuidv4 } from 'uuid';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private apiService: ApiService
  ) { }

  addReq(data: RequestModel) {
    debugger
    return this.apiService.apiCaller(this.apiService.postMethod, this.apiService.APIREQ, data);
  }

  getRequest() {
    //return localStorage.getItem('request');
    return this.apiService.apiCaller(this.apiService.postMethod, this.apiService.APIREQWithVotesCount);
  }
  setRequestVotes(data) {
    return this.apiService.apiCaller(this.apiService.postMethod, this.apiService.APIVOT, data);
  }

  getRequestVotes() {
    return this.apiService.apiCaller(this.apiService.getMethod, this.apiService.APIVOT);
  }

  getVotesByEmail(email: string, reqID: string) {

    var votes = {
      'email': email,
      'requestId': reqID
    }
    return this.apiService.apiCaller(this.apiService.postMethod, this.apiService.APIGETVOTEBYEMAIL, votes)
  }
 
}
