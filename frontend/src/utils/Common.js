// Extend the String prototype to capitalize the first letter of each word

String.prototype.capitalize = function () {
    return this.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

export const INCRESE_BY_ONE = 1;
  
  