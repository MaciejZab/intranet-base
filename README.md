## Docker Services

1. Adjust variables in .env

- MYSQL_ROOT_PASSWORD=#

2. Setup

- run: docker-compose up -d --build
- stop and drop: docker-compose down

3. phpMyAdmin

- to access phpMyAdmin use port 8001, for example: http://domain:8001/

## DbConn PHP Class

      Config: /www/Config/dbConfig.php
      namespace Config;

      // if using docker DB_HOST = mysql container name (docker-compose service property => container_name: mysql)
      define("DB_HOST", "mysql");

      define("DB_USERNAME", "root");
      define("DB_PASSWORD", "A35b%v.5/xrR");

1. Establishing a Connection
   To establish a connection to the database, create a new DbConn instance:

   ```php
   $conn = new DbConn();
   ```

   No additional parameters are required for connecting to the default database. If you need to connect to a specific database, use the selectDb() method:

   ```php
   $conn->selectDb('mydb');
   ```

2. Preparing a Statement
   Prepared statements allow you to sanitize user input before executing it against the database. Use the prepareStmt() method to prepare a statement:

   ```php
   $sql = "SELECT id FROM table1 WHERE column2=?";
   $stmt = $conn->prepareStmt($sql);
   ```

   The ? placeholder indicates that a parameter will be bound to this location in the query.

3. Binding Parameters
   Before executing, function binds the parameters if given to the corresponding placeholders in the prepared statement:
   ```php
   $params = ['test2'];
   $stmt->executeStmt($params);
   ```
4. Fetch results
   To retrieve the results of the query, use the fetchOne() or fetchAll() methods:
   ```php
   $result = $stmt->fetchOne(); // Returns a array row or null
   $results = $stmt->fetchAll(); // Returns an array of array rows or null
   ```

## SessionManager PHP Class

1. Retrieve the entire session array
   ```php
   $currentSession = SessionManager::get_SESSION();
   ```
2. Set a new session array

   ```php
   $newSessionArray = ['user_id' => 456, 'username' => 'jane_doe'];
   SessionManager::set_SESSION($newSessionArray);
   ```

3. Destroy the current session

   ```php
   SessionManager::destroySession();
   ```

4. Unset a specific key in the session array
   ```php
   $keyToRemove = 'username';
   SessionManager::unsetSessionKey($keyToRemove);
   ```

## Router PHP Class

1. To create a new Router instance, simply instantiate the class:

   ```php
   $router = new Router();
   ```

   The constructor automatically parses the request URI and sets up the view path accordingly.

2. requireView Method
   The requireView method is used to include the corresponding view file based on the parsed URI:

   ```php
   $router->requireView();
   ```

   This method includes the PHP view file associated with the current request URI.

   Let's say we have `/home.php`, view will be included from `/Views/home.view.php`.

3. checkLogStatus Method
   The checkLogStatus method checks the login status of the user and redirects them based on their authentication status and the requested path:

   ```php
   $router->checkLogStatus();
   ```

   If the user is not logged in and tries to access a protected route, they are redirected to the homepage. If the user is logged in and tries to access the homepage, they are redirected to the dashboard.

4. checkLogPrivileges Method
   The checkLogPrivileges method verifies the user's role against a specified protection level to determine if they have access rights:

   ```php
   $router->checkLogPrivileges($protection);
   ```

   It takes an optional parameter $protection (default value is "operator") to specify the required privilege level. Returns true if the user has the required privileges, false otherwise.

   Privilige array is inside Router Class

   ```php
   $privilegeLevels = [ // route protection lvl => who can access
            'admin' => ['admin'],
            'moderator' => ['admin', 'moderator'],
            'operator' => ['admin', 'moderator', 'operator']
            ];
   ```

## HttpRequest JS Class

1.  To create a new HttpRequest instance, instantiate the class with the required parameters:

    ```javascript
    const httpRequest = new HttpRequest(url, method, body, file);
    ```

    **url**: The URL to which the HTTP request will be sent.

    **method** (optional, default value: "GET"): The HTTP method to be used for the request (e.g., "GET", "POST", "PUT", "DELETE").

    **body** (optional): The request body to be sent with the request. Can be provided as a string or an object.

    **file** (optional): If the request includes a file upload, pass the file object.

2.  The send method sends the HTTP request asynchronously and returns a promise with the response data:

    ```javascript
    const response = await httpRequest.send(json);
    ```

    **json** (optional): Specify "json" if you want to send the request body as JSON. By default, the request body is sent as form data.
    If the json parameter is provided, the request body is stringified as JSON, and the Content-Type header is set to "application/json". Otherwise, if no json parameter is provided, the request body is sent as form data, and the Content-Type header is set to "application/x-www-form-urlencoded".

    The method returns a promise that resolves with the response data. If the response contains JSON data, it is parsed and returned as an object. Otherwise, the response is returned as text.

    Example usage:

    ```javascript
    const httpRequest = new HttpRequest("https://api.example.com/data", "POST", { key: "value" });
    httpRequest.send("json").then((response) => console.log(response));
    ```

    or

    ```javascript
    const httpRequestFile = new HttpRequest(requestUrl, "POST", null, file);
    httpRequestFile.send().then((response) => console.log(response));
    ```
