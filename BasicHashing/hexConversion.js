// ARRAY TO HEX
function arrayToHex(byteArray) {
    let hexString = '';
    for (let i = 0; i < byteArray.length; i++) {
      hexString += byteArray[i].toString(16).padStart(2, '0');
    //   The expression hexString += byteArray[i].toString(16).padStart(2, '0'); is used to convert a byte value into its 
    // hexadecimal representation and append it to a hexString. Ensures that the resulting hexadecimal string has a minimum length of 2 characters by padding with leading zeros if necessary. This is important for maintaining consistent formatting. For instance, 
    // if the byte value is 5, 5.toString(16) results in '5', and .padStart(2, '0') converts it to '05'
    }
    return hexString;
  }
  
  // Example usage:
  const byteArray = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
  const hexString = arrayToHex(byteArray);
  console.log(hexString); // Output: "48656c6c6f"
  

// HEX TO ARRAY

function hexToArray(hexString) {
    const byteArray = new Uint8Array(hexString.length / 2);
    for (let i = 0; i < byteArray.length; i++) {
      byteArray[i] = parseInt(hexString.substr(i * 2, 2), 16);
    }
    return byteArray;
  }
  
  // Example usage:
  const hex = "48656c6c6f";
  const byteArrayFromHex = hexToArray(hex);
  console.log(byteArrayFromHex); // Output: Uint8Array(5) [72, 101, 108, 108, 111]
  