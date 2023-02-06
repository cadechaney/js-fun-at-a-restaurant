
function takeOrder (orderNum, deliveryOrders) {
 
  if (deliveryOrders.length < 3) {
     deliveryOrders.push(orderNum)
  } else { 
    return deliveryOrders
  }
}  

//function refundOrder (orderNum, deliveryOrders) {
  //console.log(deliveryOrders[1].orderNumber )
  //console.log(deliveryOrders)
  //console.log(orderNum)
  //console.log(deliveryOrders.splice(orderNum))
  function refundOrder(orderNumber, deliveryOrders) {
    for (var i = 0; i < deliveryOrders.length; i++) {
      if (deliveryOrders[i].orderNumber === orderNumber) {
        deliveryOrders.splice(i, 1);
      }
  }
  return deliveryOrders;
}

function listItems (deliveryOrders) {
 //items = deliveryOrders[i].item
  var items = []
 for (var i = 0; i < deliveryOrders.length; i++) {
   items.push(deliveryOrders[i].item)
  }
  return items.join(', ')
}
  
function searchOrder (deliveryOrders, itemName) {
 //console.log(deliveryOrders)
 for (var i = 0; i < deliveryOrders.length; i++) 
 if (deliveryOrders[i].item === itemName) {
 return true
}
return false
}






module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}