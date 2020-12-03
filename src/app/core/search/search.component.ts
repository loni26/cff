import { SuggestionSearchService } from './../services/suggestionSearch/suggestion-search.service';
import { ResearchService } from './../services/research/research.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  title: string = 'CFF Mobile PWA';

  form: FormGroup;
  cityFrom: string;
  cityTo: string;
  

  constructor(
    private _api: ResearchService,
    private _api2: SuggestionSearchService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      from: new FormControl('Lausanne'),
      to: new FormControl('Berne')
    });
  }

  async search(){
    if(!this.form.valid) return;
    console.log(this.form.value);
    await this._api.fromTo(this.form.value);
    const result = await this._api.resultSearch$.pipe(first()).toPromise();
    console.log('result: ', result);
    if(!result?.connections) return;
    this._router.navigate(['result']);
    }

    async getCity (divId: string){
      const startLen = 2;
      if(divId ==='from'){
        const term = this.form.value.from;
        
        if(term.length>=startLen){
          console.log(term);
          this.cityFrom = await this._api2.autoComplete(term);
        }else {
          this.cityFrom = null; 
        }
      }else {
        const term = this.form.value.to;
        if(term.length >= startLen){
          this.cityTo = await this._api2.autoComplete(term);
        } else {
          this.cityTo = null;
        }
      }
    } 

    setCity(name: string, divId: string){
      if (divId === 'from') {
        this.form.patchValue({['from']:name})
        this.cityFrom = null;
      }

      if (divId === 'to') {
        this.form.patchValue({['to']: name})
        this.cityTo = null;
      }
    }

}
