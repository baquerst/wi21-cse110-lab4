### DevTools - Debugging
What was the bug?
- The bug was that ```calculateSum``` was receiving strings as the input for num1 and num2, so when result was intialized it was performing string concatenation instead of number arithmetic.

How would you fix it?
- I would fix it by explicitly converting the data types of num1 and num2 into integers by using the ```parseInt()``` function on num1 and num2 during the initialization of result, so that when result is returned it is an integer.

### DevTools - Network Tab
1. citylots.json
2. part2.js
3. 11.7MB
4. 70ms
5. Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36
6. Apache
7. Tue, 26 Jan 2021 22:14:13 GMT
8. application/json
9. ```fetchData```