function makeCake() {
  let updateCakeStatus;
  mix(updateCakeStatus);
}

function makePie() {
  let updatePieStatus;
  mix(updatePieStatus);
}

function updateStatus(statusText) {
  this.getElementsByClassName('status')[0].innerText = statusText;
}

function bake(updateFunction) {
  const status = `Baking at ${this.bakeTemp} for ${this.bakeTime}`;
  setTimeout(() => {
    cool(updateFunction);
  }, 2000);
}

function mix(updateFunction) {
  const status = `Mixing ${this.ingredients.join(', ')}`;
  setTimeout(() => {
    bake(updateFunction);
  }, 2000);
  updateFunction(status);
}

function cool(updateFunction) {
  const status = 'It has to cool! Hands off!';
  setTimeout(function () {
    this.decorate(updateFunction);
  }, 2000);
}

function makeDessert() {
  // add code here to decide which make... function to call
  // based on which link was clicked
}

function serve(message, customer) {
  // you shouldn't need to alter this function
  return (`${customer}, your ${this.name} is ready to eat! ${message}`);
}

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

document.addEventListener('DOMContentLoaded', (event) => {
  // you shouldn't need to alter this function
  const cookLinks = document.getElementsByClassName('js-make');
  for (let i = 0; i < cookLinks.length; i++) {
    cookLinks[i].addEventListener('click', makeDessert);
  }
});
