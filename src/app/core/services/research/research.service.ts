import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResearchService {

  _resultSearch = new BehaviorSubject(null);
  resultSearch$ = this._resultSearch.asObservable();

  constructor(private _htpp: HttpClient) { }

  async fromTo (data: {from: string, to: string}) {
    const url = `https://timetable.search.ch/api/route.fr.json?from=${data.from}&to=${data.to}&limit=1`;
    const result = await this._htpp.get(url).toPromise().catch(err => err);
    this._resultSearch.next(result);
  }

}
