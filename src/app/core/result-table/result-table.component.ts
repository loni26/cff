import { ResearchService } from './../services/research/research.service';
import { Component, OnInit } from '@angular/core';
import {first } from 'rxjs/operators';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss']
})
export class ResultTableComponent implements OnInit {

  result:any = null;

  constructor(private _api: ResearchService) { }

  async ngOnInit() {
    const result = await this._api.resultSearch$.pipe(first()).toPromise()
    console.log(result);
    this.result = result;
  }

}
