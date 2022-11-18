/* 
    the binary search algorithm is ~SUPER~ good for finding items in an ORDERED list.

    searching item-by-item (i.e. linear search) would require something along the lines of this:

        ~~~
            for (let i = 0; i < arr.length; ++i) {
                if (arr[i] === item you're looking for) {
                    return happy.wav
                } else {
                    keep trying 😴
                }
            }

            return sad.png :(((
        ~~~

        a linear search usually works fine. but, say you have... 100,000,000 items in a list. 
    you look for "42" or "apple" or whatever... aaaand it's not in the list. 
    ok, great, you just performed 100,000,000 operations for nothing. nice one, dork.

        so... yeah this is where binary search comes in. instead of (up to) 100,000,000 guesses for an array that long, 
    what if i told you that you can do it in, like, 25? if you were me, you'd be like "no way freakin' way," but yes, way.

        that's exactly what binary search does. it splits the array into half and checks if the target item is in one of the halves.
    if it ain't, it'll look at the other half. once it finds the right half, it'll split that half into more halves and repeat the process.
    ...and so on and so forth until the end of time. or, rather, until everything has been looked through. 

        (ok but how does it KNOW what part of the array the item is in? it doesn't, but it makes a good assumption based on the order.
    if i were to look for the word "askjhdfd" in the dictionary, i'd know that it would be under the letter A 
    and that it would be somewhere between "aardvark" and "asinine" - because dictionaries are ordered. 
    i don't KNOW that it's there (spoiler: it's not), but i at least know where to look! same logic applies here)

        let's break it down: we have a list of [1, 2, 3 ... 998, 998, 1000] and we're looking for 451.
    we'll split the array into halves to find our number:

    1. is 451 between 1 and 250? no. so we know it's between 250 and 500.
    2. between 250 and 375? no. so we know it's between 375 and 500.
    3. between 375 and 440 (just approximating here)? no. so we know it's between 441 and 500.
    4. between 441 and 470? yeah.
    5. between 441 and 456? yeah.
    6. between 441 and 448? no. so we know it's between 449 and 456.
    etc. until we find (or don't find) 451

        your computer does essentially the same thing using this algo (albeit a wee bit more elegantly).
    the targeted area gets smaller and smaller until the targeted area === the target itself.
    if we removed 451 from our array, your computer would get to (theoretically) the right spot,
    say "ok it should be here but i'm not finding it," and then end the function. again, this is dependent
    on the array being ordered.

        now, obviously, that's tedious. i knew that 451 was in the array. i made it. i can also just use my eyes to look through.
    your computer doesn't necessarily know that though. and it doesn't have eyes (thankfully).

        that's why the binary search algorithm is amazing. the amount of steps that it takes for your computer to 
    check the ENTIRE array is only Log2array.length (rather than purely array.length like in linear search).
    ~ (log2number = how many times you can divide a number in half before it's < 1.0) ~
    in this case (finding 451 in an array of 1000 items), up to 9-10 guesses rather than up to 1000 guesses.

        some emphasis: finding an item in an array with a length of one quintillion (1,000,000,000,000,000,000)
    could take literally - shocker - one quintillion guesses using linear search. it might not even be there.
    log2quintillion is 59.8 - that's right, it'd would take your computer up to ~60 guesses using this binary search.
    (don't make an array that big)
*/

/*
    if you wanna use this app, go to your terminal and run
    node binarySearch.js "[some number]"
    ! make sure the arg is formatted as a number in an array in a string (lol) !
    it'll tell you if that number is somewhere in this big array and show each step along the way
*/

import { bigArray } from "./bigArray.js";

(() => {
    const [needle] = JSON.parse(process.argv.slice(2)[0]);
    let lowPoint = 0;
    let highPoint = bigArray.length;
    let step = 0;

    do {
        let middlePoint = Math.floor(lowPoint + (highPoint - lowPoint) / 2);

        // Setting up comparison
        console.log(
            `Attempt #${++step}\n(Array total length is ${bigArray.length}. Lowest value is ${
                bigArray[0]
            } and highest value is ${bigArray[bigArray.length - 1]})\n- Currently comparing ${
                bigArray[middlePoint]
            } to ${needle}...`
        );

        // Comparison logic / algorithm at work
        if (bigArray[middlePoint] === needle) {
            console.log(`😌 Match! ${needle} is at array index ${middlePoint}`);
            return;
        } else if (bigArray[middlePoint] < needle) {
            lowPoint = middlePoint + 1;
        } else {
            highPoint = middlePoint;
        }

        // Comparison results
        if (lowPoint < highPoint) {
            console.log(
                `- No match. ${bigArray[middlePoint]} is ${
                    bigArray[middlePoint] < needle ? "lower" : "higher"
                } than ${needle}. Now searching between ${bigArray[lowPoint]} and ${
                    bigArray[highPoint] ? bigArray[highPoint] : bigArray[highPoint - 1]
                }.\n`
            );
        } else {
            console.log(
                `- No match. ${bigArray[middlePoint]} is ${
                    bigArray[middlePoint] < needle ? "lower" : "higher"
                } than ${needle}.\n\nNothing else to check in here. I really looked, but ${needle} is not in the array.`
            );
        }
    } while (lowPoint < highPoint);
    return;

    // pure algorithm v
    /* 
        let lowPoint = 0;
        let highPoint = bigArray.length;

        do {
            let middlePoint = Math.floor(lowPoint + (highPoint - lowPoint) / 2);

            if (bigArray[middlePoint] === needle) {
                return true;
            } else if (bigArray[middlePoint] < needle) {
                lowPoint = middlePoint + 1;
            } else {
                highPoint = middlePoint;
            }
        } while (lowPoint < highPoint);

        return false
    */
})();
