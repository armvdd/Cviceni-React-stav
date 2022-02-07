import React, {useState} from "react";
import "./ukol.css";

// Děláš jednoduchou komponentu zobrazující úkoly,
// které jdou označit jako splněné.

// Zadání 1:
// Pomocí `map` vypiš v seznamu `ul` všechny úkoly
// pomocí komponenty `Ukol`.

// Zadání 2:
// V komponentě Ukol si nachystej stavovou proměnnou
// s výchozí hodnotou `false`.
// Klikem na tlačítko ji změň na `true` pro splněný úkol.

// Zadání 3:
// Je-li úkol splněný, nerenderuj tlačítko a k `li` přidej navíc třídu `ukol--splnen`.

const Ukol = ({ nazev }) => {

	const [splnit, setSplnit] = useState(false)
	const handleClick = () => {
		if(splnit === false){
			setSplnit(true)
		}
		else if(splnit === true){
			setSplnit(false)
		}
	}
	return (
		<li className={splnit ? "ukol--splnen" : "ukol"}>
			<span className="ukol__nazev">{nazev}</span>
			<button className={splnit ? "btn--hidden" : "ukol__akce"} onClick={handleClick}>splnit</button>
		</li>
	)
}

const Uloha6 = () => {
	const ukoly = ['Zamést', 'Pověsit prádlo', 'Umýt okna', 'Vynést koš']

	return (
		<ul>
		{ukoly.map(ukol => <Ukol nazev = {ukol} key = {ukol}/>)}
		</ul>
	)
		
}

export default Uloha6;