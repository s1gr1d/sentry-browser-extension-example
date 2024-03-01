# Browser Extension with invalid Sentry usage

This is a test application for the following PR: https://github.com/getsentry/sentry-javascript/pull/10844

`Sentry.init` should [not be used in browser extensions](https://docs.sentry.io/platforms/javascript/troubleshooting/#setting-up-sentry-in-shared-environments-eg-browser-extensions).
However, with this test application you can see if the error shows up in the console.

## Development Setup

This application uses [pnpm](https://pnpm.io/installation). Run the application with `pnpm run dev`.

---

Load the unpacked extension (the `dist` directory) into the extensions directory of your browser.

- Chrome: [How-to](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked)).

- Firefox: [How-to](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#trying_it_out)
