
git pull
npm install
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker build --rm -f Dockerfile -t radio:latest .
docker run --rm -d -p 3000:3000 radio:latest
