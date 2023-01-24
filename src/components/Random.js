// funkce pro míchání hodnot masivu
export const shuffle = (array) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

export let gameCardArray = [
  { id: 1, img: "A" },
  { id: 2, img: "B" },
  { id: 3, img: "C" },
  { id: 4, img: "D" },
  { id: 5, img: "E" },
  { id: 6, img: "F" },
  { id: 7, img: "G" },
  { id: 8, img: "H" },
];

export let pairOfArrayCards = [...gameCardArray, ...gameCardArray];
