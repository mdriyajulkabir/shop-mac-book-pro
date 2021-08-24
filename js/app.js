/* 
          Main function part
*/
// Function 1
function updateStorageCost(part,cost){
    const memoryCost = document.getElementById(part +'-cost');
    memoryCost.innerText = cost;
    calculate();
};

// Function 2
function calculate(){
    const macCost = parseInt(document.getElementById('mac-cost').innerText);
    const memoryTotal =parseInt(document.getElementById('memory-cost').innerText);
    const storageTotal = parseInt(document.getElementById('storage-cost').innerText);
    const deliveryTotal = parseInt(document.getElementById('delivery-cost').innerText);
    const totalPrice = document.getElementById('total-price');
    const totalAmount = document.getElementById('total-amount');
    const total = macCost + memoryTotal + storageTotal + deliveryTotal;
    totalPrice.innerText = total;
    totalAmount.innerText = total;
};

/* 
        Handle event bubble part
*/
document.getElementById('apply-button').addEventListener('click',function(){
    const inputFeild = document.getElementById('apply-input');
    const input = inputFeild.value;
    if(input == 'stevekaku'){
        const macCost = parseInt(document.getElementById('mac-cost').innerText);
    const memoryTotal =parseInt(document.getElementById('memory-cost').innerText);
    const storageTotal = parseInt(document.getElementById('storage-cost').innerText);
    const deliveryTotal = parseInt(document.getElementById('delivery-cost').innerText);
    const totalPrice = document.getElementById('total-price');
    const totalAmount = document.getElementById('total-amount');
    const total = (macCost + memoryTotal + storageTotal + deliveryTotal) * 0.8;
    totalPrice.innerText = total;
    totalAmount.innerText = total;
    inputFeild.value = '';
    }
});
// Memory event bubble
document.getElementById('8gb-memory-storage').addEventListener('click', function(){
    updateStorageCost('memory', 0, 'total');
});

document.getElementById('16gb-memory-storage').addEventListener('click', function(){
    updateStorageCost('memory', 180);
});

// Storage event Bubble
document.getElementById('256gb-ssd-storage').addEventListener('click', function(){
    updateStorageCost('storage', 0);
});
document.getElementById('512gb-ssd-storage').addEventListener('click', function(){
    updateStorageCost('storage', 100);
});
document.getElementById('1tb-ssd-storage').addEventListener('click', function(){
    updateStorageCost('storage', 180);
});

// Delivey event Bubble
document.getElementById('free-delivery').addEventListener('click', function(){
    updateStorageCost('delivery', 0);
});
document.getElementById('delivery-charge').addEventListener('click', function(){
    updateStorageCost('delivery', 20);
});