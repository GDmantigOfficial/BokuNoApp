let Personaje = document.getElementById("Personaje");
let image = document.getElementById("Imagen");
let Nombre = document.getElementById("Name");
let none = document.getElementById("Display");
let Nombres = {
    "Izuku" : "Izuku Midoriya",
    "Bakugo": "Katsuki Bakugo (Kacchan)",
    "Todoroki": "Shoto Todoroki",
    "Mirko": "Rumi Usagiyama (Rabbit Hero: Mirko)",
    "Uravity": "Ochaco Uraraka (Uravity)",
    "Toga": "Himiko Toga",
    "Shigaraki": "Tenko Shimura (Tomura Shigaraki)",
    "Dabi": "Toya Todoroki",
    "EraserHead": "Shota Aizawa",
    "AllMight": "Toshinori Yagi"
};
Personaje.addEventListener("change", () => {
    if (Personaje.value != ""){
        image.src = `Resources/${Personaje.value}.png`;
        Nombre.innerText = Nombres[Personaje.value];
        if(Nombres[Personaje.value] == undefined){
            image.src = `Resources/Default.jpg`;
            Nombre.innerText = "Character not Not found";
        }
    }
})
self.addEventListener("DOMContentLoaded", () =>{
    Personaje.value = "";
    none.src="Resources/Izuku.png";
    none.src="Resources/Bakugo.png";
    none.src="Resources/Todoroki.png";
    none.src="Resources/Mirko.png";
    none.src="Resources/Uravity.png";
    none.src="Resources/Toga.png";
    none.src="Resources/Shigaraki.png";
    none.src="Resources/Dabi.png";
    none.src="Resources/EraserHead.png";
    none.src="Resources/AllMight.png";
    none.style.display = "none";
})
