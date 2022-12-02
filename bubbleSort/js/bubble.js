const size = 25000;
const a = [...Array(size)].map((e) => ~~(Math.random() * size));

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

// speed check
const b = performance.now();
console.log(bubbleSort(a));
console.log(performance.now() - b);
