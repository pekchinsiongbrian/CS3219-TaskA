# CS3219 Task A

## Instructions on how to access site

- Fork this repo to local machine.
- In root folder, open terminal and enter `docker build -t reverseproxy .` to build Docker container with a name of "reverseproxy". You may replace `reverseproxy` with any name you want.
- Then, enter `docker run -d -p --rm 3000:80 --name web reverseproxy` to run the Docker container. Remember to replace `reverseproxy` with the name that you used in the previous step (if you changed it).
- Open up a web browser and enter `localhost:3000`. This will bring you to the home page (index.html).
- To see the reverse proxy in action, you can append `/aboutus` or `/contactus` to the URL.

Note on options and arguments for `docker run`:

`-d` = Run container in background and print container ID

`-p` = Publish a container's port(s) to the host

`--rm` = Automatically remove the container when it exits

`3000:80` = Exposes Docker container's port 80 to local machine's port 3000

`--name` = Assign a name to the container

## Pushing local Docker image to Docker Hub

- Login to Docker via CLI by entering `docker login -u <username> -p <password>`.
- By default, the Docker image will have a tag of `latest`. We can rename the tag with anything we want. In this case, I chose to call it .`task-a-latest`.
- Enter `docker tag reverseproxy:latest brianpek/cs3219-task-a:task-a-latest`.
- Then, enter `docker push brianpek/cs3219-task-a:task-a-latest`. This pushes the local Docker image to Docker Hub.
