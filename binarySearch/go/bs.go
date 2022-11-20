package main

import (
	"fmt"
	"math"
	"math/rand"
	"time"
)

func main() {
	rand.Seed(time.Now().UnixNano())
	a := [10]int{2, 4, 5, 6, 7, 9, 10, 13, 14, 15}
	h := len(a)
	l := 0
	n := rand.Intn(15) + 1

	for l < h {
		m := int(math.Floor(float64(l + (h-l)/2)))
		t := a[m]

		if n == t {
			fmt.Println("success: found", n, "at index", m)
			return
		} else if n > t {
			l = m + 1
		} else {
			h = m
		}
	}
	fmt.Println("no dice:", n, "not in array")
	return
}
