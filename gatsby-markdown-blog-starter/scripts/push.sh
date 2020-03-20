#!/bin/sh

cd ..
git pull origin master
c=$(git status |grep content/ |sed "s/.*content\/\(.*\).md/\1/g" |xargs)
git add content
git commit -m "${c}"
git push origin master
