import {
  Injectable,
  EventEmitter
} from '@angular/core';

@Injectable()
export class PropagatorService {
  public treeActivated$: EventEmitter<number> = new EventEmitter<number>();

  propagateActivation(treeId: number) {
    this.treeActivated$.emit(treeId);
  }
}
