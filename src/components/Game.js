import "../App.css";
import { React, useState, useEffect } from "react";
import { shuffle } from "./Random";
import { pairOfArrayCards } from "./Random";

function Game() {
  //masiv všech karet
  const [arrayCards, setArrayCards] = useState([]);
  //masiv otevřené karty
  const [openedCards, setOpenedCards] = useState([]);
  //masiv soulad
  const [matched, setMatched] = useState([]);
  //   counts
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    setArrayCards(shuffle(pairOfArrayCards));
  }, []);

  //  funkce je zodpovědná za klepnutí na kartu
  const flipCard = (index) => {
    setOpenedCards((opened) => [...opened, index]); //přidá do masivu index kliknuté karty
    setMoves((prevMove) => prevMove + 1);
  };
  // voláno při aktualizaci masivu openedCards
  useEffect(() => {
    if (openedCards < 2) return;
    //kontrola shody
    const firstMatched = arrayCards[openedCards[0]];
    const secondMatched = arrayCards[openedCards[1]];

    if (secondMatched && firstMatched.id === secondMatched.id) {
      setMatched([...matched, firstMatched.id]);
    }

    if (openedCards.length === 2) {
      setTimeout(() => setOpenedCards([]), 1000);
    }
  }, [openedCards]);

  // vrací hodnotu do puvodního stavu
  function restartGame() {
    setOpenedCards([]);
    setMatched([]);
    setMoves(0);
    setArrayCards(shuffle(pairOfArrayCards));
  }

  return (
    <div className="container">
      <p className="counts">Attempt counter: {moves}</p>
      <div className="cards">
        {arrayCards.map((item, index) => {
          let isFlipped = false; //poloha karty

          //porovnejte index karty v masivu openCards
          if (openedCards.includes(index)) isFlipped = true;

          //budou zde všechny shodné karty
          if (matched.includes(item.id)) isFlipped = true;

          return (
            <div
              key={index}
              className={`card ${isFlipped ? "flipped" : ""}`}
              onClick={() => flipCard(index)}
            >
              <div className="inner">
                <div className="front">
                  <p className="letter">{item.img}</p>
                </div>
                <div className="back">
                  <p>?</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="button-restar" onClick={restartGame}>
        New Game
      </button>
    </div>
  );
}

export default Game;
