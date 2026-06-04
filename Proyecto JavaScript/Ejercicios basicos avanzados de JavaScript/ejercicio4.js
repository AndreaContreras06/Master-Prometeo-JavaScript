const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

console.log(aldeanos[3]);

aldeanos.push("Cervasio");

aldeanos[0] = "Bambina";

aldeanos.reverse();

const indiceNarciso = aldeanos.indexOf("Narciso");
if (indiceNarciso !== -1) {
    aldeanos.splice(indiceNarciso, 1, "Canela");
}

console.log(aldeanos[aldeanos.length -1]);

console.log(aldeanos);