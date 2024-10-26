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
      <div className="sp-container">
        <div className="sp-header">
          <Link className="sp-link" to="/" onClick={this.refreshPage} >
            <GiMagicLamp size={50} />
            </Link>
            <h2> GROCENY-GENIE</h2>
             
            </div>
            
           <p>
              Alışverişte yardımcı asistanın! 
              Listeni oluştur ve notlarını ekle böylece 
              alışverişini daha hızlı halletmiş olacaksın.
            </p>

          
        <div className="sp-body"> 
          <Link className="uyelink" to="/uye">Üye Ol</Link>
          <Link className="girislink" to="/giris">Giriş Yap</Link>
          </div>
       
      </div>
    );
  }
}
