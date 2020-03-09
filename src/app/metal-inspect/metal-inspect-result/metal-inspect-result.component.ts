import { Component, Input } from '@angular/core';
import { MetalResultModel } from '../metal-result.model';

@Component({
  selector: 'app-metal-inspect-result',
  templateUrl: './metal-inspect-result.component.html'
})
export class MetalInspectResultComponent {

  @Input() metalInspectResult: MetalResultModel[] = [];

  constructor() { }

}
