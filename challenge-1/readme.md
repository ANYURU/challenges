# Friday's challenge:
Write a function to determine whether a number is a Disarium.

**HINT:** 
A number is considered a **Disarium** if the sum of its digits powered with their respective positions is equal to the number itself.

89 = 8(1) + 9(2) = 8 + 81 = 89.

>
>#### Psuedocode
>##### 1. Make digits of the number
>* Make the numbers a string and split it into digits making an array of digits.
>##### 2. For each digit in the array, raise it to a power respective of its postion.
>* Declare a sum and go on updating it by adding to it a the digit raised to a power respective of its position in the array of digits forEach digit.
>##### 3. Compare the number with the sum you've got and reutrn true if they are the strictly equal and false if they are not strictly equal.
>* This can be achieved using a ternary operator

>
> Note:
> I implemented this solution using js
>

>#### Running Tests

