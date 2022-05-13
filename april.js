const easterEgg = (ingredient) => {
  if(ingredient === "apples") {
    document.getElementById("apples").innerHTML = "🍎"
  } else if(ingredient === "brown-sugar") {
    document.getElementById("brown-sugar").innerHTML = "😎"
  } else if(ingredient === "sugar") {
    document.getElementById("sugar").innerHTML = "🤩"
  } else if(ingredient === "lemon") {
    document.getElementById("lemon").innerHTML = "🍋"
  } else if(ingredient === "cinnamon") {
    document.getElementById("cinnamon").innerHTML = "🥧"
  }
}