# Auto Scaling

This is a simple project to test the ability of scaling up and down containers
based on usage. The idea is to learn when capacity is not enough and increase
the number of containers to attempt to keep a particular base line performance.
When capacity seems to be over allocated it will scale the containers back down
automatically.

## Setup

For the testing we will build the cluster locally using swarm mode. 
