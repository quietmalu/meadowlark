casper.test.begin('Sign In Santa', 1, function(test){
    casper.start('http://localhost:3000/tours/hood-river');

//    var x = require('casper').selectXPath;

//    casper.then(function(){
//        this.click(".signInBtn");
//    });

    casper.wait(100, function(){
        test.assertUrlMatch(this.getCurrentUrl(), 'http://localhost:3000/tours/request-group-rate');
    });

    casper.wait(100, function(){
        this.fill('form[name="myForm"]', {
            'fieldName' : 'santa',
            'groupSize' : '12',
            'email': 'joe@abc.com'

        }, true);
        casper.capture('testImage.png')
    });

    casper.run(function(){
        test.done();
    });
});