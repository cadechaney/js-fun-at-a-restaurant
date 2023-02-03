function nameMenuItem(name) {
  return `Delicious ${name}`
}

function createMenuItem(item, price) {
  var newItem = {
    name: item,
    price: price,
    type: "breakfast"
  }
  return newItem

}

function addIngredients(cheese, ingredients) {
    if( ingredients.includes(cheese) === false) {
    return ingredients.push(cheese)
    } else {
      return 
    }
  } 

  function formatPrice(price) {
    var fullPrice = `$${price}`
    return fullPrice
   
  } 
  function decreasePrice () {

  }




module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  // createRecipe
}


