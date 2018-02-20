/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation

    //lov = 0;
    var count = 0;
    var lov = 0;
        do {
            if ((preferences[lov] === lov + 2 && preferences[lov + 1] === lov + 3 && preferences[lov + 2] === lov + 1 )
            || (preferences[lov] === lov + 3 && preferences[lov + 1] === lov + 1 && preferences[lov + 2] === lov + 2 )
            )
                {
                count += 1;
                lov += 1;

            } else {
                lov += 1;
            }

        }
        //do {count += 1}
        while (lov < preferences.length);
        //console.log(count);
        return count;
};
