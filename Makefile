compilar:
	coffee -c -o js pilas/pilas.coffee

# Reservado para el servicio 'travis' (no invocar desde consola).
test:
	npm install nodeunit
	nodeunit tests

unit:
	nodeunit tests
