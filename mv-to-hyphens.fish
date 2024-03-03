#!/usr/bin/env fish

# replace filename underscores with hyphens

string match -ae _ * \
	| xargs -P 4 -I {} fish -c \
	"mv {} (string replace -a _ - {})"

# for f in (string match -ae _ *)
# 	mv $f (string replace -a _ - $file)
