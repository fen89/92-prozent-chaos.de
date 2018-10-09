---
category: Angular
tags:
    - Angular CLI
title: Angular CLI Quickstart
image: /blog/angular-cli-quick-start/header.jpg
date: 2018-10-04
description: Schnell und einfach mit Angular und der Angular CLI starten.
---

## Installation von Angular CLI

Die Installation erfolgt mithilfe von [Node und npm](https://nodejs.org/).

```bash
npm install -g @angular/cli
```

Sobald die Installation abgeschlossen ist, können wir die Angular CLI benutzen um neue Applikationen zu erstellen.

## Ein neues Projekt erstellen

Um ein neues Angular-Projekt mithilfe der CLI zu erstellen, genügt folgendes Kommando:

```bash
ng new angular-cli-quickstart
```

Angular CLI erstellt die Basis-Projekt-Struktur und lädt alle benötigten npm-Pakete herunter (was mitunter ein kleines bisschen dauern kann. Die Standard-Einstellungen der CLI sind aber meist nicht optimal. Ich arbeite statt mit `css` lieber mit `scss`, und hätte auch gerne ein Routing-Module erstellt. Folgendes Kommando erfüllt diese zusätzlichen Anforderungen:

```bash
ng new angular-cli-quickstart --style scss --routing true
```

### Weitere Flags für ng new

| Flag               | Standard-Wert | Beschreibung                                  |
| ------------------ | ------------- | --------------------------------------------- |
| `--directory`      | Projektname von `ng new`  | Ordnerpfad in welchem das Projekt erstellt werden soll |
| `--style`          | `css` | Der Standard-Style der verwendet werden soll |
| `--prefix`         | `app` | Der Präfix für alle erstellten Komponenten |
| `--routing`        | `false` | Erstellt ein Routing-Modul |

## Applikation starten

Jetzt fehlt noch ein letzter Befehl, damit die neue Anwendung mitsamt Development-Server gestartet werden kannn:

```bash
cd angular-cli-quickstart
ng serve --open
```
Der Befehl `ng serve` startet den Entwicklungsserver (automatischer Build-Vorgang bei Dateiänderungen innerhalb des Projekts inklusive!). Das Flag `--open` bzw einfach nur `-o` öffnet die Applikation danach direkt in einem neuen Browser-Fenster.

![App works](/blog/angular-cli-quick-start/app-works.png)

Wenn diese Seite in einem neuen Browserfenster geöffnet wird hat alles geklappt.

<!-- 
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
- `ng serve` - Lokale Entwicklung starten -->
