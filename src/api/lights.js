import { Router } from "express";
import lights from "../lights";
const router = Router();

router.get("/", (req, res) => {
  return res.json(lights);
});

router.get("/:id", (req, res) => {
  return res.json(lights[req.params.id]);
});

router.post("/:id/power", (req, res, next) => {
  const light = lights[req.params.id];
  return light
    .setPower(req.body.power)
    .then((x) => {

      return x
    })
    .then(() => res.json({ success: true, light }))
    .catch(err => next(err))
});

router.post("/:id/rgb", (req, res) => {
  const light = lights[req.params.id];
  return light
    .setRGB(req.body.rgb)
    .then(() => res.json({ success: true, light }))
    .catch(err => next(err))
});

// sert brightness
router.post("/:id/bright", (req, res) => {
  const light = lights[req.params.id];
  return light
    .setBright(req.body.bright)
    .then(() => res.json({ success: true, light }))
    .catch(err => next(err))
});


// set Color Temperature
router.post("/:id/ct", (req, res) => {
  const light = lights[req.params.id];
  return light
    .setCT(req.body.ct)
    .then(() => res.json({ success: true, light }))
    .catch(err => next(err))
});

export default router;