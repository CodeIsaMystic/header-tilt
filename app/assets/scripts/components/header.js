import moveImages from "../animations/moveImages";
import { select, selectAll } from  "../utils/utils"


// Header Tilt
export default function initHeaderTilt() {
  select("header").addEventListener("mousemove", moveImages);
}
