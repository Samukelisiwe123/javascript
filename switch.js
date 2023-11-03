let marks = 0;
let result;
switch (true) {
case marks>=85:
result = "distinction";
break;
case marks>=75 && marks < 85:
result = "Excemption";
break;
case marks>=50 && marks < 75:
result = "Achieved";
break;
case marks<50 && marks>0:
result = "Not Achieved";
break;
default:
    result = "Didn't write";
}
console.log(result);