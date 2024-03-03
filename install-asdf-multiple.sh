#!/usr/bin/env dash

plugins="golang nodejs deno pnpm rust bun sqlite ruby python"
macos_default="ruby python"

if [ ! $# -eq 0 ]; then
	plugins="$@"
fi

echo "Installing plugins and latest versions"
for plug in $plugins; do
	asdf plugin add $plug
	asdf install $plug latest
	asdf global $plug latest
done

if [ $(uname) = "Darwin" ]; then
	echo "Setting python and ruby to system default versions"
	echo $macos_default | xargs -n 1 -I _ asdf global _ system
fi
