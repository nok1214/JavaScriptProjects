const getRandomMealsButton = document.getElementById("getRandomMeals");
const mealContainer = document.getElementById("mealContainer");

//add event listeners to window with 'load' method;
window.addEventListener("load", () => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((response) => {
      createMeal(response.meals[0]);
    })
    .catch((error) => {
      console.log(error);
    });
});

//add event listeners to the generate random meals button with 'click' method;
getRandomMealsButton.addEventListener("click", () => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((response) => {
      createMeal(response.meals[0]);
    })
    .catch((error) => {
      console.log(error);
    });
});

const createMeal = (meal) => {
  const ingredients = [];

  // Get all ingredients from the object with maxium 20 items;
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      // Stop if there are no more ingredients;
      break;
    }
  }

  //creating inner HTML items to display;
  //using ternary operator to check if the properties are available;
  const newInnerHTML = `
		<div class="row">
			<div class="col">
				<img src="${meal.strMealThumb}" alt="Meal Image">
				${
          meal.strCategory
            ? `<p><strong>Category:</strong> ${meal.strCategory}</p>`
            : ""
        }
				${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ""}
				${meal.strTags ? `<p><strong>Tags:</strong> ${meal.strTags}</p>` : ""}
				<h5>Ingredients:</h5>
				<ul>
					${ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
				</ul>
			</div>
			<div class="col">
				<h4>${meal.strMeal}</h4>
				<p>${meal.strInstructions}</p>
			</div>
		</div>
		${
      meal.strYoutube
        ? `
		<div class="row">
			<h4>Video Recipe</h4>
			<div class="video-container">
				<iframe title="video-recipe" width="650" height="500"
				src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
				</iframe>
			</div>
		</div>`
        : ""
    }
	`;

  mealContainer.innerHTML = newInnerHTML;
};