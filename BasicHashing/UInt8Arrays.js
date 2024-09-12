// Why use UInt8Array over native arrays ?
// They use less space. Every number takes 64 bits (8 bytes). But every value in a UInt8Array takes 1 byte.
// UInt8Array Enforces constraints - It makes sure every element doesn’t exceed 255.

let binaryRepresentation = new TextEncoder().encode("a");
console.log(binaryRepresentation);