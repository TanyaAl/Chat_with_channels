start:
	npx start-server -s ./frontend/dist
install:
    rm -rf ./node_modules /app/node_modules/.cache || true
	npm ci
	rm -rf ./frontend/node_modules || true
	cd frontend && npm ci
build:
	cd frontend && npm run build
dev:
	cd frontend && npm run dev




