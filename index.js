const cake = {
  name: 'German Chocolate Cake',
  ingredients: ['eggs', 'flour', 'oil', 'chocolate', 'sugar', 'butter'],
  topping: 'coconut frosting',
  bakeTemp: '425 degrees',
  bakeTime: '45 minutes',
  customer: 'Tommy',
  decorate(updateFunction) {
    const status = `Decorating with ${this.topping}. Ready to eat soon!`;
    updateFunction(status);
    setTimeout(() => {
      updateFunction(serve.apply(this, ['Happy Eating!', this.customer]));
    }, 2000);
  },
};

const pie = {
  name: 'Apple Pie',
  ingredients: ['apples', 'flour', 'eggs', 'butter', 'sugar'],
  topping: 'streusel',
  bakeTemp: '350 degrees',
  bakeTime: '75 minutes',
  customer: 'Tammy',
};

function makeCake() {
  let updateCakeStatus = updateStatus.bind(this);
  mix.call(cake, updateCakeStatus);
}

function makePie() {
  let updatePieStatus = updateStatus.bind(this);
  pie.decorate = cake.decorate.bind(pie);
  mix.call(pie, updatePieStatus);
}

function updateStatus(statusText) {
  this.getElementsByClassName('status')[0].innerText = statusText;
}

function bake(updateFunction) {
  const status = `Baking at ${this.bakeTemp} for ${this.bakeTime}`;
  updateFunction(status);
  setTimeout(() => {
    cool.call(this, updateFunction);
  }, 2000);
}

function mix(updateFunction) {
  const status = `Mixing ${this.ingredients.join(', ')}`;
  updateFunction(status);
  setTimeout(() => {
    bake.call(this, updateFunction);
  }, 2000);
  updateFunction(status);
}

function cool(updateFunction) {
  const status = 'It has to cool! Hands off!';
  updateFunction(status);
  setTimeout(() => {
    this.decorate(updateFunction);
  }, 2000);
}

function makeDessert() {
  if (this.id === 'make-cake') {
    const cakeNode = document.getElementById('cake');
    makeCake.call(cakeNode);
  } else if (this.id === 'make-pie') {
    const pieNode = document.getElementById('pie');
    makePie.call(pieNode);
  }
}

function serve(message, customer) {
  return (`${customer}, your ${this.name} is ready to eat! ${message}`);
}


document.addEventListener('DOMContentLoaded', (event) => {
  // you shouldn't need to alter this function
  const cookLinks = document.getElementsByClassName('js-make');
  for (let i = 0; i < cookLinks.length; i++) {
    cookLinks[i].addEventListener('click', makeDessert);
  }
});
