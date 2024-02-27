## DbConn

1. Establishing a Connection
   To establish a connection to the database, create a new DbConn instance:

   $conn = new DbConn();

   No additional parameters are required for connecting to the default database. If you need to connect to a specific database, use the selectDb() method:

   $conn->selectDb('mydb');

2. Preparing a Statement
   Prepared statements allow you to sanitize user input before executing it against the database. Use the prepareStmt() method to prepare a statement:

   $sql = "SELECT id FROM table1 WHERE column2=?";
   $stmt = $conn->prepareStmt($sql);

   The ? placeholder indicates that a parameter will be bound to this location in the query.

3. Binding Parameters
   Before executing, function binds the parameters if given to the corresponding placeholders in the prepared statement:

   $params = ['test2'];
   $stmt->executeStmt($params);

4. Fetch results
   To retrieve the results of the query, use the fetchOne() or fetchAll() methods:

   $result = $stmt->fetchOne(); // Returns a array row or null
   $results = $stmt->fetchAll(); // Returns an array of array rows or null

## SessionManager

1. Retrieve the entire session array
   $currentSession = SessionManager::get_SESSION();

2. Set a new session array
   $newSessionArray = ['user_id' => 456, 'username' => 'jane_doe'];
SessionManager::set_SESSION($newSessionArray);

3. Destroy the current session
   SessionManager::destroySession();

4. Unset a specific key in the session array
   $keyToRemove = 'username';
SessionManager::unsetSessionKey($keyToRemove);

## Router

#### Procedury

Customer documents
dla 2 poziomu

---

po home

dział

Documents IMS

kategorie

- Systemy zarzadzania
- BHP
  - Instrukcje
  - Ocena ryzyka zawodowego
  - PPOZ
  - Karty charakterystyk
