fn main() {
    let mut EX1 = [1, 5, 2, 8, 3, 2, 4, 1, 7, 0, 4, 7, 9];
    let mut EX2: [i32; 13] = [8, 9, 8, 8, 6, 1, 7, 3, 5, 1, 4, 2, 7];
    let mut EX3: [i32; 13] = [3, 11, 1, 12, 10, 7, 5, 6, 2, 8, 4, 9, 13];

    for x in 0..EX1.len() {
        println!("{}", x);
        for y in 0..EX1.len() - 1 - x {
            if EX1[y] > EX1[y + 1] {
                let BUFFER = EX1[y];
                EX1[y] = EX1[y + 1];
                EX1[y + 1] = BUFFER;
            }
        }
    }

    println!("{:?}", EX1);
    return;
}
