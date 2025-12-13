## 检查依赖项

pnpm list cron --depth 5

## 查看docker ssh 信息

docker ps -a

docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' nestjs-demo-mongo-1
172.18.0.3

docker inspect <容器ID> | grep -i user

# 或者直接进入容器查看环境变量

docker exec <容器ID> env
