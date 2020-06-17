---
date: 2020-06-17
title: "A Tour of Goの学習ログ"
cover: "https://unsplash.it/1152/300/?random?BirchintheRoses"
categories: 
    - Backend
tags:
    - golang 
---

## Defer

https://go-tour-jp.appspot.com/flowcontrol/12

```go
package main

import "fmt"

func main() {
	fmt.Println("counting")

	for i := 0; i < 10; i++ {
		defer fmt.Println(i)
	}

	fmt.Println("done")
}
```

結果、LIFOで結果が出力される

```
counting
done
9
8
7
6
5
4
3
2
1
0
```

## slice

https://go-tour-jp.appspot.com/moretypes/8  
スライスは配列への参照

```go
package main

import "fmt"

func main() {
	names := [4]string{
		"John",
		"Paul",
		"George",
		"Ringo",
	}
	fmt.Println(names)

	a := names[0:2]
	b := names[1:3]
	fmt.Println(a, b)

	b[0] = "XXX"
	fmt.Println(a, b)
	fmt.Println(names)
}
```

結果

```
[John Paul George Ringo]
[John Paul] [Paul George]
[John XXX] [XXX George]
[John XXX George Ringo]
```

## Function values

https://go-tour-jp.appspot.com/moretypes/24  
関数を関数の引数と戻り値に取れる

```go
package main

import (
	"fmt"
	"math"
)

func compute(fn func(float64, float64) float64) float64 {
	return fn(3, 4)
}

func main() {
	hypot := func(x, y float64) float64 {
		return math.Sqrt(x*x + y*y)
	}
	fmt.Println(hypot(5, 12))

	fmt.Println(compute(hypot))
	fmt.Println(compute(math.Pow))
}
```

 結果

```
13
5
81
```

## Function closures

https://go-tour-jp.appspot.com/moretypes/25

```go
package main

import "fmt"

func adder() func(int) int {
	sum := 0
	return func(x int) int {
		sum += x
		return sum
	}
}

func main() {
	pos, neg := adder(), adder()
	for i := 0; i < 10; i++ {
		fmt.Println(
			pos(i),
			neg(-2*i),
		)
	}
}
```

結果

```
0 0
1 -2
3 -6
6 -12
10 -20
15 -30
21 -42
28 -56
36 -72
45 -90
```

## Methods

https://go-tour-jp.appspot.com/methods/1  
Goにはクラスの仕組みがない

```go
package main

import (
	"fmt"
	"math"
)

type Vertex struct {
	X, Y float64
}

func (v Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func main() {
	v := Vertex{3, 4}
	fmt.Println(v.Abs())
}
```

結果

```
5
```