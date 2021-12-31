  #!/bin/bash

echo "Start deploy"
ssh -tq root@144.76.60.105 '/bin/bash -l -c "source ~/.nvm/nvm.sh; cd /var/www/docs; git pull origin master; yarn; yarn build;"'
echo "Deployed Successfully!"

exit 0