var fruits = {
    1: 'apple',
    2: 'lemon',
    3: 'watermelon',
    4: 'banana',
    5: 'pinneapple',
    count: 5
}

for (var index = 1; index <= fruits.count; index = index + 1) {
    var fruit = fruits[index]

    console.log(fruit)
}

// VM2711:13 apple
// VM2711:13 lemon
// VM2711:13 watermelon
// VM2711:13 banana
// VM2711:13 pinneapple