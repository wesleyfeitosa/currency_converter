import React, { useState } from 'react';
import './Conversor.css';

export default function Conversor(props) {
    const [moedaB, setMoedaB] = useState(0);
    const api_key = '16b0a1f276a119eed373';
    let de_para = `${props.moedaA}_${props.moedaB}`;
    let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=${api_key}`;

    function converter(moedaA) {
        fetch(url).then(response => {
            return response.json();
        }).then(json => {
            let cotacao = json[de_para];
            let moedaBresult = (moedaA * cotacao).toFixed(2);
            setMoedaB(moedaBresult)
        })
    }


    return (
        <div className="conversor">
            <h2>{props.moedaA} para {props.moedaB}</h2>
            <input type="text" onChange={(event) => {
                converter(event.target.value)
            }}></input>
            <input type="button" value="Converter" onClick={converter}></input>
            <h2>{moedaB}</h2>
        </div>
    )
}
