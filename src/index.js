var page = require('page')
var yo = require('yo-yo')
var empty = require('empty-element')

var main = document.getElementById('main-container')

page('/', function (ctx, next) {
	main.innerHTML = '<a href="/signup">signup</a>'
})

page('/signup', function (ctx, next) {

  var el = yo`<div class="container">
	  <div class="row">
		  <div class="col s10 push-s1">
			  <div class="row">
				  <div class="col m5 hide-on-small-only">
					  <img src="iphone.png" class="iphone"/>
				  </div>
				  <div class="col s12 m7">
					  <div class="signup-box">
						  <div class="row">
							  <h1 class="platzigram">Platzigram</h1>
							  <form class="signup-form">
								  <h2>Regístrate para ver fotos de tus amigos estudiando en platzi</h2>
								  <div class="section">
									  <a class="btn btn-fb hiden-on-small-only">Iniciar sesión con facebook</a>
									  <a class="btn btn-fb hide-on-med-and-up">Iniciar sesión</a>
								  </div>
								  <div class="divider"></div>
								  <div class="section">
									  <input type="email" name="email" placeholder="Correo electrónico">
									  <input type="text" name="name" placeholder="Nombre completo">
									  <input type="text" name="username" placeholder="Nombre de usuario">
									  <input type="password" name="password" placeholder="Contraseña">
									  <button class="btn waves-efect waves-light btn-signup" type="submit">Regístrate</button>
								  </div>
							  </form>
						  </div>
					  </div>
					  <div class="row">
						  <div class="login-box">
							  ¿Tienes una cuenta <a href="/signin">entrar</a>?
						  </div>
					  </div>
				  </div>
			  </div>
		  </div>
	  </div>
  </div>`;
	empty(main).appendChild(el)
})

page()
