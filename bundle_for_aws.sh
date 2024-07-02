rm function.zip
pip install -r backend/requirements.txt --platform manylinux2014_x86_64 --target ./deploy_env --only-binary=:all:
cd deploy_env
zip -r9 ../function.zip *
cd ../backend
zip -g ../function.zip -r app
cd ..
zip -g function.zip .env
rm -rf deploy_env