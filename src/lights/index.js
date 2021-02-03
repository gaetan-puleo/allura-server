import { Lookup } from "node-yeelight-wifi";
const lights = {};

let look = new Lookup();

look.on("detected", (light) => {
  console.log('detected')
  lights[light.id] = light;
});

export default lights;