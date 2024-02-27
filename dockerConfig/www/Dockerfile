FROM php:8.1.6-apache

# Install required system packages
RUN apt-get update && \
    apt-get install -y \
        libldap2-dev \
        libldb-dev \
    && rm -rf /var/lib/apt/lists/*
    
# Create a new group with GID 1000
RUN groupadd -g 1000 intranetgroup

# Create a new user with UID 1000
RUN useradd -u 1000 intranet

# Add the user to the intranetgroup
RUN usermod -aG intranetgroup intranet

# Change the owner of the Apache process to the newly created user and group
RUN chown -R intranet:intranetgroup /var/www/html

# Install mysqli extension
RUN docker-php-ext-install mysqli ldap

# Set permissions for /var/www/html
RUN chmod -R o+w /var/www/html

# Copy custom PHP configuration
ADD ./dockerConfig/www/custom-php.ini /usr/local/etc/php/conf.d/custom-php.ini

# Switch to the newly created user
USER intranet

