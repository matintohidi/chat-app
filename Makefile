init_main_env:
	@cp .env.example .env
	@cp ./chat-app-server/.env.example ./chat-app-server/.env
	
default:
	docker ps

down:
	docker-compose down

stg:
	docker-compose up -d
	
run-dev:
	docker-compose up -d --build