## Post build

    - Give full privilages to Root user in Uploads folder (req for uploading files):
        sudo docker exec -it www /bin/bash
        chmod o+w /var/www/html/Uploads

### Docker Services

- start: sudo docker-compose up -d
- stop and drop: sudo docker-compose down
