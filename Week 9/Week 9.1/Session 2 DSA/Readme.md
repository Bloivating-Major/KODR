**Week 9 Day 1 DSA Session - Lecture 1**

This repository contains JavaScript code for several array-based problems:

**1. Divide Array Into Equal Pairs**

* **Description:** Determines if an array can be divided into pairs of identical integers.
* **Approach:** 
    * Sorts the array.
    * Iterates through the array in pairs, checking if each pair of elements is equal.
    * Returns `true` if all pairs are equal, otherwise `false`.

**2. Count of Pairs and Singles**

* **Description:** Counts the number of pairs and single elements in an array.
* **Approach:**
    * Sorts the array.
    * Iterates through the array, incrementing the `pairs` count for each pair of equal elements.
    * Calculates the count of single elements by subtracting twice the number of pairs from the total number of elements.

**3. Count of Pairs with Product Divisible by K**

* **Description:** Counts the number of pairs of elements in an array whose product is divisible by a given integer `k`.
* **Approach:**
    * Uses nested loops to iterate through all possible pairs of elements in the array.
    * Checks if the product of each pair is divisible by `k`.
    * Increments the `pair` count if the condition is met.

**4. Count of Valleys and Hills**

* **Description:** Counts the number of "valleys" and "hills" in an array, where a "valley" is a sequence of numbers that strictly decrease and then strictly increase, and a "hill" is the opposite.
* **Approach:**
    * Iterates through the array, comparing each element with its neighbors.
    * Identifies "valleys" and "hills" based on the relative values of the current element and its neighbors.
    * Increments the `count` for each "valley" and "hill" found.



I hope this README provides a helpful overview of the code in this repository.
