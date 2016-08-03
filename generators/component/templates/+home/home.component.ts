import { Component, OnInit } from '@angular/core';

import { Tree } from './forest-view/tree';
import { GlossaryService } from '../shared/services/glossary.service';
import { ForestViewComponent } from './forest-view/forest-view.component';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

let module: any;

@Component({
    selector: 'leditor-home',
    moduleId: module.id,
    templateUrl: 'home.component.html',
    directives: [
      ForestViewComponent,
      MD_CARD_DIRECTIVES
    ],
    providers: [
      GlossaryService
    ]
})

export class HomeComponent implements OnInit {
  glossary: Tree[] = [];

  constructor(private glossaryService: GlossaryService) { }

  ngOnInit() {
    this.glossaryService.getGlossary()
      .then((glossary: Tree[]) => this.glossary = glossary);
  }
}
