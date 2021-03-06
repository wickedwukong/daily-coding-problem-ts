/*
This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer in linear
time and constant space. In other words, find the lowest positive integer that
does not exist in the array.
The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2.
The input [1, 2, 0] should give 3.

You can modify the input array in-place.
*/

export function findTheLowestPositiveIntegerThatDoesNotExistInTheArray(numbers: number[]): number {
    if (!numbers.some((i) => i > 0)) {
        return 1;
    }

    function sortedPositiveValuesInList() {
        return numbers.slice(0).filter((i) => i > 0).sort();
    }

    function lowestPositiveValueInList() {
        return sortedPositiveValuesInList()[0];
    }

    function highestPositiveValueInList() {
        const sortedPositiveValues = sortedPositiveValuesInList();
        return sortedPositiveValues[sortedPositiveValues.length - 1];
    }

    function generatedValuesBetweenLowestAndHighest() {
        const valueList = [];

        for (let i = (lowestPositiveValueInList() - 1);
             i <= (highestPositiveValueInList() + 1) - lowestPositiveValueInList() + 1; i++) {
            valueList.push(i);
        }
        return valueList;
    }

    const values = generatedValuesBetweenLowestAndHighest();

    return values.filter((i) => !numbers.some((it) => it === i) ).filter((i) => i > 0)[0];
}
