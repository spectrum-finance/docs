---
sidebar_position: 1
title: Set up Ergo Bots
---

# How to set up execution Bots for Ergo network?

## Building & Running the off-chain bots for Ergo network

### Prerequisites
The bots require access to an Ergo node, so if you do not have one yet install as instructed here: [Ergo github](https://github.com/ergoplatform/ergo)
Besides the node the bots depend on tools such as Kafka and Redis to run, to make it easier to manage a docker based solution has been made to allow for easy building and running of the bots.
The only requirements besides the node are that you have the following installed:
 - GIT to download the code and help fetch updates. [GIT](https://git-scm.com/)
 - SBT (which requires Java) for building the bots. [SBT](https://www.scala-sbt.org/index.html)
 - Docker and Docker-compose (included in Docker for Windows). [Docker](https://www.docker.com/get-started)

### Building/updating the bots
First you need to download the code from the [ergo-dex-backend repo](https://github.com/ergolabs/ergo-dex-backend). The easiest way to keep it updated in the future is by using git:
```bash
cd bot-folder
git clone https://github.com/ergolabs/ergo-dex-backend.git
```
Instructions for building the bots are all combined in the build script and the docker-compose.yml file. The only configuration needed for running the bots need to be stored in a file called config.env. An example can be found in config-example.env
Make a copy of the example file, name it config.env and edit the file to match your values:
```bash
cd ergo-dex-backend
cp ./config-example.env ./config.env
```
The 2 values that need to be changed in the config.env file are the address you want to recieve fees on and the URI to your node (localhost/127.0.0.1 might not be accessible from within a docker container, it is best to use the local lan ip if the node is running on the same host).
Finally the Docker images need to be build before running them:
```bash
./build
```
Whenever a new version of the bots is released you will need to run this build command again, followed by the run command described below.

### Running the bots
Once the Docker images are built the only thing left to do is to run them:
```bash
./run
```

#### Verifying the bots are running correctly
You can look into the logs of the bots to ensure they are running correctly. To look at a combined log for all bots use the following command:

Windows:
```bash
cd ergo-dex-backend
docker compose logs -f
```
Linux:
```bash
cd ergo-dex-backend
sudo docker-compose logs -f
```
