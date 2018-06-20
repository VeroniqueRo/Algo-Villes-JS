// Converts from degrees to radians.
Math.toRadians = function(degrees) {
  return degrees * Math.PI / 180;
};

function distanceFromGrenoble(city)
{
  console.log("implement me !");
  var GrenobleLat = 45.166667;
  var GrenobleLong = 5.716667;
  var cityLat = city.latitude;
  var cityLong = city.longitude;

    var R = 6371; // metres
    var radianLatitudeGrenoble = Math.toRadians(GrenobleLat);
    var radianLatitudeVille = Math.toRadians(cityLat);
    var differenceEntreLatitudes = Math.toRadians(cityLat-GrenobleLat);
    var differenceEntreLongitudes = Math.toRadians(cityLong-GrenobleLong);

    var a = Math.sin(differenceEntreLatitudes/2) * Math.sin(differenceEntreLatitudes/2) +
        Math.cos(radianLatitudeGrenoble) * Math.cos(radianLatitudeVille) *
        Math.sin(differenceEntreLongitudes/2) * Math.sin(differenceEntreLongitudes/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    var d = R * c;

  return d;
}

function swap(i,j) // Swap the values in array csvData
{

  let temp = csvData[i];

    csvData[i] = csvData[j];
    csvData[j] = temp;

  displayBuffer.push(['swap', i, j]); // Do not delete this line (for display)

}

function isLess(A,B)
{

    displayBuffer.push(['compare', A, B]); // Do not delete this line (for display)

    if (csvData[A].dist < csvData[B].dist) {
      return true;
    };



}

function insertsort()
{
    for(let i = 1; i < csvData.length; i++) {
        for(let k = i; k > 0; k--) {
            if (isLess(k, k-1)) {
                swap(k,k-1);
            } else {
                break; // Arrete la boucle k quand la permutation n'est plus possible (Optimisation)
            }
        }
    }
}

function selectionsort()
{
    for(let i = 0; i < csvData.length; i++) {
        let k = i; // On suppose que c'est l'élément le plus petit
        for(let j = i+1; j < csvData.length; j++) {
            if (isLess(j, k)) {
                k = j; // L'élément le plus petit a changé
            }
        } swap(k,i);
    }
}

function bubblesort()
{
    for(let i = 0; i < csvData.length; i++) {
        let swapped = false;
        for(let j = csvData.length-1; j >= i+1 ; j--) {

            if (isLess(j, j-1)) {
                swap(j,j-1);
                swapped = true;
            }

        } if (swapped === false) {return};
    }
}

function shellsort()
{
  console.log("implement me !");
}
function mergesort(data)
{
  console.log("implement me !");
}
function heapsort(data)
{
  console.log("implement me !");
}

function quicksort()
{
    sortForQuickSort(0,csvData.length-1);
}

function sortForQuickSort(iDeb,iFin) {

    let k = iDeb;
    let rand = random(iDeb,iFin);
    swap(iDeb,rand);

    for (i = iDeb+1; i <= iFin; i++) {

        if (isLess(i, iDeb)) {
            swap(++k,i); // ATTENTION : i est swappé avec k+1 !
        }
    }
    swap(iDeb,k);
    // Séparation des tableaux autour du pivot
    if (iDeb<k-1) {
        sortForQuickSort(iDeb,k-1);
    }

    if (k+1<iFin) {
        sortForQuickSort(k+1,iFin);
    }
}

function random(min,max) {
    rand = Math.floor(Math.random()*(max-min)+min)+1;
    return rand;
}

function quick3sort(data)
{
  console.log("implement me !");
}



var algorithms = {
  'insert': insertsort,
  'select': selectionsort,
  'bubble': bubblesort,
  'shell': shellsort,
  'merge': mergesort,
  'heap': heapsort,
  'quick': quicksort,
  'quick3': quick3sort
}

function sort(algo)
{
  if (!algorithms.hasOwnProperty(algo)) {
    throw 'Invalid algorithm ' + algo;
  }
  var sort_fn = algorithms[algo];
  sort_fn();
}
