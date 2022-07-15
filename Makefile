
#
# DEV
#
dev-app:
	yarn && yarn start:app

dev-api:
	yarn && yarn start:dev:api

dev-style: 
	yarn && yarn storybook

#
# PROD
#

docker_id ?= alialfredji

app_name ?= starterapp
version ?= latest

deploy:
	docker build -t $(docker_id)/$(app_name):$(version) .
	docker push $(docker_id)/$(app_name):$(version)

#
# Reset
#
reset-all:
	rm -rf data
	yarn reset
	
