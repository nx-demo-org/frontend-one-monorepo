import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { examplePublishableLibrary } from '@nx-demo-org/example-javascript-library';
import { Subfeature0 } from '@nx-demo-org/subfeature0';
import { Subfeature1 } from '@nx-demo-org/subfeature1';

console.log(examplePublishableLibrary());
@Component({
  selector: 'lib-feature0',
  imports: [CommonModule, Subfeature0, Subfeature1],
  template: `<p>Feature0 works!</p><lib-subfeature0></lib-subfeature0><lib-subfeature1></lib-subfeature1>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Feature0 implements OnInit {
  title: string;

  constructor() {
    this.title = 'Feature0';
  }

  ngOnInit(): void {
    console.log(this.title);
  }
}
