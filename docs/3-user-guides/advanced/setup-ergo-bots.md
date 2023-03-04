---
sidebar_position: 1
title: Set up Ergo Bots
---

# How to set up execution Bots for Ergo network?

## Building & Running the off-chain bots for Ergo network

### Prerequisites
The services require access to an Ergo node, so if you do not have one yet install as instructed here: [Ergo github](https://github.com/ergoplatform/ergo)
Besides the node the services depend on tools such as Kafka and Redis to run, to make it easier to manage a docker based solution has been made to allow for easy building and running of the services.
The only requirements besides the node are that you have the following installed:
- GIT to download the code and help fetch updates. [GIT](https://git-scm.com/)
- Docker and Docker-compose (included in Docker for Windows). [Docker](https://www.docker.com/get-started)

### Building
First you need to download the code from this repo. The easiest way to keep it updated in the future is by using git:
```
cd <the folder you want to keep the off-chain services code in>
git clone https://github.com/spectrum-finance/ergo-dex-backend.git
```
Instructions for the containers are all defined in the `docker-compose.yml` file. The only configuration needed for running the services need to be stored in a file called config.env. An example can be found in `config-example.env`
Make a copy of the example file, name it config.env and edit the file to match your values:

Linux:
```
cd ergo-dex-backend
cp ./config-example.env ./config.env
```
Windows:
```
cd ergo-dex-backend
copy ./config-example.env ./config.env
```
The 2 values that need to be changed in the `config.env` file are the address you want to recieve fees on and the URI to your node (localhost/127.0.0.1 might not be accessible from within a docker container, it is best to use the local lan ip if the node is running on the same host).
### Running the services
Once the `config.env` file is created the only thing left to do is to run the containers:

Linux:
```
sudo -E docker-compose up -d
```
Windows:
```
docker-compose up -d
```
#### Verifying the services are running correctly
You can look into the logs of the services to ensure they are running correctly. To look at a combined log for all services use the following command:

Linux:
```
cd ergo-dex-backend
sudo docker-compose logs -f
```

Windows:
```
cd ergo-dex-backend
docker-compose logs -f
```

### Updating the services
After running `git pull` from the instructions below make sure to check for potential changes in `config-example.env` to apply to your own `config.env`!

Linux:
```
git pull
sudo -E docker-compose pull
sudo -E docker-compose up -d
```
Windows:
```
git pull
docker-compose pull
docker-compose up -d
```