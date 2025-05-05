# DevopsShowcase Makefile

.PHONY: install dev build start db-push clean help build-frontend serve-frontend

# Default target when just running 'make'
.DEFAULT_GOAL := help

# Install dependencies
install:
	npm install

# Run in development mode
dev:
	npm run dev

# Build for production
build:
	npm run build

# Start production server
start:
	npm start

# Push database schema changes
db-push:
	npm run db:push

# Type checking
check:
	npm run check

# Clean node modules and build artifacts
clean:
	rm -rf node_modules
	rm -rf dist
	rm -rf .cache

# Build only the frontend (static files)
build-frontend:
	npx vite build

# Serve the static frontend locally (after building)
serve-frontend:
	npx vite preview

# Help command
help:
	@echo "DevopsShowcase Makefile Commands:"
	@echo "make install        - Install dependencies"
	@echo "make dev            - Run in development mode"
	@echo "make build          - Build for production"
	@echo "make start          - Start production server"
	@echo "make db-push        - Push database schema changes"
	@echo "make check          - Run type checking"
	@echo "make clean          - Remove node_modules and build artifacts"
	@echo "make build-frontend - Build only the frontend (static files)"
	@echo "make serve-frontend - Serve the static frontend locally (after building)"
	@echo "make help           - Show this help message" 