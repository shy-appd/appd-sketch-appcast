#!/bin/bash

EC2_INSTANCE="ec2-18-188-247-141.us-east-2.compute.amazonaws.com"

echo "Deploy to $EC2_INSTANCE"

echo "SSH to EC2 Instance"
ssh -i ~/.ssh/appd-prototype.pem ec2-user@$EC2_INSTANCE <<EOF1

echo "Change directory"
cd appd-2.0-prototype/

echo "Pull from repo"
git pull

echo "Install any new packages"
sudo npm i

echo "Building..."
yarn build

echo "Remove old dist"
sudo rm -r /usr/share/nginx/appd-2.0-prototype/*

echo "Copy to nginx dist path"
sudo cp -r ./build/* /usr/share/nginx/appd-2.0-prototype/

echo "Restarting nginx"
sudo service nginx restart

exit

EOF1