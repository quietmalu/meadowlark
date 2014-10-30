console.log("Starting app");
var casper = require('casper').create()
console.log("Create casper instance");

var x = require('casper').selectXPath;
console.log("Create xpath instance");

casper.userAgent('Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)');
console.log("Set useragent");

var startURL = 'http://localhost:3000/tours/hood-river';
console.log("Var for starturl set " + startURL);
casper.start('http://www.guru.com/emp/search.aspx?keyword=#&&page=1&sort=Earnings');
casper.log('Accessed ' + startURL);

casper.then(function() {
    casper.click(x('/html/body/a'));
    console.log('Access GroupRate link')
});

casper.then(function() {
    this.sendKeys('#fieldName', 'Joe');
    this.sendKeys('#groupSize', '12');
    this.sendKeys('#email', 'joe@abc.com');
    console.log('Entering data');
    casper.capture('testImage.png')
});