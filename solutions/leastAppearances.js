function leastAppearance(choices) {

    let result = [];
    let map = {};
    //loop through choices 
    for (let i = 0; i < choices.length; i++) {
        let first = choices[i][0];
        let second = choices[i][1];

        if (!result.includes(first)) {
            result.push(first);
            if (map[first]) {
                map[first]++;
            }
            else {
                map[first] = 1;
            }
        }
        else if (!result.includes(second)) {
            result.push(second);
            if (map[second]) {
                map[second]++;
            }
            else {
                map[second] = 1;
            }
        }
        else if (result.includes(first) && result.includes(second)) {
            if(map[first] <= map[second]) {
                result.push(first);
                map[first]++;
            }
            else {
                result.push(second);
                map[second]++;
            }
        }
    }

    return result
}


const input= [[1,3], 
[3,10], 
[2,5], 
[1,4], 
[1,1], 
[2,3], 
[2,4], 
[3,10], 
[7,8], 
[2,2], 
[2,4], 
[2,2], 
[1,7], 
[1,1], 
[5,8], 
[2,2], 
[2,3], 
[4,9], 
[2,10], 
[3,4]];

console.time('leastAppearance');
console.log(leastAppearance(input));
console.log('expected');
console.log([1, 3, 2, 4, 1, 2, 4, 10, 7, 2, 4, 2, 7, 1, 5, 2, 3, 9, 10, 3])
console.timeEnd('leastAppearance');