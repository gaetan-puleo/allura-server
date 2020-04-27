import lights from "../api/lights";
export default function routes(app) {
  app.use("/lights/", lights);
  return app;
}
