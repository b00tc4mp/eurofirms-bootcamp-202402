# E - comerce

## Intro

The web that we are intended to create is a e-commerce of rugby T-shirts , the first page will be the home page where we will see the T-shirt , to buy you would have to register and login , to register the web page will redirect you to a register page and when you have finished it will redirect you to login page where you can login to gain access to shopping cart , and will be able to put products in the shopping cart. 
When you have finished to buy you can click to access the checkout page where you can select your payment method , if every thing is in order you  will be shown a message saying that the bought has been successful.

## Functional description

-look up for T-shirts 
-add several T-shirts to the shopping cart
-Select the method of payment
-Select the method of delivery


## UI Design

-TO DO Figma


## Technical description

-Javascript
-React
-MongoDB
-Node 
-Express


## Modules

API (server)

APP (client)

COM(shared files)

## Data Model

User
    -id(string, required)
    -name(string, required)
    -email(string, required)
    -username(string, required)
    -password(string, required)
    -Country(string, requierd)
    -
    -direction(string, required)

T-shirt
    -id(string, required)
    -name(string, required)
    -brand(string, required)
    -type(string, required)
    -color(string, optional)
    -price(number, required)

Others
    -Shipment method(select element)
    - Payment options(select element)