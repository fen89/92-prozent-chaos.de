---
title: Angular CLI Quickstart
image: /blog/angular-cli-quick-start/header.jpg
date: 2018-10-04
description: Schnell und einfach mit Angular und der Angular CLI starten.
---

# Installation von Angular CLI

Die Installation erfolgt über einen Paket-Manager, wahlweise [npm](https://www.npmjs.com/): `npm i -g @angular/cli` oder [yarn](https://yarnpkg.com): `yarn add global @angular/cli`.


# Neues Angular-Projekt erstellen

Der Befehl `ng new [project-name]` erstellt im aktuellen Ordner ein neues Projekt.

| x | x |


## Nützliche Befehle

- `ng new` - Erstellt ein neues Projekt
- `ng generate` - Erstellen von neuen Komponenten, Routen, Service und Pipes
- `ng serve` - Lokale Entwicklung starten

### TEST 3

hallo 3

#### TEST 4

hallo 4

```js
// pizzas.action.ts
export const LOAD_PIZZAS = '[Products] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success';

export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;
  constructor(public payload: any) {}
}

export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(public payload: Pizza[]) {}
}
```