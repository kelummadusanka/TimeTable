const timeSlots = [
  411, 412, 413, 414, 415, 416, 417, 418,
 
];

const lecmodpre = [
  { lecturer: 1, sem: 4, likes: [11, 12, 13], unlikes: [21, 22, 23], hours: 3 },
  { lecturer: 1, sem: 6, likes: [11, 12, 13], unlikes: [21, 22, 23], hours: 2 },
  { lecturer: 2, sem: 4, likes: [21, 22, 23], unlikes: [11, 12, 13], hours: 3 },
  { lecturer: 2, sem: 6, likes: [21, 22, 23], unlikes: [11, 12, 13], hours: 2 },
  { lecturer: 3, sem: 6, likes: [11, 12, 21], unlikes: [13, 14, 15], hours: 2 },
];

const atomiclecH = [];
lecmodpre.forEach((det) => {
  let subH = det.hours;
  while (subH) {
    atomiclecH.push({ ...det, subH: subH });
    subH--;
  }
});

const choosedsem = [4, 6];

// choosedsem.forEach((sem) => {
//   //4,6......

//   //filter out time slot and atomic lec hours for this sem
//   const TSFTS = timeSlots.filter((ts) => Math.floor((ts / 100) % 10) === sem);
//   const ALHFTS = atomiclecH.filter((al) => al.sem === sem); // alls sem value is equl to 4

//   // include empty hours to ALHFTS
//   let difference = TSFTS.length - ALHFTS.length;
//   let ALHFTSWE = ALHFTS;
//   while (difference) {
//     ALHFTSWE = [...ALHFTSWE, {lecturer: 0}];
//     difference--;
//   }


//   //all prmutaions


//   // console.log(Permutations);
// });



const Permutations = []

function printPermutations(items, prefix = []) {
  if (items.length === 0) {
    console.log(prefix)
    return;
  }

  for (let i = 0; i < items.length; i++) {
    const remainingItems = items.slice(0, i).concat(items.slice(i + 1));
    printPermutations(remainingItems, prefix.concat(items[i]));
  }
}


printPermutations(timeSlots);
