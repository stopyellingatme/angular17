import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';

type TodoState = {
  items: string[];
  title: string;
};

const initialState: TodoState = {
  items: [],
  title: 'To Do List',
};

export const TodoStore = signalStore(
  withState(initialState),
  withComputed((store) => ({
    count: computed(() => store.items().length),
  })),
  withMethods((store) => ({
    add(item: string) {
      patchState(store, { items: [...store.items(), item] });
    },
    update(item: string) {
      patchState(store, {
        items: store
          .items()
          .map((existingItem) => (existingItem === item ? item : existingItem)),
      });
    },
    remove(item: string) {
      patchState(store, {
        items: [...store.items().splice(store.items().indexOf(item), 1)],
      });
    },
    clear() {
      patchState(store, { items: [] });
    },
    init() {
      patchState(store, { items: ['item1', 'item2', 'item3'] });
    },
  })),
  withHooks({
    onInit(store) {
      store.init();
    },
    onDestroy(store) {
      console.log('count on destroy');
    },
  })
);
