const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log("Merged Array:", arr2);

const user = { name: "Raghav", role: "Backend" };
const updatedUser = { ...user, role: "Backend Trainee" };
console.log("Updated Object:", updatedUser);