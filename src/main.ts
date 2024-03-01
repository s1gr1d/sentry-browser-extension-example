import * as Sentry from "@sentry/browser";
import "./style.css";

Sentry.init({});

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Sentry.init Test</h1>
  <button>Click me!</button>
`;
