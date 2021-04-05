// Your code here
function wrapAdjective(visualFlair = "*") {
    return function (adjective) {
        return `You are ${visualFlair}${adjective}${visualFlair}!`
    }
}

// function saturdayFun(activity = 'roller-skate') {
//     return `I like to ${activity} on saturdays.`;
// } (my version which could not get the test to pass)
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

// let mondayWork = function(toDo = 'go to the office') {
//     return `I have to ${toDo} on Monday.`
// } (my version which could not get the test to pass)
let mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

let Calculator = {
    add: function (num1, num2) {
        return num1 + num2;
    },
    subtract: function (num1, num2) {
        return num1 - num2;
    },
    multiply: function (num1, num2) {
        return num1 * num2;
    },
    divide: function (num1, num2) {
        return num1 / num2;
    }
};

// function actionApplyer(startInt, funcArray) {
//     let num = startInt;
//     if (!funcArray) {
//         return num;
//     }
//     for (i = 0; i < funcArray.length; i++) {
//         num = funcArray[i](num);
//     }
//     return num;
// } (my version which could not get the test to pass)
let actionApplyer = function (start, ray) {
    let a = start

    for (let i = 0; i < ray.length; i++) {
        a = ray[i](a)
    }

    return a
}