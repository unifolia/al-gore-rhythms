use rand::Rng;

fn main() {
    let mut rng = rand::thread_rng();
    const SOME_ARRAY: [i32; 10] = [1, 3, 5, 6, 7, 9, 11, 14, 16, 20];
    let needle: i32 = rng.gen_range(1..20); // or whatever you're looking for
    let mut low = 0;
    let mut high = SOME_ARRAY.len();

    while high > low {
        let middle = low + (high - low) / 2;
        let target = SOME_ARRAY[middle];

        if target == needle {
            println!("{} at index {}", needle, middle);
            return;
        } else if target < needle {
            low = middle + 1; // exclude middle as we've already looked there
        } else { // if middle > needle
            high = middle;
        }
    };
    println!("{} not in array", needle);
    return
}
