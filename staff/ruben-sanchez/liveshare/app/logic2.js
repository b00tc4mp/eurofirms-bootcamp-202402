// business layer (logic)

var logic = (function (){
    //helpers
})

    function validateName(name) {
        if (name.length < 1)
            throw new Error('name is lower than 1 character')

        var nameIsBlank = true

        for(var i =0; i < name.length && nameIsBlank; i++) {
            var char = name[i]

            if (char !== ' ')
            nameIsBlank = false
        }
        if (nameIsBlank)
            throw new Error('name is blank')

    }

    function validateBirthdate(birthdate) {
        if (birthdate.length !== 10)
            throw new Error('birthdate does not have 10 characters')

        if(birthdate.includes(' '))
            throw new Error('birthdate has a space character')

        if(birthdate.indexOf('-')!==4 || birthdate.lastIndexOf('-')!==7)
            throw new Error('birthdate dashes are not in correct position')

    }
    // TODO check that birthdate has only 2 dashes
    // ToDo check that birthdate has no alphabet characters (only numbers and 2 dashes)
    // TODO check that birthdate is equal or greater than 18 years old

    function validateUsername(username) {
        if ( username.length<3)
            throw new Error('username is lower than 3 characaters')

        if (username.includes(' '))
            throw new Error(username has a space character)
        
    }
    function validateEmail(email){
        if (email.length< 6)
            throw new error('email is lower than  6 characaters')

        if(!email.includes('@'))
            throw new Error('email has no @')

        }