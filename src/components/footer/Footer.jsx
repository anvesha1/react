import React from "react";
import "./Footer.css";
//import { GalleryIcon } from "../../utils/iconUtil";
function Footer(props) {
  return (
    <div className={`footer-wrapper`}>
      <div className={`display-grid gap-2`}>
       
        <span>Gallery1</span>
      </div>{" "}
      <div className={`display-grid gap-2`}>
      
        <span>Gallery2</span>
      </div>{" "}
      <div className={`display-grid gap-2`}>
        <span>Gallery3</span>
      </div>{" "}
      <div className={`display-grid gap-2`}>
        <span>Gallery4</span>
      </div>{" "}
      <div className={`display-grid gap-2`}>
        <span>Gallery5</span>
      </div>
    </div>
  );
}

export default Footer;