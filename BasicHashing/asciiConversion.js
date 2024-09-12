// Ascii To Bytes
function bytesToAscii(byteArray) {
    return byteArray.map(byte => String.fromCharCode(byte)).join('');
  }
  
  // Example usage:
  const bytes = [72, 101, 108, 108, 111]; // Corresponds to "Hello"
  const asciiString = bytesToAscii(bytes);
  console.log(asciiString); // Output: "Hello"

//   Bytes To Ascii
function asciiToBytes(asciiString) {
    const byteArray = [];
    for (let i = 0; i < asciiString.length; i++) {
      byteArray.push(asciiString.charCodeAt(i));
    }
    return byteArray;
  }
  
  // Example usage:
  const ascii = "Hello";
  const byteArray = asciiToBytes(ascii);
  console.log(byteArray); // Output: [72, 101, 108, 108, 111]



//   UInt8Array TO Ascii
// function bytesToAscii(byteArray) {
//     return new TextDecoder().decode(byteArray);
//   }
  
//   // Example usage:
//   const bytess = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
//   const asciiiString = bytesToAscii(bytess);
//   console.log(asciiiString); // Output: "Hello"
  

function asciiToBytes(asciiString) {
    // return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
    return new TextEncoder().encode(asciiString);
  }
  
  // Example usage:
  const asciii = "Hello";
  const byteArrayy = asciiToBytes(asciii);
  console.log(byteArrayy); // Output: Uint8Array(5) [72, 101, 108, 108, 111]
  

  