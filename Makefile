init_main_env:
	@mv .env.example .env

init_main_env:
	@mv ./chat-app-server/.env.example ./chat-app-server/.env
	
default:
	docker ps

devdown:
	docker-compose down

stg:
	docker-compose up -d
	
run-dev:
	docker-compose up -d --build