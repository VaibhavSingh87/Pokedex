#!/bin/bash
cd /home/ec2-user/mern-app
npm install --no-audit --no-fund
npm run build
npm install -g serve
# serve -s build -l 80

# #!/bin/bash

# # Build the production-ready files
# npm run build

# # Serve the build in the background
nohup serve -s build -l 80 > /dev/null 2>&1 &
