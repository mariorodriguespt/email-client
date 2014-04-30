(function(){
Template.__define__("Login", (function() {
  var self = this;
  var template = this;
  return HTML.Raw('<div class="container">\n        <div class="row">\n            <div class="col-sm-6 col-md-4 col-md-offset-4">\n                <div class="account-wall">\n                    <img class="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120" alt="">\n                    <form id="form-login" class="form-login">\n                        <input id="login-email" type="text" class="form-control" placeholder="Email" required="" autofocus="">\n                        <input id="login-password" type="password" class="form-control" placeholder="Password" required="">\n                        <button class="btn btn-lg btn-primary btn-block" type="submit">\n                            Sign in</button>\n                        <label class="checkbox pull-left">\n                            <input type="checkbox" value="remember-me">\n                            Remember me\n                        </label>\n                        <a href="#" class="pull-right need-help">Need help? </a><span class="clearfix"></span>\n                    </form>\n                </div>\n                <a href="#" class="text-center new-account">Create an account </a>\n            </div>\n        </div>\n    </div>');
}));

})();
