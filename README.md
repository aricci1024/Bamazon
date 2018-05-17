# Bamazon
Node.js and MySQL Amazon-like storefront

1. Create a MySQL Database called `bamazon`.

2. Then create a Table inside of that database called `products`.

3. The products table should have each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

4. Populate this database with around products. 

5. Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

6. Prompt the users with two messages.

   * Ask them the ID of the product they would like to buy.
   * Ask how many units of the product they would like to buy.

7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

   * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

8. If your store DOES have enough of the product, customer's order is fulfill.
   * Updates the SQL database to reflect the remaining quantity.
   * Then shows the customer the total cost of their purchase.

10. Asks if the customer wants to purchase another item or if they are done
   * If they are done shopping, connetection ends
   * If they want to ordr another product, shows the product list again, with updated quantities, and prompts the user for the item id and quant, restarting the process

See example below:

![Alt text](example_img.jpg?raw=true "Example of Bamazon")