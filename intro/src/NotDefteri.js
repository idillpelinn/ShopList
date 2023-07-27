import React, { useState } from "react";
import { Button, Input, ListGroup, ListGroupItem } from "reactstrap";
import "./NotDefteri.css";
import "./GirisYap.css";
import {Link} from'react-router-dom'
const NotDefteri = () => {
  const [notlar, setNotlar] = useState([]);
  const [yeniNot, setYeniNot] = useState("");

  const notEkle = () => {
    setNotlar([...notlar, yeniNot]);
    setYeniNot("");
  };

  const notSil = (index) => {
    const yeniNotlar = [...notlar];
    yeniNotlar.splice(index, 1);
    setNotlar(yeniNotlar);
  };

  return (
    <div>
      <div className="notalma">
        <h1 className="Not">Notlarım ~ {new Date().toLocaleDateString()}</h1>
        <Input
          className="placeholder"
          type="text"
          placeholder="Yeni not ekle"
          value={yeniNot}
          onChange={(e) => setYeniNot(e.target.value)}
        />
        </div>
      
    
      <div className="ekle">
        <Button className="buton" color="secondary" onClick={notEkle}>
          Ekle
        </Button>
      </div>
      <br />
      <div className="listeleme"> <ListGroup>
        {notlar.map((not, index) => (
          <ListGroupItem key={index}>
            {not}{" "}
            <Button color="danger"  onClick={() => notSil(index)}>
              Sil
            </Button>
          </ListGroupItem>
        ))}
        <Button  className="link"> <Link to="/">Kaydet</Link></Button>
      </ListGroup></div>
     
    </div>
  );
};

export default NotDefteri;
