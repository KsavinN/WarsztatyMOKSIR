// Tutaj sprawdzimy juz wiekszy zakres naszych umiejetnosc i wiedzy
// Postaraj sie naprawic funkcje reverseString tak aby zwrocila name slowo napisane wspak


function reverseString(name) {
  return name
}


// Tutaj sa przygotowane testy, nie musisz przejmowac sie ponizszym kodem

const testReverseString = (name, reversedString) => {
  const isEqual = reverseString(name) === reversedString
  console.log(name, reversedString, '=', isEqual)
} 

testReverseString('Kot', 'toK');
testReverseString('ala ma kota', 'atok am ala');
testReverseString('Borys', 'syroB');
