const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let fruit =0;

for (let i=0; i<foodSchedule.length; i++){
    if(!foodSchedule[i].isVegan){
        foodSchedule[i].name = fruits[fruit];
        foodSchedule[i].isVegan = true;
        fruit++;
    }
}

console.log(foodSchedule);