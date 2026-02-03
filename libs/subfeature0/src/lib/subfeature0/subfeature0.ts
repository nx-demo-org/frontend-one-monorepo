import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-subfeature0',
  imports: [CommonModule],
  template: `<p>Subfeature0 works with an updated message!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Subfeature0 {
  version = '1.0.0';
}
