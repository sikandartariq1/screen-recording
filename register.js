
/* SmtpJS.com */
Email = { send: function (a, b, c, d, e, f, g) { var h = Math.floor(1e6 * Math.random() + 1), i = "https://smtpjs.com/smtp.aspx?"; i += "From=" + a, i += "&to=" + b, i += "&Subject=" + encodeURIComponent(c), i += "&Body=" + encodeURIComponent(d), void 0 == e.token ? (i += "&Host=" + e, i += "&Username=" + f, i += "&Password=" + g, i += "&Action=Send") : (i += "&SecureToken=" + e.token, i += "&Action=SendFromStored"), i += "&cachebuster=" + h, Email.ajax(i) }, sendWithAttachment: function (a, b, c, d, e, f, g, h) { var i = Math.floor(1e6 * Math.random() + 1), j = "https://smtpjs.com/smtp.aspx?"; j += "From=" + a, j += "&to=" + b, j += "&Subject=" + encodeURIComponent(c), j += "&Body=" + encodeURIComponent(d), j += "&Attachment=" + encodeURIComponent(h), void 0 == e.token ? (j += "&Host=" + e, j += "&Username=" + f, j += "&Password=" + g, j += "&Action=Send") : (j += "&SecureToken=" + e.token, j += "&Action=SendFromStored"), j += "&cachebuster=" + i, Email.ajax(j) }, ajax: function (a) { var b = Email.createCORSRequest("GET", a); b.onload = function () { var a = b.responseText; console.log(a) }, b.send() }, createCORSRequest: function (a, b) { var c = new XMLHttpRequest; return "withCredentials" in c ? c.open(a, b, !0) : "undefined" != typeof XDomainRequest ? (c = new XDomainRequest, c.open(a, b)) : c = null, c } };
var mailbody;


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById('key_submit').onclick = async function(event){
  var email = document.getElementById('email').value
  var key = document.getElementById('key').value;

  if(encrypt(email) == key && key != ""){

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();

  if(dd<10) {
      dd = '0'+dd
  }

  if(mm<10) {
      mm = '0'+mm
  }

  today = mm + '/' + dd + '/' + yyyy;

  chrome.storage.sync.set({'usermail':email});
  chrome.storage.sync.set({'key':key});
  chrome.storage.sync.set({'register_at':today})

  Email.send("f138130@nu.edu.pk",
  "sikandartariq1@gmail.com",
  "New Registration",
  "New User registration with email : \n "+email,
  {token: "c14a3cf8-f143-444f-9ced-417d80017c75"});

  await sleep(2000);


  document.getElementById('lblmsg2').innerText = "Registration Complete.";
  }
  else{
    document.getElementById('lblmsg2').innerText = "Invalid Key or Email";
  }
}


document.getElementById('send_email').onclick = async function(){
    var email = document.getElementById('email').value
    mailbody = encrypt(email);

Email.send("f138130@nu.edu.pk",
email,
"Product Key",
"Please use this product key to register: \n "+mailbody+ " \nIf you didn't request for this, ignore this email",
{token: "c14a3cf8-f143-444f-9ced-417d80017c75"});

await sleep(2000);
document.getElementById('lblmsg').innerText = "Please Check your email for the product key";

}

function encrypt(b){for(var c="",a=0;a<b.length;a++)"a"==b[a]&&(c+="TYtUC"),"b"==b[a]&&(c+="UIgiu"),"c"==b[a]&&(c+="YTbjs"),"d"==b[a]&&(c+="UiyhR"),"e"==b[a]&&(c+="Opnxj"),"f"==b[a]&&(c+="WerCx"),"g"==b[a]&&(c+="YnmdS"),"h"==b[a]&&(c+="LKmBV"),"i"==b[a]&&(c+="LOLPJ"),"j"==b[a]&&(c+="gtyMn"),"k"==b[a]&&(c+="CDGtg"),"l"==b[a]&&(c+="YuNmB"),"m"==b[a]&&(c+="OlOkM"),"n"==b[a]&&(c+="QWErt"),"o"==b[a]&&(c+="TyUiO"),"p"==b[a]&&(c+="RtYUU"),"q"==b[a]&&(c+="QwsDr"),"r"==b[a]&&(c+="KnHml"),"s"==b[a]&&(c+="VGYnn"),
"t"==b[a]&&(c+="7i8fh"),"u"==b[a]&&(c+="VbbMM"),"v"==b[a]&&(c+="UUUin"),"w"==b[a]&&(c+="PLMnB"),"x"==b[a]&&(c+="QAZxC"),"y"==b[a]&&(c+="IjnBv"),"z"==b[a]&&(c+="Evsfj"),"@"==b[a]&&(c+="ihCsF"),"."==b[a]&&(c+="iuYhn"),"_"==b[a]&&(c+="qwIHB"),"1"==b[a]&&(c+="IkmGv"),"2"==b[a]&&(c+="rgbSx"),"3"==b[a]&&(c+="UhncD"),"4"==b[a]&&(c+="gtsJb"),"5"==b[a]&&(c+="edCFg"),"6"==b[a]&&(c+="yhNcF"),"7"==b[a]&&(c+="suydu"),"8"==b[a]&&(c+="zXMNC"),"9"==b[a]&&(c+="JKsfu");return c};
