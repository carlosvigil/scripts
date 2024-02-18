#!/usr/bin/env dash

config=/home/c/.config

cp --interactive --verbose --recursive --update --target-directory=/home/c/repos/dot-files/ \
/etc/nixos /etc/keyd $config/hypr $config/kanshi $config/kitty $config/foot
