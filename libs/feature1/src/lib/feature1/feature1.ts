import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subfeature0 } from '@nx-demo-org/subfeature0';
import { Subfeature1 } from '@nx-demo-org/subfeature1';


@Component({
  selector: 'lib-feature1',
  imports: [CommonModule, Subfeature0, Subfeature1],
  template: `<p>Feature1 works!</p><lib-subfeature0></lib-subfeature0><lib-subfeature1></lib-subfeature1>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Feature1 {}
