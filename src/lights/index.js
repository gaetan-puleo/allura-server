import { Lookup } from "node-yeelight-wifi";
const lights = {};

let look = new Lookup();

look.on("detected", (light) => {
  lights[light.id] = light;
});

export default lights;
