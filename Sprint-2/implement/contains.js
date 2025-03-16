function contains(obj,key) {
if(typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    throw new Error("Invalid input: must be an object");
} 
    return key in obj;

 }



module.exports = contains;
