import { Component, OnInit } from '@angular/core';
import { CausesService } from 'src/app/cause/causes.service';
import { ICause } from 'src/app/shared/interfaces/cause';

@Component({
  selector: 'app-cause-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private causesService: CausesService) { }
  
  get causes() {return this.causesService.causes;}

  

  ngOnInit() {
    this.causesService.load();
  }

  selectCauseHandler(cause: ICause) {
    this.causesService.selectCause(cause);
  }

}
