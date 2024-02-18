import {UserCred, UserModel} from "./schema.js";

// controller.js
export const getHelloMessage = async(req, res) => {
    // console.log(req.body, '---------body')
    // const {name} = req?.body
    try {
        const newPost = await UserModel.create(req.body);
        res.status(201).json(newPost);
      } catch (error) {
        res.status(500).json({ error: 'Error creating post' });
      }
  };

export const getUserDetails = async(req, res) => {
    // console.log(req.body,'----------------detail')
    try {
        // Use the find method to retrieve all users from the database
        const users = await UserModel.find({_id :'65a6ba33c82adaf0002ed52d' });
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ error: 'Error retrieving users' });
      }
}

export const postUserInfo = async(req, res) => {
  console.log(req.body, '---------body')
  try {
      const newPost = await UserCred.create(req.body);
      res.status(200).json(newPost);
    } catch (error) {
      res.status(400).json({ error: 'Error in postUserInfo' });
    }
};

// const generateAccessToken = (user) => {
//   return jwt.sign({ name: user.name },
//       "mysecretcode",
//       { expiresIn: "1d" });
// }

// const generateRefreshToken = (user) => {
//   return jwt.sign({ name: user.name },
//       "myrefreshcode");
// }

export const checkCredentials = async(req, res) => {
  // console.log(req.body,'----------------detail')
  try {
      // Use the find method to retrieve all users from the database
      const userInfo = await UserCred.findOne({user : req.body.user });
      console.log(userInfo, '--------------------userInfo');
      if(userInfo.pass === req.body.pass){
          // user token already exist or not
          // if not [user, accesstoken, refreshtoken]
          // access token 
          // const tokenExists = user.tokens.includes(mysecretcode);
          // if(!tokenExists==mysecretcode){
          //   const tokenExists = user.tokens.includes(myrefreshcode);
          // }
          //res.json({ tokenExists });
          return res.status(200).json({message: 'User credentials verified!!'});
      }else{
        return res.status(404).json({message: "User unauthorised!!"})
      }
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving users' });
    }
}

export const editCredentials = async(req, res) => {
  try{
    const info = await UserCred.findOne({user: req.body.user});
    console.log(info,'--------------------info');
    if(info.user === req.body.user){
      return res.status(200).json({message: 'User matched', info: info});
    }else{
      return res.status(204).json({message: 'User does not matched'});
    }
  }catch(err){
    res.status(500).json({err: 'Error of getting users'});
  }
}

export const updateCredentials = async (req, res) => {
  try {
    const id = req.body._id;

    // Ensure that id is provided and valid

    // Use destructuring to remove properties from the request body
    const { _id, __v, ...updateData } = req.body;

    // Use findByIdAndUpdate with { new: true } to get the updated document
    const updatedUser = await UserCred.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedUser) {
      return res.status(204).json({ message: 'User not updated' });
    } else {
      return res.status(200).json({ message: 'User updated', updatedUser: updatedUser });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// export const loginUser = async (req, res) => {
//   //res.send({ msg: "Ok" })
//   //console.log(req.body.username)

//   const user = await user.findOne({ username: req.body.username });
//   //console.log(user)
//   if (!user) {
//       return res.status(400).json("username incorrect")
//   }
//   try {
//       let match = await bcrypt.compare(req.body.password, user.password);
//       //console.log('Match', match)
//       if (match) {
//           const accessToken = generateAccessToken(user);
//           const refreshToken = generateRefreshToken(user);

//           user.accessToken = accessToken
//           user.refreshToken = refreshToken
//           user.save()

//           res.status(200).json(user)
//       } else {
//           res.status(400).json({message:"username or password incorrect!", loginToken: { accessToken: accessToken, refreshToken: refreshToken }});
//       }
//   } catch (err) {
//       console.log(err)
//       res.status(404).json("some error occured dunno what tho")
//   }

// }
// const authenticateToken = async (req, res, next) => {
//   const accessToken = req.headers.authorization;

//   if (!accessToken) {
//     return res.status(401).json({ error: 'Unauthorized' });
//   }

//   jwt.verify(accessToken, JWT_SECRET, async (err, user) => {
//     if (err) {
//       // Token is either invalid or expired
//       // Perform token refresh or handle accordingly
//       try {
//         const userRecord = await UserCred.find(req.body.user);

//         if (!userRecord) {
//           return res.status(404).json({ error: 'User not found' });
//         }

//         // Refresh the token and update it in the user's record
//         const newAccessToken = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: '1d' });
//         userRecord.tokens = userRecord.tokens.filter(t => t !== accessToken);
//         userRecord.tokens.push(newAccessToken);
//         await userRecord.save();

//         // Attach the new user information to the request
//         req.user = { ...userRecord.toObject(), accessToken: newAccessToken };
//         next();
//       } catch (error) {
//         return res.status(500).json({ error: 'Internal Server Error' });
//       }
//     }

//     // Token is valid, attach user information to the request
//     req.user = user;
//     next();
//   });
// };