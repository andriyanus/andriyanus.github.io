(function() {

    function Slideshow( element ) {
        this.el = document.querySelector( element );
        this.init();
    }

    Slideshow.prototype = {
        init: function() {
            this.wrapper = this.el.querySelector( ".slider-wrapper" );
            this.slides = this.el.querySelectorAll( ".slide" );
            this.index = 0;
            this.total = this.slides.length;
            this.timer = null;
            
            this.action();
            this.stopStart();	
        },
        _slideTo: function( slide ) {
            var currentSlide = this.slides[slide];
            currentSlide.style.opacity = 1;
            
            for( var i = 0; i < this.slides.length; i++ ) {
                var slide = this.slides[i];
                if( slide !== currentSlide ) {
                    slide.style.opacity = 0;
                }
            }
        },
        action: function() {
            var self = this;
            self.timer = setInterval(function() {
                self.index++;
                if( self.index == self.slides.length ) {
                    self.index = 0;
                }
                self._slideTo( self.index );
                
            }, 3000);
        },
        stopStart: function() {
            var self = this;
            self.el.addEventListener( "mouseover", function() {
                clearInterval( self.timer );
                self.timer = null;
                
            }, false);
            self.el.addEventListener( "mouseout", function() {
                self.action();
                
            }, false);
        }
        
        
    };

    document.addEventListener( "DOMContentLoaded", function() {
        
        var slider = new Slideshow( "#slider-utama" );
        
    });


    })();

// FORM VALIDATION

function validateForm() {
    var name = document.forms["message-form"]["full-name"].value;
    var email = document.forms["message-form"]["email"].value;
    var date = document.forms["message-form"]["birth-date"].value;
    var gender = document.forms["message-form"]["gender"].value;
    var phone = document.forms["message-form"]["phone"].value;
    var messages = document.forms["message-form"]["messages"].value;

    if (name == ""|| email == "" || date =="" || gender=="" || phone == "" || messages == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }
    var atSymbol = email.indexOf("@");
    var dot = email.lastIndexOf(".");
    if (atSymbol < 1 || dot < atSymbol+2 || dot+2 >= email.length) {
        alert("Masukkan alamat email yang valid!");
        return false;
    }

    setSenderUI(name, email, date, gender, phone, messages);

    return false;
}

function setSenderUI(name, email, date, gender, phone, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-email").innerHTML = email;
    document.getElementById("sender-birth-date").innerHTML = date;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-phone").innerHTML = phone;
    document.getElementById("sender-messages").innerHTML = messages;
}