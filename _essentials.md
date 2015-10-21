
heroku config:add BUILDPACK_URL=https://github.com/ddollar/heroku-buildpack-multi.git
heroku config:set NODE_ENV=production

heroku ps:scale web=1

nodemon -w api -w config
heroku pg:reset DATABASE_URL && PGUSER=sagi PGPASSWORD=sagi heroku pg:push medstrada DATABASE_URL -a medstrada



browserify -r react -r react-router -r react-bootstrap > assets/js/dependencies/build.js


lsof -i :[PORT]
kill -9 [PID]
