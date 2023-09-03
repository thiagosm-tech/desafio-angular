import { Component, Input } from '@angular/core';

@Component({
  selector: 'step-progress-bar',
  templateUrl: './step-progress-bar.component.html',
  styleUrls: ['./step-progress-bar.component.scss']
})
export class StepProgressBarComponent {

  @Input() stepList!: string[];
  @Input() currentStep: number = 0;

}
