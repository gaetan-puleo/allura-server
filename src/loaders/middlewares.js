import bodyParser from "body-parser";
import cors from "cors";

export default function middlewares(app) {
  app.use(cors());

  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

  app.use(function(err, req, res, next) {
    // logic
    console.log(err)
  });
  return app;
}
