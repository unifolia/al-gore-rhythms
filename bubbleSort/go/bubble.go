package main

import "fmt"

func main() {
	a := [13]int{3, 11, 1, 12, 10, 7, 5, 6, 2, 8, 4, 9, 13}
	b := [13]int{13, 12, 11, 10, 9, 8, 6, 7, 5, 4, 3, 2, 1}
	c := [13]int{1, 13, 2, 12, 3, 11, 4, 10, 5, 9, 6, 8, 7}

	for i := 0; i < len(a); i++ {
		// len(a) = len(b) = len(c)
		for j := 0; j < len(a)-1-i; j++ {
			if a[j] > a[j+1] {
				buffer := a[j]
				a[j] = a[j+1]
				a[j+1] = buffer
			}
			if b[j] > b[j+1] {
				buffer := b[j]
				b[j] = b[j+1]
				b[j+1] = buffer
			}
			if c[j] > c[j+1] {
				buffer := c[j]
				c[j] = c[j+1]
				c[j+1] = buffer
			}
		}
	}

	fmt.Println(a, b, c)
	return
}
