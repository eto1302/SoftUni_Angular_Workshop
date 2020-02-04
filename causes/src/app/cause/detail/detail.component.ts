import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ICause } from 'src/app/shared/interfaces/cause';
import { CausesService } from 'src/app/cause/causes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cause-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @ViewChild('amountInput', { static: false }) amountInput: ElementRef<HTMLInputElement>;


  get color() {
    if (this.selectedCause.collectedAmount >= this.selectedCause.neededAmount) {
      return 'green';
    }
    if (
      this.selectedCause.collectedAmount < 2 * (this.selectedCause.neededAmount / 3) &&
      this.selectedCause.collectedAmount > (this.selectedCause.neededAmount / 3)
    ) {
      return 'yellow';
    }
    return 'red';
  }



  get selectedCause() { return this.causesService.selectedCause; }

  constructor(
    private causesService: CausesService,
    private activatedRoute: ActivatedRoute) {
  }


  ngOnInit() {
    this.causesService.load(this.activatedRoute.snapshot.params.id).subscribe(() => {
      this.causesService.selectCause(this.causesService.causes[0]);

    })
  }

  makeDonationhandler() {
    this.causesService.donate(+this.amountInput.nativeElement.value).subscribe(() => {
      this.causesService.load();
      this.amountInput.nativeElement.value = '';
    });
  }

}
