---
title: Basics
---

# Basics

- Immer nur eine Komponente pro Datei
- PascalCase für Komponenten-Dateien (= "Todo.vue", statt "todo.vue")
- Basis-Komponenten (= "dumb components", welche nur Daten anzeigen und keine Interaktion bereitstellen) sollten einen allgemeinen Prefix haben (vll. "Base", daraus ergibt sich dann "BaseButton.vue", etc.)
- Single-Use-Komponenten sollten ebenfalls einen allgemeinen Prefix haben (vll. "The", d.h. "TheSidebar.vue")
- Child-Komponenten, welche eng mit ihrem Parent verbunden sind, sollten als Prefix den Parent-Namen haben (d.h. "TodoList.vue" hat die Children "TodoListItem.vue" und "TodoListAddButton.vue")
- Attribute immer mit Leerzeichen versehen nach den Klammern (= erhöht die Lesbarkeit enorm!)

## Komponenten

Einheitliches Naming von Komponenten im DOM (= der Einfachheit halber überall kebab-case verwenden)

```html
<todo-list></todo-list>
<!-- or -->
<todo-list/>
```

Komponenten-Namen __niemals__ abkürzen

Komponenten mit mehreren Attributen sollten pro Zeile ein Attribut beinhalten (das ist mitunter schwer umzusetzen, auch wenn hierbei Plugins helfen, wie z.B. [prettier](https://github.com/prettier/prettier)).

```html
<todo-list foo="a" bar="b" baz="c"></todo-list>
<!-- vs -->
<todo-list 
	foo="a" 
	bar="b" 
	baz="c">
</todo-list>
```

## props / Properties

Property-Naming
- Javascript -> __camelCase__
- HTML -> __kebab-case__

```html
// bad
<todo-list title="Todos"></todo-list>

props: {
	title: String
}

// good
<todo-list title="Todos"></todo-list>

props: {
	title: String
}
```

Props sollten so detailliert wie möglich sein

```js
// okay for prototyping
Vue.component({
 props: ['status']
})

// good
Vue.component({
	props: {
		title: String
	}
})

// better
Vue.component({
  props: {
    title: {
      type: String,
      required: true,
      validator: (value) => ['syncing', 'synced', 'error'].includes(value); 
    }
  }
})
```

Properties niemals direkt in einer Child-Komponente bearbeiten/ändern.
- frei nach dem Motto 
> "kann man schon so machen, ist aber halt Kacke"
- Es sollte stattdessen das ".sync/emit" Pattern benutzt werden

::: tip 
Mit dem .sync/emit und required-props kann man sogar in seinen Dumb-Komponenten Interaktionen zulassen, und immernoch nur den Parents erlauben Actions zu dispatchen. (siehe dazu "Store - Actions")
:::

```js
Vue.component('TodoListItem', {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  template: `
    <span>
      {{ todo.text }}
      <button @click="$emit('delete')">
        X
      </button>
    </span>
  `
})
```

Weiteres Beispiel

```js
// Syntax 1 
<todo-list-item 
    :todo="todo" 
    @update:todo="val => todo = val">
</todo-list-item>

// Syntax 2 -> Syntax-Zucker für Syntax 1 (beide sind identisch)
<todo-list-item :todo.sync="todo"></todo-list-item>

<script>
  methods: {
    changeTodo: (newTodo) => {
      this.$emit('update:todo', newTodo); 
    }
  }
</script>
```

## data / Parameter

data() einer Komponente sollte eine Funktion sein (= ermöglicht die erneute Wiederverwendung von Komponenten)

```js
export default {
  data () {
    return {
      foo: 'bar'
    }
  }
}
```

## computed / Live-Parameter

computed Properties sollten in so kleine, einfache Teile wie möglich zerlegt werden

```js
// bad
computed: {
  price: function () {
    var basePrice = this.manufactureCost / (1 - this.profitMargin);
    return (basePrice - basePrice * (this.discountPercent || 0));
  }
}

// good
computed: {
  basePrice: function () {
    return this.manufactureCost / (1 - this.profitMargin);
  },
  discount: function () {
    return this.basePrice * (this.discountPercent || 0);
  },
  finalPrice: function () {
    return this.basePrice - this.discount;
  }
}
```

## v-for / Schleifen

v-for Schleifen sollten immer mit einem Key versehen werden (= ansonsten kann es zu ungewolltem Verhalten führen)

```html
<ul>
	<li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
</ul>
```

## Direktiven

Direktive-Shorthands, wenn möglich immer, oder garnicht benutzen (__ich bin für immer!__)

```html
<!-- bad -->
<input
  v-bind:value="newTodoText"
  :placeholder="newTodoInstructions"
  v-on:input="onInput"
  @focus="onFocus"
>

<!-- good -->
<input
  :value="newTodoText"
  :placeholder="newTodoInstructions"
  @input="onInput"
  @focus="onFocus"
>
```

Direktiven und Template-Expressions sollten die einfachst mögliche JavaScript-Syntax beinhalten.

```html
<!-- bad -->
<app-some-component @click="val => val.reduce((pv, cv) => {
      pv[cv.id] = cv;
      return pv; 
    }, {})">
</app-some-component>
{{ fullName.split(' ').map(function (word) {
        return word[0].toUpperCase() + word.slice(1)
      }).join(' ')

<!-- good -->
<template>
	<app-some-component @click="normalize"></app-some-component>
</template>

<script>
const normalizeData = (event) => event.target.value.reduce((pv, cv) => {
    pv[cv.id] = cv;
    return pv; 
  }, {})

const mangleWord = (val) => val.split(' ').map(function (word) {
      return word[0].toUpperCase() + word.slice(1)
    }).join(' '),

Vue.component({
  computed: {
    wordmangler: () => mangleWord(this.fullName),
  }, 
  methods: {
    normalize: (val) => normalizeData(val), 
 }
})
</script>
```