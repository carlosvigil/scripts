#!/usr/bin/env dash

# symlink from repos/scripts into .local/bin
# use `-not -path '.git'` if more depth needed

find "$HOME/repos/scripts" -maxdepth 1 -type f -executable \
	-exec ln -s {} "$HOME/.local/bin" \;
