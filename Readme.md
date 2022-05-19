### First make sure that your docker application is running on your desktop

### Build your image :

`docker build -t <<dockerhub_username>>//<<image_name_that_you_want>>` .


### You can see the new image with :

`docker images`

### You can create a docker container with the image with:

`docker run <<container_name>> -p 3000:3000 -d <<your_dockerhub_username>>/<<image_name>>`


### You can see the running container with :

`docker ps -a`

### You print the application output with :

`docker logs <<container ID>>`

