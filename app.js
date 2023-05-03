const iceCream = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1,
  qty: 0
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 1,
  qty: 0
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 2,
  qty: 0
}]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: 1,
  qty: 0
}, {
  name: 'Chocolate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: 2,
  qty: 0
}]

const containers = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2,
  qty: 0
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4,
  qty: 0
}]

// SECTION adding the items

// TOPPINGS
function addTopping(toppingName) {
  console.log('adding topping', toppingName)
  let foundTopping = toppings.find(item => item.name == toppingName)
  // @ts-ignore
  foundTopping.qty++
  console.log(foundTopping);
  drawCart()
}
// CONTAINERS
function addContainer(containerName) {
  console.log('adding container', containerName)
  let foundContainer = containers.find(item => item.name == containerName)
  // @ts-ignore
  foundContainer.qty++
  console.log(foundContainer)
  drawCart()
}
// ICE CREAM
function addIceCream(iceCreamName) {
  console.log('adding ice cream', iceCreamName)
  let foundIceCream = iceCream.find(item => item.name == iceCreamName)
  // @ts-ignore
  foundIceCream.qty++
  console.log(foundIceCream)
  drawCart()
}

// SECTION drawing the list

function drawCart() {
  console.log('drawing cart')
  let template = ''
  toppings.forEach(t => {
    if (t.qty > 0) {
      template += `
      <section class="row">
              <div class="col-6">${t.name}</div>
              <div class="col-3">${t.qty}</div>
              <div class="col-3">${t.price}</div>
            </section>
            `
    }
  })
  containers.forEach(c => {
    if (c.qty > 0) {
      template += `
      <section class="row">
              <div class="col-6">${c.name}</div>
              <div class="col-3">${c.qty}</div>
              <div class="col-3">${c.price}</div>
            </section>
            `
    }
  })
  iceCream.forEach(i => {
    if (i.qty > 0) {
      template += `
      <section class="row">
              <div class="col-6">${i.name}</div>
              <div class="col-3">${i.qty}</div>
              <div class="col-3">${i.price}</div>
            </section>
            `
    }
  })
  // @ts-ignore
  document.getElementById('cartList').innerHTML = template
  drawTotal()
}

// SECTION drawing the total

function drawTotal() {
  let total = 0
  toppings.forEach(t => t.qty > 0 ? total += t.qty * t.price : total += 0)
  console.log('total:', total)

  containers.forEach(c => c.qty > 0 ? total += c.qty * c.price : total += 0)
  console.log('total:', total)

  iceCream.forEach(i => i.qty > 0 ? total += i.qty * i.price : total += 0)
  console.log('total:', total)
  // @ts-ignore
  document.getElementById('total').innerText = total.toString()
}






