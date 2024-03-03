#!/usr/bin/env dash

# this is a hacky way to mute audio because i don't know how to use wireplumber

m2ID=$(wpctl status \
	| rg --max-count 1 'Direct M2' \
	| rg --only-matching '\d+' \
	| awk "NR==1")

wpctl set-mute "$m2ID" toggle
