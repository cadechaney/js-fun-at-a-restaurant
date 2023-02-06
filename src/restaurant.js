
function createRestaurant(restaurantName) {
  return {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
}

// function addMenuItem(restaurant, foodItem) {
//   for (var i = 0; i < restaurant.menus[foodItem.type].length; i++) {
//    if (restaurant.menus[foodItem.type][i] === foodItem) {
//       return restaurant.menus
//     }
// }  
// restaurant.menus[foodItem.type].push(foodItem)
// return restaurant.menus
// }

function addMenuItem(restaurant, foodItem) {
  for (var i = 0; i < restaurant.menus[foodItem.type].length; i++) {
    if (restaurant.menus[foodItem.type][i] === foodItem) {
      return restaurant.menus;
    }
  }
  restaurant.menus[foodItem.type].push(foodItem);
  return restaurant.menus;
}

function removeMenuItem (restaurant, foodItem, foodType) {
  if (restaurant.menus[foodType].length > 0) {
    for (var i = 0; i <= restaurant.menus[foodType].length; i++) {
    if (restaurant.menus[foodType][i].name === foodItem) {
       restaurant.menus[foodType].splice(i, 1)
       var nobodyEating = (`No one is eating our ${foodItem} - it has been removed from the ${foodType} menu!`)
    return nobodyEating
      }
    }
} else {
  var notSelling = (`Sorry, we don't sell ${foodItem}, try adding a new recipe!`)
  return notSelling
}
}


module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}