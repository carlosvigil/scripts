#!/usr/bin/env dash

echo "\n\n################## Homebrew\n"
brew install \
	lua-language-server \
	marksman \
	rust-analyzer \
	taplo \
	tree-sitter

echo "\n\n################## PNPM\n"
pnpm install -g \
	@microsoft/compose-language-service \
	@tailwindcss/language-server \
	sql-language-server \
	bash-language-server \
	dockerfile-language-server-nodejs \
	svelte-language-server \
	typescript-language-server \
	vscode-langservers-extracted

echo "\n\n################## Golang\n"
go install golang.org/x/tools/gopls@latest

echo "\n\n################## Pip3\n"
pip3 install \
	pylyzer \
	ruff-lsp
