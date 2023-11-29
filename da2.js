const carta = 'bici coche balón _playstation bici coche peluche';

function listGifts(letter) {
  const gifts = letter.split(' ');
  console.log(gifts);

  

}



const regalos = listGifts(carta);
console.log(regalos);


/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/