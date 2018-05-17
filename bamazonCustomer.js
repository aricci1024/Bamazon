var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "Bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    queryAllItems();
});

function queryAllItems() {
    connection.query("SELECT * FROM products", function(err, res) {
        console.log("-----------------------------------");
        console.log("See store products below: ")
        for (var i = 0; i < res.length; i++) {
            console.log("Item ID: " + res[i].item_id + " | Product Name: " + res[i].product_name + " | Department: " + res[i].department_name + " | Unit price: " + res[i].price + " | Quantity in stock: " + res[i].stock_quantity);
        }
        console.log("-----------------------------------");
        userPurchase ();
    })
};

function userPurchase () {
    inquirer.prompt([
        {
            name: "Item",
            type: "input",
            message: "Enter the ID of the item you'd like to purchase",
            validate: function(value) {
                if (isNaN(value) === false) {
                return true;
                }
                return false;
            }
        },
        {
            name: "quantRequest",
            type: "input",
            message: "How many units would you like to purchase?",
            validate: function(value) {
                if (isNaN(value) === false) {
                return true;
                }
                return false;
            }
        }
    ])
    .then(function(answer) {
        //select the product
        connection.query('SELECT * FROM Products WHERE ?', [{item_id: answer.Item}], function(err, data) {
            if (err) throw err;
            //if item doesnt have enough in stock
            if (data[0].stock_quantity < parseInt(answer.quantRequest)) {
                console.log("Insufficient quantity! That product is out of stock \nPlease select another product.");
                queryAllItems();
            } else {
                //vars for updating
                var updateQuant = data[0].stock_quantity - parseInt(answer.quantRequest);
                var totalPrice = data[0].price * parseInt(answer.quantRequest);
                //update database with new quant
                connection.query('UPDATE products SET stock_quantity = ? WHERE item_id = ?', [updateQuant, answer.Item], function(err, results) {
                    if(err) {
                        throw err;
                    } else {
                        //show user amount they will be charged for their purchase
                        console.log("Your order has been processed!");
                        console.log("Your card will be charged: $ " + totalPrice);
                        //ask if they want to buy anything else
                        inquirer.prompt({
                            name: "addPurchase",
                            type: "confirm",
                            message: "WOuld you like to purchase something else?",
                        }).then(function(answer) {
                            // if yes display product list
                            if (answer.addPurchase === true) {
                                queryAllItems();
                            } else {
                                // if no, terminate connection
                                console.log("Thank your for shopping with Bamazon!");
                                connection.end();
                            };
                        });
                    };
                });
            };
        });
    });
};