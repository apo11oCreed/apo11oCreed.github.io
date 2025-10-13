import { component$, isDev } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet } from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import "normalize.css";
import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        {!isDev && (
          <link
            rel="manifest"
            href={`${import.meta.env.BASE_URL}site.webmanifest`}
          />
        )}
        <RouterHead />
      </head>
      <body lang="en">
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W79S8P"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
