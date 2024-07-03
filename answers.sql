-- Problem 1
SELECT email FROM customers

-- Problem 2
SELECT id FROM orders
WHERE customer_id =
(SELECT id FROM customers
WHERE fname = 'Elizabeth' 
AND lname = 'Crocker')

-- Problem 3
SELECT SUM(num_cupcakes) FROM orders
WHERE processed = false

-- Problem 4
SELECT name, SUM(num_cupcakes) FROM cupcakes AS c
	LEFT JOIN orders AS o
		ON c.id = o.cupcake_id
GROUP BY (name)
ORDER BY (name)

-- Problem 5
SELECT email, SUM(num_cupcakes) AS total  FROM customers AS c
	LEFT JOIN orders AS o
		ON c.id = o.customer_id
GROUP BY (email)
ORDER BY (total) DESC

-- Problem 6
SELECT fname, lname, email  FROM customers AS c
	LEFT JOIN orders AS o
		ON c.id = o.customer_id
	LEFT JOIN cupcakes AS k
		ON o.cupcake_id = k.id
WHERE name = 'funfetti'
GROUP BY fname, lname, email