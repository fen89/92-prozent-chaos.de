---
title: ngrx (Store Management)
---

# ngrx 

- Pi x Daumen - Regelung:

> Sobald eine Aktion irgendetwas mit HTTP zu tun hat, kommt Sie in den Store

- Referenzen:
    - [ngrx Tipps & Tricks](https://blog.angularindepth.com/ngrx-tips-tricks-69feb20a42a7)

## Actions

- Für jede Action eine eigene Klasse (= TypeSafe)
- Alle Actions, welche zusammengehören, in dieselbe Datei
- kurze Namen für Klassen und Konstanten verwenden

```ts
// todo-actions.ts
import { Action } from '@ngrx/store';

export const LOAD = '[Todo] Load';
export const LOAD_SUCCESS = '[Todo] Load Success';
export const LOAD_FAILED = '[Todo] Load Failed';

export class LoadTodo implements Action {
	readonly type = LOAD_TODO;
	constructor(readonly payload: { id: string }) {}
}

export class LoadTodoSuccess implements Action {
	readonly type = LOAD_SUCCESS;
	constructor(readonly payload: { item: TodoResult }) {}
}

export class LoadTodoFailed implements Action {
	readonly type = LOAD_FAILED;
}
```

```ts reducer.ts
// reducer.ts
import * from './todo-actions';

export function todoReducer(state = INITIAL_STATE, action: TodoActions) {
	switch (action.type) {
		case LOAD_SUCCESS:
			return { ...state, item: action.payload };
		default:
			return state;
	}
}
```

Die Properties des Payloads immer expizit benennen (trägt enorm zur Lesbarkeit bei)

```ts
constructor(readonly payload: string) { }
// vs.
constructor(readonly payload: { message: string }) { }
```

Actions gruppieren

```ts
export const TodoActionTypes = LoadTodo | CreateTodo | UpdateTodo;
```

Actions nach Typ importieren

```ts
import * as todoActions from './todo.actions';
```

## Effects

Methode `toPayload` implementieren -> frei nach dem [DRY-Prinzip](https://de.wikipedia.org/wiki/Don%E2%80%99t_repeat_yourself)

```ts
const toPayload = <T>(action: { payload: T }) => action.payload;

// can be used in the effects pipeline
@Effect()
  public errors$: Observable<Action> = this.actions$
    .pipe(
        ofType(LOG_ERROR),
        map(toPayload),
        /* ... */
     )
```

(HTTP/ API)-Daten immer innerhalb eines Effects laden

```ts
@Effect()
loadTodo$ = this.actions$.pipe(
	ofType<todoActions.LoadTodo>(todoActionTypes.LOAD)
	map(toPayload)
	switchMap(() => 
		this.todoService.getTodoById(payload.id).pipe(
			map(todo => new todoActions.LoadSuccess(todo))
		)
	)
)
```

Error Handling

```ts
@Effect()
loadTodo$ = this.actions$.pipe(
	ofType<todoActions.LoadTodo>(todoActionTypes.LOAD)
	map(toPayload)
	switchMap(() => 
		this.todoService.getTodoById(payload.id).pipe(
			map(todo => new todoActions.LoadSuccess(todo)),
			catchError(err => of(todoActions.LoadFailed()))
		)
	)
)
```

## Reducers

```ts
/* TODO */
```

