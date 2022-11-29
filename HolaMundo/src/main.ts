import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { holaMundoModule } from "./hola-mundo/hola-mundo.module";


platformBrowserDynamic().bootstrapModule(holaMundoModule)
  .catch(err => console.error(err));
