---
title: Angular CLI Quickstart
image: /blog/angular-cli-quick-start/header.jpg
date: 2018-10-04
description: Schnell und einfach mit Angular und der Angular CLI starten.
---

# Installation von Angular CLI

Die Installation erfolgt mithilfe von [Node und npm](https://nodejs.org/).

```bash
npm install -g @angular/cli
```

Sobald die Installation abgeschlossen ist, können wir die Angular CLI benutzen um neue Applikationen zu erstellen.

# Ein neues Projekt erstellen

Um ein neues Angular-Projekt mithilfe der CLI zu erstellen, genügt folgendes Kommando:

```bash
ng new angular-cli-quickstart
```

Angular CLI erstellt die Basis-Projekt-Struktur und lädt alle benötigten npm-Pakete herunter (was mitunter ein kleines bisschen dauern kann.

## Weitere Flags für ng new

| Flag               | Standard-Wert | Beschreibung                                  |
| ------------------ | ------------- | --------------------------------------------- |
| `--directory`      | Projektname von `ng new`  | Ordnerpfad in welchem das Projekt erstellt werden soll |
| `--style`          | Der Standard-Style der verwendet werden soll |
| `--prefix`         | Der Präfix für alle erstellten Komponenten |
| `--routing`        | Erstellt ein Routing-Modul |

::: warning 
Test
:::

::: tip 
Test
:::

::: danger 
Test
:::

> das ist ein quote

::: vue
.
├── docs
│   ├── .vuepress _(**Optional**)_
│   │   ├── `components` _(**Optional**)_
│   │   ├── `theme` _(**Optional**)_
│   │   │   └── Layout.vue
│   │   ├── `public` _(**Optional**)_
│   │   ├── `styles` _(**Optional**)_
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── `templates` _(**Optional, Danger Zone**)_
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── `config.js` _(**Optional**)_
│   │   └── `enhanceApp.js` _(**Optional**)_
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
:::

## Nützliche Befehle

- `ng new` - Erstellt ein neues Projekt
- `ng generate` - Erstellen von neuen Komponenten, Routen, Service und Pipes
- `ng serve` - Lokale Entwicklung starten
