---
title: Aufbau einer Komponente
---

# Aufbau einer Komponente

::: danger Achtung!
Ist momentan sehr unübersichtlich hier, sollte ich mal aufräumen! :'D
:::

- Komponenten-Optionen-Sortierung (= ermöglicht einfaches Code-Browsen)
- Seiten-Effekte (Interaktionen ausserhalb einer Komponente werden getriggert) -- el
- Global -- name -- parent
- Komponenten-Typ -- functional
- Template-Modifikationen -- delimiters -- comments
- Template Abhängigkeiten -- components -- directives -- filters
- Erweiterungen -- extends -- mixins
- Interface -- model -- props
- Lokal -- data -- computed
- Events -- watch
- Lifecycle-Events -- beforeCreate -- created -- beforeMount -- mounted -- beforeUpdate -- updated -- activated -- deactivated -- beforeDestroy -- destroyed
- Nicht-reaktive Properties -- methods

```js
export default {
	// 1. side-effects
	el: string | HTMLElement,
	// 2. global
	name: 'MyChildComponent',
	parent: 'MyParentComponent',
	// 3. functional
	functional: boolean,
	// 4. template mods
	delimiters: Array<string>,
	// 5. template dependencies
	components: { MyChildItemComponent },
	directives: { MyDirective },
	filters: { MyEpicFilter },
	// 6. composition
	extends: { .. },
	mixins: { ... },
	// 7. interface
	model: ...,
	props: { ... },
	// 8. local state
	data: { ... },
	computed: { ... },
	// 9. events
	watch: { ... },
	created() { ... },
	mounted() { ... },
	updated() { ... },
	destroyed() { ... },
	// 10. non reative props
	methods: { ... }
 }
 ```

## Beispiel

```html
<template>
    <div v-if="hasTodos">
        <p>Noch {{ totalItems }} Todos zu erledigen<p>
        <ul>
            <li v-for="todo in items" :key="todo.id" class="todo-list-item">
            {{ item.text }}
        </li>
        </ul>
    </div>
</template>


<script>
export default {
  name: "TodoList",
  components: {
    TodoListItem,
    TodoListAddButton
  },
  filters: {
    currency
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data: {
    title: "Todo-Liste"
  },
  computed: {
    itemsTotal: () => this.items.length,
    hasTodos: () => this.itemsTotal > 0
  },
  watch: {
    items: function(val, oldVal) {
      /* ... */
    }
  },
  created() {
    // der Aufruf hier ist btw hart sinnlos, denn wir übergeben "items" schon als prop eines Parents
    // und somit würden wir das Mutation-Principle verletzten, weil wir eine Property direkt modifieren!
    axios.get("/api/todos").then(response => (this.items = response.data));
  }
};
</script>

// scoped = nur in dieser Komponente gültig
<style scoped>
.todo-list-item {
  color: #3f3f3f;
}
</style>
```