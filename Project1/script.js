let count = 0;

function counterPlus() {
    count++;
    document.getElementById('counter-display').innerHTML = count;
};

function counterMinus() {
    count--;
    document.getElementById('counter-display').innerHTML = count;
}
