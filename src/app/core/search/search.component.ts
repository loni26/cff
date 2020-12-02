import { ResearchService } from './../services/research/research.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  title: string = 'CFF Mobile PWA';

  form: FormGroup;
  constructor(
    private _api: ResearchService,
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

}
