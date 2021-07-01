#!/bin/bash
if [ ${PWD##*/} != "benchmark" ]
then
	cd benchmark
fi
npx lighthouse https://stanleyyu.io --output json --output html
