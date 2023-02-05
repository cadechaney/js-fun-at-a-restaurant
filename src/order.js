
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
    





module.exports = {
   takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
}