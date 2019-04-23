import devConfig from "js/configs/dev.json";
import prodConfig from "js/configs/prod.json";

export default (process.env.NODE_ENV.toLowerCase() === "production" ? prodConfig : devConfig);
