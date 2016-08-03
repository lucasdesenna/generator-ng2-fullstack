export class Leaf {
  private label: string;
  private value: string;

  constructor(leafRecipe: any) {
    this.label = leafRecipe.label || '';
    this.value = leafRecipe.value || '';
  }
}
