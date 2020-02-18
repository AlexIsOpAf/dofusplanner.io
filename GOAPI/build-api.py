import os
import subprocess

# Steps to implement:
# 1. If a mongo docker container is already running skip spinning up a container
# 2. If a mongo docker container is not running implement the docker compose set up script
# 3. Copy the contents of the master database binary into the running container


# os.system("docker ps | grep mongo")


s = subprocess.run("docker ps | grep mongo-container", shell=True)


# Mongo container is running -- Assume this script has been run before
# So Skip straight to running the GOAPI with the right flags
# Before we run the API we will follow this:
# go install
# go build
# go test the module
# run the exe

# At the moment we will skip this and run the API
if (s.returncode == 0):
    os.system("sudo go run cmd/api/main.go")




# We don't have a mongo-docker container running
if (s.returncode == 1):
    os.system("docker-compose up -d")
    os.system("docker exec -it mongo-container bash")
    os.system("mongo -u localhost -p localpassword --authenticationDatabase dofusPlannerio")
    


db.createUser(

)



