import "./index.css";
import { isPersian } from "./packages/isPersian";

class MyLibrary {
  constructor() {
    console.log("Library constructor loaded");
  }

  myMethod = () => {
    console.log("Library method fired");
  };
}

export default MyLibrary;

export function pt() {
  return {
    isPersian,
  };
}

window.pt = pt;
