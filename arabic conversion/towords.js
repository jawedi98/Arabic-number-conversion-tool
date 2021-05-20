var th = ["", "thousand", "million", "billion", "trillion"];
var dg = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
var dg1 = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
var tn = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
var tw = [
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

function toWords(s) {
  s = s.toString();
  s = s.replace(/[\, ]/g, "");
  if (s != parseFloat(s)) return "not a number";
  var x = s.indexOf(".");
  if (x == -1) x = s.length;
  if (x > 15) return "too big";
  var n = s.split("");
  alert(n);

  var str = "";
  var sk = 0;
  for (var i = 0; i < x; i++) {
    if ((x - i) % 3 == 2) {
      if (n[i] == "1") {
        str += tn[Number(n[i + 1])] + "";
        i++; // quit the for and the number is between 11-19
        sk = 1;
      } else if (n[i] != 0) {
        str += tw[n[i] - 2] + "-";
        sk = 1;
      }
    } //first if
    else if (n[i] != 0) {
      // x > 2 and first number # 0
      // 0235
      str += dg[n[i]] + " ";
      if ((x - i) % 3 == 0) str += "hundred "; // hundred
      sk = 1;
    }
    if ((x - i) % 3 == 1) {
      // thousand
      if (sk) str += th[(x - i - 1) / 3] + " ";
      sk = 0;
    }
  }

  var chaine = str.replace(/\s+/g, " ");
  var lastindex = chaine.substring(0, chaine.length - 1).lastIndexOf(" ");
  var finalchaine = chaine;
  // last 1 numbers # 00
  if (lastindex != -1 && s.substr(-2) != "00") {
    finalchaine =
      chaine.substring(0, lastindex) +
      " and " +
      chaine.substring(lastindex, chaine.length);
  }
  // if length == 6
  if (s.length == 6) {
    var hundredindex = finalchaine.indexOf("hundred") + 7;
    finalchaine =
      finalchaine.substring(0, hundredindex) +
      " and " +
      finalchaine.substring(hundredindex, finalchaine.length);
  }
  // if length == 4 and first two numbers #00
  if (s.length == 4 && s[1] != "0" && s[2] != "0") {
    finalchaine =
      codeTwo(s.substr(0, 2)) + " hundred and " + codeTwo(s.substr(-2));
  }
  document.getElementById("show").innerHTML = finalchaine;
  return finalchaine;
}

function codeTwo(q) {
  if (q[0] == "1") {
    return tn[Number(q[1])];
  } else {
    return tw[Number(q[0] - 2)] + "-" + dg1[Number(q[1])];
  }
}
