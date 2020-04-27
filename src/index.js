import createApp from "./app";
import loaders from "./loaders/";

function init() {
  const app = createApp();
  loaders(app);
}

init();
