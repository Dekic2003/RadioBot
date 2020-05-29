#Pull changes
git pull
#Install dependencies
npm install
#Stop all docker container and delete them
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
#Build docker image
docker build --rm -f Dockerfile -t radio:latest .
#Run docker image
docker run --rm -d -p 80:80 radio:latest
