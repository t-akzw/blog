#!/bin/sh

title=$1
d=$(date +%Y-%m-%d)

cat << EOS |tee ../content/${d}-${title}.md
---
date: ${d}-${title}
title: "xxx"
cover: "https://unsplash.it/1152/300/?random?BirchintheRoses"
categories: 
    - 
tags:
    - 
---

## 

EOS