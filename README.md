# astro-wcc

An [Astro](https://astro.build/) integration for SSR Web Components using [WCC](https://www.wcc.dev).

> See this [demonstration repo](https://github.com/thescientist13/astro-wcc) for an example of using this plugin.

## Usage

1. Install the plugin into your Astro project
    ```sh
    $ npm i -D @projectevergreen/astro-wcc
    ```
1. Then add it to your Astro configuration file
    ```js
    import { defineConfig } from 'astro/config';
    import astroWcc from '@projectevergreen/astro-wcc';

    export default defineConfig({
      integrations: [ astroWcc() ]
    });
    ```
1. You can now use a component in an Astro file
    ```html
    <!-- src/pages/index.astro -->
    <html lang="en">
      <head>
        <script src="../components/greeting.js"></script>
      </head>
      <body>
        <x-greeting></x-greeting>
      </body>
    </html>
    ```

## Caveats

- Currently assumes `<x-${tagName}>` maps to _src/components/${tagName}.js_
- Client hints (e.g. `<x-greeting client:visible>`) are not supported