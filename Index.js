//-------------------------------loading qualification from array-----------------------------------------------------
var qualf = document.getElementById('qual');
var options = ["Bachelors", "Honours", "Masters", "Doctoral"];

for (var i = 0; i < options.length; i++) {
  var opt = options[i];
  var newopt = document.createElement("option");
  newopt.textContent = opt + " Degree";
  newopt.value = opt;
  qualf.add(newopt);
}
//--------------------------------loading experience from array--------------------------------------------------------
var experience = document.getElementById('exps');
var options = ["1", "2", "3", "4", "5"];

for (var i = 0; i < options.length; i++) {
  var opt = options[i];
  var newopt = document.createElement("option");
  newopt.textContent = opt + " years";
  newopt.value = opt;
  experience.add(newopt);
}

//-----------------------------------generating checkbox based on array--------------------------------------------------
var code = document.getElementById('codelang');
var Lang = [{
    LanguageName: "C/C++",
    IsEnabled: false
  },
  {
    LanguageName: "Java",
    IsEnabled: true
  },
  {
    LanguageName: "C#",
    IsEnabled: true
  },
  {
    LanguageName: "PHP",
    IsEnabled: false
  },
  {
    LanguageName: "Python",
    IsEnabled: false
  }
];
for (var i = 0; i < Lang.length; i++) {
  var opt = Lang[i];
  var newopt = document.createElement("input");
  var s = opt.LanguageName;
  newopt.type = "checkbox";
  newopt.name = "cl";
  newopt.value = s;
  newopt.id = s;
  newopt.checked = opt.IsEnabled;
  var label = document.createElement('label');
  label.htmlFor = s;
  label.appendChild(document.createTextNode(s));
  var breakt = document.createElement('br');
  code.appendChild(breakt);
  code.appendChild(newopt);
  code.appendChild(label);
}

//-------------------------------------------onsubmit event handling function--------------------------------------
var f = document.getElementById('myform');
f.onsubmit = function(e) {
  e.preventDefault();
  var ftname = f.fname.value;
  var ltname = f.lname.value;
  var email = f.email.value;
  var cnumber = f.cno.value;
  var adds = f.address.value;
  var usname = f.uname.value;
  var password = f.pass.value;
  var gdr = f.gender.value;
  var q = f.qual.value;
  var exp = f.exp.value;
  var checkedValue = [];
  var inputElements = document.getElementsByName('cl');
  var j = 0;
  for (var i = 0; inputElements[i]; i++) {
    if (inputElements[i].checked) {
      checkedValue[j] = inputElements[i].value;
      j++;
    }
  }
  var employee = {
    firstName: ftname,
    lastName: ltname,
    email: email,
    phoneNumber: cnumber,
    address: adds,
    userName: usname,
    password: password,
    gender: gdr,
    qualification: q,
    experience: exp,
    codingLanguages: checkedValue
  };
  var output = '';
  for (var property in employee) {
    output = property + ': ' + employee[property] + '; ';
    console.log(output);
  }

  f.reset();

}
f.onreset=function(){
var t=  document.getElementById("Java").setAttribute("checked",true);
var t=  document.getElementById("C#").setAttribute("checked",true);
}
