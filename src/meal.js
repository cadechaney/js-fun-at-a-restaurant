function nameMenuItem(name) {
  return `Delicious ${name}`
}

function createMenuItem(item) {
  var newItem = {
    name: item,
    price: 10.99,
    type: "breakfast"
  }
  return newItem

}







module.exports = {
  nameMenuItem,
  createMenuItem,
  // addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


