import {
  Component,
  HostBinding,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { Tree } from './tree';
import { LeafComponent } from './leaf.component';
// import { PropagatorService } from './propagator.service';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

let module: any;

@Component({
    selector: 'leditor-tree',
    moduleId: module.id,
    host: {
      'class': 'forest-view_tree'
    },
    templateUrl: 'tree.component.html',
    styleUrls: [
      'tree.component.css'
    ],
    directives: [
      TreeComponent,
      LeafComponent,
      MD_BUTTON_DIRECTIVES
    ]
})

export class TreeComponent {
  private expanded: boolean = false;
  private subTreesActivity: boolean[] = [];

  @Input() tree: Tree;
  @Output('subTreeActivated$') activated: EventEmitter<any> = new EventEmitter<any>();
  @HostBinding('class.active') active: boolean = false;

  toggleSelf(): void {
    this.toggleActivity();
    this.toggleExpansion();
  }

  toggleExpansion(): void {
    this.expanded = !this.expanded;
    // console.log("expansion toggled");
  }

  toggleActivity(): void {
    this.active = !this.active;
    this.activated.emit({id: this.tree.id, activity: this.active});
    // console.log("activity toggled");
  };

  activate(): void {
    this.active = true;
    // console.log("activated");
  };

  deactivate(): void {
    this.active = false;
    // console.log("deactivated");
  };

  subTreeActivated(subTree: any): void {
    this.updateSubTreeActivity(subTree);

    if(!this.hasActiveSubTrees()) {
      this.toggleActivity();
    } else {
      this.deactivate();
    }
  };


  updateSubTreeActivity(subTree: any): void {
    this.subTreesActivity[subTree.id] = subTree.activity;
  };

  hasActiveSubTrees(): boolean {
    for(let sTA in this.subTreesActivity) {
      if(this.subTreesActivity[sTA] === true) {
        return true;
      }
    }

    return false;
  };

  hasSubTrees(): boolean {
    return this.tree.subTrees.length > 0;
  }

  hasLeafs(): boolean {
    return this.tree.leafs.length > 0;
  }

  isRoot(): boolean {
    return this.tree.path === '';
  }

  edit(event: Event): void {
    event.stopPropagation();
    console.log('edited');
  }

  delete(event: Event): void {
    event.stopPropagation();
    console.log('deleted');
  }

  drag(event: Event): void {
    event.stopPropagation();
    console.log('dragged');
  }

  get fullPath() {
    let fullpath = this.isRoot() ? this.tree.label : `${this.tree.path}.${this.tree.label}`;

    return fullpath;
  }
}
