import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { examplePublishableLibrary, toTitleCase, slugify } from '@nx-demo-org/example-javascript-library';
import { Feature0 } from '@nx-demo-org/feature0';
import { Feature1} from '@nx-demo-org/feature1';
@Component({
  imports: [NxWelcome, RouterModule, Feature0, Feature1],
  selector: 'app-root',
  template: `<app-nx-welcome></app-nx-welcome> <lib-feature0></lib-feature0><lib-feature1></lib-feature1> <router-outlet></router-outlet>`,
  styles: ``,
})
export class App {
  protected title = toTitleCase(examplePublishableLibrary());
  protected slug = slugify(examplePublishableLibrary());
}
