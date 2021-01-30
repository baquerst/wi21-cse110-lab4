1. It will return the value of ```i``` because it was established through ```var``` so its values is visible outside the for loop.
2. It will return the value of discountedPrice because it was created by ```var``` within the for loop, so it becomes a function-level scope variable.
3. It will return the value of ```finalPrice```  because its scope is function-level so line 13 is within the scope of the variable.
4. It will return an array of the discounted prices from the original input. The function returns ```discounted``` which is an array declared in the function's code block so the content of ```discounted``` can be returned without an error. The elements in ```discounted``` were modified by a for loop within the function so it had access to it as well.
5. It will return an error because the variable ```i``` is only visible within the code block of the for loop.
6. It will return an error because the variable ```discountedPrice``` was only made available in the for loop code block.
7. It will return the value of ```finalPrice``` that was modified in the for loop code block because ```finalPrice``` was declared in the code block of the function so line 13 is within the scope of the variable.
8. The function will still return the correct array of discounted prices becuase ```discounted``` was within the scope of the return function. And the return function will pass on the variable ```discounted``` into the scope of what is calling it.
9. It will return an error because the variable ```i``` is only visible within the code block of the for loop.
10. It will return an error because ```discountedPrice``` is only within the scope of the for loop.
11. It will return ```finalPrice``` as 0, because it was declared as a ```const``` so it can't be assigned a new value.
12. The function would return an empty array, the same one intialized by ```const discounted``` at the beginning of the function. This is because ```const``` won't allow ```discounted``` to modify its values. So even though ```discounted``` is within the scope of return, it will remain empty.
13. A. student.name;
    
    B. student["Grad Year"];

    C. student.greeting();

    D. student["Favorite Teacher"].name;

    E. student.courseLoad[0];

14. A. The output is ```32``` because the ```+``` operator does not cause numeric conversion when any operand is a string.
    
    B. The output is ```1``` because the arithmetic operator ```-``` implicitly converts the operands to numbers.

    C. The output is ```3``` because null is implicitly converted to the number 0.

    D. The output is ```3null``` because the ```+``` operator will produce a string when any operand is a string.

    E. The output is ```4``` because true is implicitly converted to the number 1.

    F. The output is ```0``` becuase false is implicitly converted to the number 0, and null is converted to 0 as well.

    G. The output is ```3undefined``` because ```'3'``` is a string, so the operation will convert the operands and result into a string as well.

    H. The output is ```NaN``` because javascript implicitly converts ```undefined``` into NaN, so the result will become NaN as well.

15. A. The output is ```true``` because javascript converts the string ```2``` to its numeric value since the operands are of different types.
    
    B. The output is ```false``` because it's comparing strings based on lexicographical order and ```1``` from ```12``` is not greater than ```2```.

    C. The output is ```true``` because the string ```'2'``` is converted to a number and when checking for equality, 2 is equal to 2.

    D. The output is ```false``` because ```===``` is a strict equality operator, so it doesn't implicitly chnage the operand types, and so a string cannot be equal to a number.

    E. The ouput is ```false``` because ```true``` is implicitly converted to the number 1, and so 1 does not equal 2.

    F. The output is ```true``` because the ```Boolean()``` function converts 2 to be true, since 2 is not a predetermined value that produces false when using this function.

16. The ```==``` operator is the loose equality operator so it can trigger implicit type coercion, however, the ```===``` operator is a strict equality operator so it will not convert the types of the operands.
17. The output will be 'How are you?' because the first if statement will be false since the ```==``` operator will implicitly convert ```true``` to the number 1, and 1 is not equal to 2. In the next if statement, 2 is converted to true by the implicit boolean conversion, so the if statement executes there.
19. The result would be an array of [6,8,12] because when executing ```modifyArray``` the for loop will push a number into newArr by using the callback function, ```doSomething```. In ```doSomething``` it will take the argument passed into num, which is the element in the array, add 2 to it then return it using the second callback function which is multiplying it by 2.
21. 1
    4
    3
    2
