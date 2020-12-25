import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public APIREQ = environment.apiUrlRequests + "/requests/";
  public APIVOT = environment.apiUrlRequests + "/votes/"
  public APIREQWithVotesCount = environment.apiUrlRequests + "/requests/getVotesCount";
  public APIGETVOTEBYEMAIL = environment.apiUrlRequests + "/votes/getVoteByEmail"

  public getMethod = 'get';
  public postMethod = 'post';
  public putMethod = 'put';
  public deleteMethod = 'delete';

  public apiCaller(type: string, url: string, data?: any): any {
    if (type === 'get') {
      return this.get(url);
    }
    else if (type === 'post') {
      return this.post(url, data);
    }
    else if (type === 'put') {
      return this.put(url, data);
    }
    else if (type === 'delete') {
      return this.delete(url, data);
    }
  }

  private post(url: string, data: any): any {
    return this.http.post(url, data).pipe(
      tap(result => {
        return result;
      })
    );
  }
  private get(url: string): any {
    return this.http.get(url).pipe(
      tap(result => {
        return result;
      })
    );
  }

  private put(url: string, data: any): any {
    return this.http.put(url, data).pipe(
      tap(result => {
        return result;
      })
    );
  }

  private delete(url: string, data: any): any {
    const options = {
      body: data,
    };
    return this.http.delete(url).pipe(
      tap(result => {
        return result;
      })
    );
  }
}
