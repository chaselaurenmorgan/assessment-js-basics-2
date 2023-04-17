///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc,c)=> acc + c.price,0)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(cartTotal,couponValue,tax){

    const finallNumber = (cartTotal + (cartTotal * tax)) - couponValue
    return finallNumber
}



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    Name  - this property will capture the name of the customer. The name property will allow the restauraunt to identify the customer placing/picking up the order.  The name property value will be a string data types as names are typically written as text. 

    Email - this property will capture the email address of the customer. The email property will allow the restaurant to contact the customers about updates with the food(i.e. food that is out of stock).Also the restaurant can send promotional emails with coupons. The email property value will be string data type because emails are typically written as text.

    Payment Method -  This property will allow the restaurant to track and process the type of payments the customers uses, which would allow them to process the payment method correctly or refund the proper methods of payments.   The payment method  property value will be a string data types as the options will be represented with text. ('Cash', 'Credit Card','PayPal').

    Rewards Memmber -  This property will allow the restaurant to track the customers spending habits and loyalty to the restaraunt. The rewards member property value will be boolean data type because either the customer is in the rewards program (true) or not (false).

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer1 = {
   name : 'Micheal Douglass',
   email : 'basicinstics@gmail.com',
   paymentMethod : 'Credit Card',
   isRewardMember : true
}

console.log(customer1)