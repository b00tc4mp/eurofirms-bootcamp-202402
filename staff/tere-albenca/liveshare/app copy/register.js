//front or presentation layer
        var form = document.querySelector('.form')  
        var anchor = document.querySelector('#login')

        form.onsubmit = function(event){
            event.preventDefault()

            var nameImput = form.querySelector('#name')
            var name = nameImput.value

            var lastnameImput = form.querySelector('#lastname')
            var lastname = lastnameImput.value

            var birthdateImput = form.querySelector('#birthdate')
            var birthdate = birthdateImput.value

            var usernameImput = form.querySelector('#username')
            var username = usernameImput.value

            var emailImput = form.querySelector('#email')
            var email = emailImput.value

            var passwordImput = form.querySelector('#password')
            var password = passwordImput.value
            
            //business layer

            try{
                logic.registerUser(name,lastname, birthdate, username,email,password)
                
                console.log('user registered')
                
                alert('user registered')

                form.reset()

                anchor.click()
            } catch(error){
                console.error(error.message)

                alert(error.message)
            }
        }