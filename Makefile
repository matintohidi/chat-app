say_hello:
	@echo "starting chat app project"

make_back:
	@git clone https://github.com/matintohidi/chat-app-server.git

make_front:
	@git clone https://github.com/matintohidi/chat-app-client.git

setup_docker:
	@docker compose build

start_docker:
	@docker compse up -d

init_env:
	@mv .env.example .env

install_npm_packages:
	@docker compose exec server bin/bash npm install