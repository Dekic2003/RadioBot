git pull
npm install
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker build --rm -f Dockerfile -t radio:latest .
docker run --rm -d -p 80:80 radio:latest
