import { Leaf } from './leaf';

export class Tree {
  public id: number;
  public label: string;
  public path: string;
  public subTrees: Tree[];
  public leafs: Leaf[];

  constructor(
    treeRecipe: any
  ) {
    let subTrees = treeRecipe.subTrees || [];
    let leafs = treeRecipe.leafs || [];

    this.id = treeRecipe.id;
    this.label = treeRecipe.label || '';
    this.path = treeRecipe.path || '';
    this.subTrees = subTrees.map(Tree.compileSubTrees);
    this.leafs = leafs.map(Tree.compileLeafs);
  }

  static compileSubTrees(subTreeRecipe: any) {
    return new Tree(subTreeRecipe);
  }

  static compileLeafs(leafRecipe: any) {
    return new Leaf(leafRecipe);
  }
}
