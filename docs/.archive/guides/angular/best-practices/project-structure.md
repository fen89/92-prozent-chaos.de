---
title: Projekt-Struktur
---

# Projekt-Struktur

## Basis

``` 
app
- app.component.html
- app.component.ts
- app.component.scss
- app.module.ts
```

## Kleine, einfache Anwendung

- Flat
- nur Komponenten in eigenen Ordnern

```
app
+ todo-list
-- todo-list.component.html
-- todo-list.component.ts
-- todo-list.component.scss
+ todo-list-item
-- todo-list-item.component.html
-- todo-list-item.component.ts
-- todo-list-item.component.scss
- todo.service.ts
- todo.model.ts
- app-routes.ts
- app.component.html
- app.component.ts
- app.component.scss
- app.module.ts
```

## Mittelgroße Anwendung

- Einsatz von Feature-Modulen (Vorteil: Nachladen von Code, nur wenn er gebraucht wird, möglich → Lazy Loading)
- Einsatz eines Shared-Moduls (alles was von mehr als einem Feature-Module genutzt wird)

```
app
+ todo
++ todo-list
--- todo-list.component.ts
++ todo-list-item
--- todo-list-item.component.ts
++ shared
--- todo.model.ts
--- todo.service.ts
--- todo-button.component.ts
-- todo.component.ts
-- todo-routing.module.ts
-- todo.module.ts
+ settings
-- settings.component.ts
-- settings.service.ts
-- settings-routing.module.ts
-- settings.module.ts
+ shared
-- shared.module.ts
-- text-filter.component.ts
-- text-filter.service.ts
- app-routes.ts
- app.component.ts
- app.module.ts
```

## Große Anwendung (ohne Store)

```
app
+ core
++ authentication
--- authentication.service.ts
++ http
--- api.service.ts
++ guards
--- auth.guard.ts
--- no-auth.guard.ts
--- admin-guard.ts
++ interceptors
--- api-prefix.interceptor.ts
--- error-handler.interceptor.ts
--- http.token.interceptor.ts
++ services
--- logger.service.ts
--- local-storage.service.ts
++ header
--- header.component.ts
++ footer
--- footer.component.ts
-- core.module.ts
 
+ modules
++ login
+++ components
+++ services
---- login.service.ts
+++ pages
---- login.component.ts
--- login.routes.ts
--- login.module.ts
++ admin
+++ components
---- user-list.component.ts
---- user-detail.component.ts
---- user-create.component.ts
---- user-edit.component.ts
---- settings-list.component.ts
+++ modals | dialogs
---- user-create-dialog.component.ts
---- user-edit-dialog.component.ts
+++ services
---- user.service.ts
---- settings.service.ts
+++ pages
---- admin.component.ts
---- settings.component.ts
---- user.component.ts
--- admin.routes.ts
--- admin.module.ts
 
+ shared
++ components
+++ loader
---- loader.component.ts
+++ buttons
++++ favorite-button
----- favorite-button.component.ts
++++ collapse-button
----- collapse-button.component.ts
++ directives
--- auth.directive.ts
++ pipes
--- capitalize.pipe.ts
--- safe.pipe.ts
++ models
--- server-response.ts
-- shared.module.ts
 
+ configs
-- app-settings.config.ts
-- dt-norwegian.config.ts
 
app.component.ts
app.routes.ts
app.module.ts
```

Große Anwendung (mit Store)

```
app
+ core
[...]
 
+ modules
[...]
++ admin
+++ store
---- actions.ts
---- state.ts
---- reducer.ts
---- selectors.ts
---- effects.ts
+++ components
[...]
+++ modals | dialogs
[...]
+++ services
[...]
+++ pages
[...]
--- admin.routes.ts
--- admin.module.ts
 
+ shared
++ components
[...]
++ directives
[...]
++ pipes
[...]
++ models
[...]
-- shared.module.ts
 
+ configs
[...]
 
app.component.ts
app.routes.ts
app.module.ts
```

### Referenzen

- [Angular Styleguide](https://angular.io/guide/styleguide)
- [Choosing a highly scalable folder structure for angular](https://itnext.io/choosing-a-highly-scalable-folder-structure-in-angular-d987de65ec7)
- [Angular Folder Structure](https://medium.com/@motcowley/angular-folder-structure-d1809be95542)
- [Angular Core vs Shared Modules](https://blog.chai-jay.com/angular-core-vs-shared-modules/)
- [ngx-rocket Starter Kit](https://github.com/ngx-rocket/starter-kit/tree/master/src)
- [Angular Real World example app](https://github.com/gothinkster/angular-realworld-example-app)