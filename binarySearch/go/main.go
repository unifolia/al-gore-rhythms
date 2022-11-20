package main

import (
	"fmt"
	"math"
)

func main() {
	a := [10]int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	h := len(a)
	l := 0
	n := 5

	for l < h {
		t := int(math.Floor(float64(l + (h-l)/2)))
		if n == a[t] {
			fmt.Println("success at index", t)
			return
		} else if n > a[t] {
			l = t + 1
		} else {
			h = t
		}
	}
	fmt.Println("no dice")
	return
}
