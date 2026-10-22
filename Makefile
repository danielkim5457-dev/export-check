.PHONY: dev test seed lint
dev:
	docker compose up --build
test:
	python -m pytest -q
seed:
	python -m api.app.seed data/sample/sample_products.json
lint:
	python -m ruff check api collectors tests
