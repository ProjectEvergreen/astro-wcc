export default function astroWCC() {
  return {
    name: "wcc-ssr",
    hooks: {
      "astro:config:setup": ({ updateConfig, addRenderer, injectScript }) => {
        addRenderer({
          name: "astro-wcc",
          serverEntrypoint: "@projectevergreen/astro-wcc/server.js"
        });
      }
    }
  }
}