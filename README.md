# SearchEngine

# Description
    In this project, I've realized my search algorithm

# DataBase
    In place of DB, I am using JSON files (users.json, cars.json)

# Algorithm
    The Algorithm is designed to rate the similarity between two strings, for example, 
    
    the input value and the user's Name. The rating indicates how closely the two strings match, 
    
    comparison with higher ratings will represent closer matches. 
    
    I have a specially designed data structure 
    
    - PriorityList - that will place objects with a higher rating in lower indices 
    
    (i.e. the object with the highest priority will be placed closer or in the 0 index). 
    
    If the rating is 0 it will not considered to be placed in our list 
    
    (the logic of not including the objects with 0 rating is out of PriorityList implementation)

# Algorithm examples
Let's suppose that we have a user with properties
    
    {First Name: Abir, Last Name: Armstrong,  Age: 31,  Posts: Post 2, Post 2,  Friends: , Priority: 21}

if we want to search for this user exactly we can write

    input - Armstrong 

or

    input - ARMSTRONG

It will work even if you write with some typos like`

    input - AMSTRONG

or

    input - astrong

    !!! IT IS IMPORTANT TO NOTE THAT IN CASE OF USERS THE ALGORITHM WILL CONSIDER JUST THE 'Name' AND 'Last Name' !!!

    !!! AND IN CASE OF CARS THE ALGORITHM WILL CONSIDER MATCHES ONLY IN 'model' AND 'brand' !!!
