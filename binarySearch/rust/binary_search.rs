const SOME_ARRAY: [i32; 5] = [1, 2, 3, 4, 5];

fn main() {
    const NEEDLE: i32 = 2; // or whatever you're looking for
    let mut low = 0;
    let mut high = SOME_ARRAY.len();

    while high > low {
        let middle = low + (high - low) / 2;

        if SOME_ARRAY[middle] == NEEDLE {
            println!("{} at index {}", NEEDLE, middle);
            return;
        } else if SOME_ARRAY[middle] < NEEDLE {
            low = middle + 1; // exclude middle as we've already looked there
        } else {
            high = middle;
        }
    };
    println!("{} not in array", NEEDLE);
    return
}
