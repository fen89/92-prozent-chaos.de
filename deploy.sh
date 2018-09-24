#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate to build output dir
cd docs/.vuepress/dist

# if deploying to custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push git@github.com:fen89/blog-test.git master

cd -