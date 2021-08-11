// Crear elemento y bot'on
// - Agregar un fichero .js
// -
// - let elem = window.getDocumentById("idDelElemento")
// - elem.addEventListener("click", cambiarImagenes());
// - Implementar el metodo cambiarMagenes
// -Six random numbers crear un metodo

// let myArray = ["logo.png...", .... ]

// cambiarImaaenes(){
//   nuevoArray = []
//   numero = random()...

//   for() agregar  {
//     push nuevoArray }

//     appendChild
// //

// const recomFS = [];
// recomFS[0] = "True Detective";
// recomFS[1] = "Shrek";
// recomFS[2] = "Iam Legend";
// recomFS[3] = "Goodfellas";
// recomFS[4] = "The Walking Dead";
// recomFS[5] = "Dr Strange";

// function rFS() {
//   const randomFS = [Math.floor(Math.random() * recomFS.length)];
//   document.getElementById("precom").innerHTML = recomFS[randomFS];
// }

let image_array = [
  "dr_strange.jpg",
  "goodfellas.jpg",
  "iamlegend.jpg",
  "shrek.jpg",
  "truedetective.jpg",
  "twd.jpg"
];

function get_random_image() {
  // Create a random index
  let random_index = Math.floor(Math.random() * image_array.length);

  // Get an image from the previously defined random_index
  let selected_image = image_array[random_index];

  // Display the recommended image(Film or Tv show)
  document.getElementById(
    "image_collection"
  ).src = `./images/${selected_image}`;
}
