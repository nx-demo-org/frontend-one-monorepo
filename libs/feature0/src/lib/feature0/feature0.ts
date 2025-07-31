import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { examplePublishableLibrary } from '@nx-demo-org/example-javascript-library';
import {Subfeature0 } from '@nx-demo-org/subfeature0';
import {Subfeature1 } from '@nx-demo-org/subfeature1';

console.log(examplePublishableLibrary());
@Component({
  selector: 'lib-feature0',
  imports: [CommonModule, Subfeature0, Subfeature1],
  template: `<p>Feature0 works!</p><lib-subfeature0></lib-subfeature0><lib-subfeature1></lib-subfeature1>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Feature0 {
}
