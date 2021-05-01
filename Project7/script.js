

function tipCalculator(results) {
    let mealCost = document.getElementById('mealCost').value;
    let tips = document.getElementById('tips').value;
    let totalTips = parseFloat(mealCost * (tips / 100)).toFixed(2);
    results =  parseFloat(mealCost) + parseFloat(totalTips);
    return document.getElementById('results').innerHTML = 'Your meal cost is ' + mealCost +'$'+ ', you are tipping ' + totalTips +'$' + ', your total will be ' + results +'$.';
}
