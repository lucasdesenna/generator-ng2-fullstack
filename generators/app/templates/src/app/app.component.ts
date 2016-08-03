import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

@Component({
    selector: '<%= shortName %>-app',
    moduleId: module.id,
    templateUrl: 'app.component.html',
    directives: [
      ROUTER_DIRECTIVES,
      MdIcon
    ],
    providers: [
      MdIconRegistry
    ]
})

export class AppComponent { }
