#!/usr/bin/env dash

# rename (mv) files with underscores in current dir, swapping in hyphens

for file in ./*_*; do
	mv "$file" "$(echo "$file" | sed 's/_/-/g')";
done
