let prices = [7,1,5,3,6,4];
var maxProfit = function (prices) {
    let low = prices[0];
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < low) {
            low = prices[i];
        }
        else if (profit < prices[i] - low) {
            profit = prices[i] - low;
        }
    }
    return profit;
};