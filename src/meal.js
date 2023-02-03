function nameMenuItem(name) {
  return `Delicious ${name}`
}

function createMenuItem(item, price, meal) {
  var newItem = {
    name: item,
    price: price,
    type: meal
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
  function decreasePrice (price) {
      var decrease = price * .10
      return price - decrease
  }
  function createRecipe (title, ingredients, type) {
    var recipe = {
      title: title,
      ingredients: ingredients,
      type: type
    }
    return recipe
  }



module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe,
}


