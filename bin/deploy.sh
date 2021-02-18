#!/bin/bash

EC2_INSTANCE="ec2-54-184-14-55.us-west-2.compute.amazonaws.com"

echo "Deploy to $EC2_INSTANCE"

echo "SSH to EC2 Instance"
ssh -i ~/.ssh/appd-prototype.pem ubuntu@$EC2_INSTANCE <<EOF1

echo "Change directory"
cd appd-sketch-appcast/

echo "Pull from repo"
git pull

echo "Restarting nginx"
sudo service nginx restart

exit

EOF1