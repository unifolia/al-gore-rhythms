const ex1 = [1, 5, 2, 8, 3, 2, 4, 1, 7, 0, 4, 7, 9];
const ex2 = [8, 9, 8, 8, 6, 1, 7, 3, 5, 1, 4, 2, 7];
const ex3 = [3, 11, 1, 12, 10, 7, 5, 6, 2, 8, 4, 9, 13];

const bubbleSort = (array) => {
    for (let i = 0; i < array.length; ++i) {
        for (let j = 0; j < array.length - 1 - i; ++j) {
            if (array[j] > array[j + 1]) {
                const buffer = array[j];
                array[j] = array[j + 1];
                array[j + 1] = buffer;
            }
        }
    }
    return array;
};

console.log(bubbleSort(ex3));
