import middlewares from "./middlewares";
import routes from "./routes";
import server from "./server";
export default function loaders(app) {
  middlewares(app);
  routes(app);
  server(app);
  return app;
}
