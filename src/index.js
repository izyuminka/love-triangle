/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0;
    let relationNum = 3;

    checkRelation = function(value, index, array, initialIndex, reqDepth, depth = 1) {
        let newIndex = value - 1;
        return (depth < reqDepth) ?  (newIndex > -1 && newIndex < array.length && newIndex !== index)
            && checkRelation(array[newIndex], newIndex, array, initialIndex, reqDepth, ++depth)
            : newIndex === initialIndex;
        };

    preferences.forEach(function(value, index, array) {
        if (checkRelation(value, index, array, index, relationNum)) count++;
    });
    return count/relationNum;
};
