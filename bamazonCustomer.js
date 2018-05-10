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
            name: "item_id",
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
        console.log("Item selected: " + input.item_id + "Quantity selected: " + input.quantRequest)
        var query = 'SELECT * FROM Products WHERE itemID=' + answer.item_id;
        connection.query(query, function(err, res) {
            if (answer.Quantity <= res) {
                for (var i = 0; i < res.length; i++) {
                    console.log("Your order of "+ res[i].stock_quantity + " " + res[i].product_name + " is now being processed.");
                    console.log("Your credit card will be charged " + res[i].stock_quantity*res[i].price)
                    console.log("Thank you for your order!")
                    connection.query("UPDATE products SET ? WHERE ?", [{StockQuantity: res[i].stock_quantity - quantRequest}, {id: res[chosenId].id}], 
                    function(err, res) {
                        queryAllItems();
                    });
                }
            } else {
                console.log("Insufficient quantity!");
            }
            queryAllItems();
        })
    });
}