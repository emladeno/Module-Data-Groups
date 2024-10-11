// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

// You can't iterate the fields in an object, but you can extract the values to an array and then iterate

for (const value of Object.values(author)) {
  console.log(value);
}
