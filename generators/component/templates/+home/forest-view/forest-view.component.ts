import {
  Component,
  Input,
  HostListener,
  OnInit
} from '@angular/core';

// import { PropagatorService } from './propagator.service';
import { Tree } from './tree';
import { TreeComponent } from './tree.component';

let module: any;

@Component({
    selector: 'leditor-forest-view',
    moduleId: module.id,
    templateUrl: 'forest-view.component.html',
    styleUrls: [
      'forest-view.component.css'
    ],
    directives: [
      TreeComponent
    ]
})

export class ForestViewComponent implements OnInit {
  // private treeIndex: [];

  @Input() forest: Tree[];
  @HostListener('treeActivated', ['$event'])
    updateForest(treeId: number) {
      console.log(this.findTreeById(treeId));
    };

  findTreeById(targetId: number, forest: Tree[] = this.forest): any {
    for(let tree in forest) {
      if(forest[tree].id === targetId) {
        return forest[tree];
      } else {
        this.findTreeById(targetId, forest[tree].subTrees);
      }
    }
  }

  ngOnInit() {
    // setTimeout(() => {
    //   console.log(this.findTreeById(1));
    //
    // }, 1000);
    // console.log(ForestViewComponent.flattenForest(this.forest));
  }

  // buildTreeIndex(forest: Tree[]) {
  //   let treeIndex: any[];
  //
  //   forest.map((tree, index) => {
  //     treeIndex[tree.id] =
  //
  //   });
  // }

  // constructor(propagatorService: PropagatorService) {
  //   this.propagatorService = propagatorService;
  // }
}
