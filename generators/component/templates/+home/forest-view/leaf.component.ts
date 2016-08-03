import {
  Component,
  HostBinding,
  Input
} from '@angular/core';

import { Leaf } from './leaf';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
    selector: 'leditor-leaf',
    moduleId: module.id,
    // host: {
    //   'class': 'forest-view_tree'
    // },
    templateUrl: 'leaf.component.html',
    styleUrls: [
      'leaf.component.css'
    ],
    directives: [
      MD_BUTTON_DIRECTIVES
    ]
})

export class LeafComponent {
  // private expanded: boolean = false;
  // private id: number;
  //
  // @HostBinding('class.active') active: boolean = false;
  @Input() leaf: Leaf;
  //
  // toggleExpansion(): void {
  //   this.expanded = !this.expanded;
  // }
  //
  // toggleSelf(): void {
  //   this.toggleActive();
  //   this.toggleExpansion();
  // }
  //
  // toggleActive(): void {
  //   this.active = !this.active;
  //   // console.log("toggled");
  // };
  //
  // deactivate(): void {
  //   this.active = false;
  //   // console.log("deactivated");
  // };
  //
  // hasSubTrees(): boolean {
  //   return this.tree.subTrees.length > 0;
  // }
  //
  // hasLeafs(): boolean {
  //   return this.tree.leafs.length > 0;
  // }
  //
  // isRoot(): boolean {
  //   return this.tree.path === '';
  // }
  //
  // edit(event: UIEvent): void {
  //   event.stopPropagation();
  //   console.log('edited');
  // }
  //
  // delete(event: UIEvent): void {
  //   event.stopPropagation();
  //   console.log('deleted');
  // }
  //
  // drag(event: UIEvent): void {
  //   event.stopPropagation();
  //   console.log('dragged');
  // }
  //
  // get fullPath() {
  //   let fullpath = this.isRoot() ? this.tree.label : `${this.tree.path}.${this.tree.label}`;
  //
  //   return fullpath;
  // }
}
