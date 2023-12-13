#!/usr/bin/env dash

brew install \
	lua-language-server \
	marksman \
	rust-analyzer \
	taplo \
	tree-sitter

pnpm install -g \
	@microsoft/compose-language-service \
	@tailwindcss/language-server \
	sql-language-server \
	bash-language-server \
	dockerfile-language-server-nodejs \
	svelte-language-server \
	typescript-language-server \
	vscode-langservers-extracted

go install golang.org/x/tools/gopls@latest

pip3 install \
	pylyzer \
	ruff \
	ruff-lsp
