import React, { useState, useEffect } from 'react';
import './Conversor.css';

export default function Conversor(props) {
    const [moedaA, setMoedaA] = useState(0);
    const [moedaB, setMoedaB] = useState(0);
    // this.converter = this.converter.bind(this);

    function converter() {
        let de_para = `${props.moedaA}_${props.moedaB}`;
        const api_key = '16b0a1f276a119eed373';
        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=${api_key}`;
        console.log('url', url);
        fetch(url).then(response => {
            return response.json();
        }).then(json => {
            let cotacao = json[de_para];
            // console.log('moedaA = ' + moedaA);
            let moedaBresult = (moedaA * cotacao).toFixed(2);
            // console.log(moedaBresult);
            setMoedaB(moedaBresult)
        })
    }

    useEffect(() => {
        console.log('Antes useEffects = '+moedaA);
        converter();
    }, [moedaA])

    return (
        <div className="conversor">
            <h2>{props.moedaA} para {props.moedaB}</h2>
            <input type="text" onChange={(event) => {
                
                setMoedaA(parseFloat(event.target.value));
                console.log("depois = "+moedaA);
                
            }}></input>
            <input type="button" value="Converter" onClick={converter}></input>
            <h2>{moedaB}</h2>
        </div>
    )
}
