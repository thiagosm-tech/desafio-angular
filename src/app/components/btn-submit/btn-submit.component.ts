import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'btn-submit',
  templateUrl: './btn-submit.component.html',
  styleUrls: ['./btn-submit.component.scss']
})
export class BtnSubmitComponent implements OnInit {

  isLoading = false;
  isLoading$!: Observable<any>;

  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.getIsLoading();

  }

  getIsLoading() {
    this.isLoading$ = this.loaderService.loading$.pipe(
      map(res => this.isLoading = res)
    );
  }
}
