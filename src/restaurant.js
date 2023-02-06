
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
  for ()
}


module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}