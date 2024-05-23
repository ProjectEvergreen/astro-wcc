# astro-wcc

An [Astro](https://astro.build/) integration for SSR Web Components using [WCC](https://github.com/ProjectEvergreen/wcc).

## Usage

1. Install the plugin into your Astro project
    ```sh
    $ npm i astro-wcc
    ```
1. Then add it to your Astro configuration file
    ```js
    import { defineConfig } from 'astro/config';
    import astroWcc from 'astro-wcc';

    export default defineConfig({
      integrations: [ astroWcc() ]
    });
    ```

## Caveats

- Currently assumes `<x-${tagName}>` maps to _src/components/${tagName}.js_
- Client hints (e.g. `<x-greeting client:visible>`) are not supported