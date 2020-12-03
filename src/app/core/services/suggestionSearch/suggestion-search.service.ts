import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuggestionSearchService {
 

  constructor(private _http: HttpClient) { }

  async autoComplete(value: string){
    
    const url = `https://timetable.search.ch/api/completion.fr.json?term=${value}`;
    const result = await this._http.get(url).toPromise().catch(err => err);
    return result;
  }
}
