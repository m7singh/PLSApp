import { Injectable } from '@angular/core'
import { ISession } from '../shared/property.model'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx';

@Injectable()
export class VoterService {

  constructor(private http: Http) {}

  deleteVoter(propertyId: string, session: ISession, voterName: string) {
    session.voters = session.voters.filter(voter => voter !== voterName);

    this.http.delete(`/api/properties/${propertyId}/sessions/${session.id}/voters/${voterName}`).catch(this.handleError).subscribe();
  }

  addVoter(propertyId: string, session: ISession, voterName: string) {
    session.voters.push(voterName);

    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    let url = `/api/properties/${propertyId}/sessions/${session.id}/voters/${voterName}`;
    this.http.post(url, JSON.stringify({}), options).catch(this.handleError).subscribe();
  }

  userHasVoted(session: ISession, voterName: string) {
    return session.voters.some(voter => voter === voterName);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}