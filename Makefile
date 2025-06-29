start-backend:
	npx start-server -s ./frontend/dist
start-frontend:
	cd frontend && npm run dev
build:
	cd frontend && npm ci && npm run build
install:
	npm ci



