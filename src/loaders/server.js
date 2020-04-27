export default function server(app) {
  app.listen(3000, () => {
    console.log("listen on port 3000");
  });
  return app;
}
