## docker command
```sh
docker exec -it node-au_db_1 mongo  -u admin -p secret auth

docker exec -it node-au_cache_1 redis-cli -a secret
scan 0

// to see the session infomation
get "sess:CuKP7VRYH1IRgG_jq_RP6daWnPPPYyhd"

// to see session expired time

ttl "sess:CuKP7VRYH1IRgG_jq_RP6daWnPPPYyhd"

```

### mongo
```sh
//query
db.users.find({}).pretty()
//delete
db.users.deleteMany({})
```
