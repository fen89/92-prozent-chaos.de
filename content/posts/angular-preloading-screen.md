---
title: Create a custom preloading screen in Angular
date: '04/01/2020'
description: |
  I'm  quite sure that you know these kind of situations. You opened a web app and you are staring at a completely white screen - and nothing seems to happen. 
tags: 
  - Angular
category: Angular
draft: false
---

I'm  quite sure that you know these kind of situations. You opened a web app and you are staring at a completely white screen - and nothing seems to happen. 

Wouldn't it be better if some kind of motion would tell you, the user, that something is happening in the background to get things ready for work?

The best method is to place the loading animations to our `index.html` inside the `<app-root></app-root>`, because Angular will remove everything inside the apps mounting pount.

```html{}[index.html]
<app-root>Loading...</app-root>
```

To overcome the fact, that the styles need to be loaded if used from included sources we will place the used styles inside the `app-root` element as well.

```html{}[index.html]
<app-root>
  <style>
    app-root {
      color: purple;
    }
  </style>
  I'm a purple loading message!
</app-root>
```

The following example uses one of Angular's built in provider `APP_INITIALIZER` ([reference](https://angular.io/api/core/APP_INITIALIZER)). 

An `APP_INITIALIZER` is a Dependency Injection token which can be used to provide one or more (use `multi` inside the `providers` registration).

```ts{5-8}[app.module.ts]
export function initApp() {
  return () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // do whatever you like, 
        // e.g. load specific app data from the server
        resolve();
      }, 3000);
    });
  };
}

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: initApp,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

For the loading animation we are using a spinner from [Spin Kit](https://tobiasahlin.com/spinkit/).

```html{}[index.html]
<app-root>
  <style>
    .spinner {
      width: 40px;
      height: 40px;
      background-color: #333;

      margin: 100px auto;
      -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
      animation: sk-rotateplane 1.2s infinite ease-in-out;
    }

    @-webkit-keyframes sk-rotateplane {
      0% {
        -webkit-transform: perspective(120px);
      }

      50% {
        -webkit-transform: perspective(120px) rotateY(180deg);
      }

      100% {
        -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg);
      }
    }

    @keyframes sk-rotateplane {
      0% {
        transform: perspective(120px) rotateX(0deg) rotateY(0deg);
        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
      }

      50% {
        transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
        -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
      }

      100% {
        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
        -webkit-transform: perspective(120px) rotateX(-180deg)
          rotateY(-179.9deg);
      }
    }
  </style>

  <div class="spinner"></div>
</app-root>

```

And thats all - users do have a nice loading screen while the app bootstraps and loads in the background.

![Loading Spinner](/blog/angular-preloading-screen/loading-animation.gif)
<!-- I built a small [demo on stackblitz](https://stackblitz.com/edit/angular-znpvkc?file=src/index.html) as well where you can try it out by yourself. -->
