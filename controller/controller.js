const User = require('../model/model.js')
const bcrypt = require('bcryptjs')



const Signup = async (req, res) => {
   const {name, email, password} = req.body
   try {
      let nameError = ''
      let emailError = ''
      let passwordError = ''

      if(!name){
         nameError = 'All fields are required!'
      }
      
      if(!password){
        passwordError = 'All fields are required!'
      }
         
      if(!email){
         emailError = 'All fields are required!'
      }

      if(name.length < 5){
         nameError = 'Name cannot be less than 5 characters'
      } 

      if(password.length < 5){
         passwordError = 'Password cannot be less than 5 characters'
      }

      const user = await User.findOne({email})

      if(user){
         emailError = 'Email address is already in use!'
      }

      if(nameError || emailError || passwordError){
         return res.json({success: false, nameError, emailError, passwordError})
      }

      const hashPassword = await bcrypt.hash(password, 10)

      const createUser = await User.create({
         name: name,
         email: email,
         password: hashPassword
      })

      await createUser.save()

      return res.json({success: true, message: 'Account created successfully!'})
      
      
   } catch (error) {
      return res.json({success: false, error: `Something went wrong: ${error}`})
   }
}



const Signin = async (req, res) => {
   const {email, password} = req.body

   try {
      let emailError = ''
      let passwordError = ''

      if(!email){
        emailError = 'All fields are required!'
      }

      if(!password){
         passwordError = 'All fields are required!'
      }

      if(emailError || passwordError){
         return res.json({success: false, emailError, passwordError})
      }

      const userEmail = await User.findOne({email})

      if(!userEmail){
         return res.json({success: false, emailError: 'Email address does not exist!'})
      }

      const passwordCheck = await bcrypt.compare(password, userEmail.password)

      if(!passwordCheck){
         return res.json({success: false, passwordError: 'Password is incorrect!'})
      }


      isVerified = true,
      lastLoggedIn = Date.now() 
      await userEmail.save()

      return res.json({success: true, message: 'Login successful...'})

   } catch (error) {
      return res.json({success: false, error: `Something went wrong: ${error}`})
   }
}


module.exports={Signup, Signin}