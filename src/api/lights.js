import { Router } from "express";
import lights from "../lights";
const router = Router();

router.get("/", (req, res) => {
  return res.json(lights);
});

router.get("/:id", (req, res) => {
  return res.json(lights[req.params.id]);
});

router.post("/:id/power", (req, res) => {
  const light = lights[req.params.id];
  return light
    .setPower(req.body.power)
    .then(() => res.json({ success: true, light }));
});

router.post("/:id/rgb", (req, res) => {
  const light = lights[req.params.id];
  return light
    .setRGB(req.body.rgb)
    .then(() => res.json({ success: true, light }));
});

router.post("/:id/bright", (req, res) => {
  const light = lights[req.params.id];
  return light
    .setBright(req.body.bright)
    .then(() => res.json({ success: true, light }));
});

router.post("/:id/ct", (req, res) => {
  const light = lights[req.params.id];

  return light
    .setCT(req.body.ct)
    .then(() => res.json({ success: true, light }));
});

export default router;
