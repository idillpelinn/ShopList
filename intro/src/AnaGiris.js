import React, { Component } from "react";
import "./AnaGiris.css";
import { GiMagicLamp } from "react-icons/gi";
import { Link } from "react-router-dom";

export default class AnaGiris extends Component {
   refreshPage() {
    window.location.reload();
  }
  
  render() {
    return (
      <div class="sp-container">
        
        <div class="sp-content">
          <div class="sp-globe"></div>
         
          <h2 class="frame-5">
            
            <span>GROCENY</span>
            <span>GENIE</span>
          </h2>
          <Link class="sp-circle-link" to="/" onClick={this.refreshPage}>
  <GiMagicLamp size={50} />
</Link>

         <div> <Link className="uyelink" to="/uye">Üye Ol</Link></div>
          <div><Link className="girislink" to="/giris">Giriş Yap </Link></div>
        </div>
      </div>
    );
  }
}
