function convertCase(type) {
    const input = document.getElementById("inputText").value;
  
    let result = "";
    switch (type) {
      case "upper":
        result = input.toUpperCase();
        break;
      case "lower":
        result = input.toLowerCase();
        break;
      case "title":
        result = input
          .toLowerCase()
          .split(" ")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
        break;
      case "sentence":
        result = input
          .toLowerCase()
          .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, c => c.toUpperCase());
        break;
      case "camel":
        result = input
          .toLowerCase()
          .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
        break;
    }
  
    document.getElementById("outputText").value = result;
  }
  
  function clearText() {
    document.getElementById("inputText").value = "";
    document.getElementById("outputText").value = "";
  }
  