const jwt = require('jsonwebtoken');

const createToken = (user, secret, expiresIn) => {
  const { userName, email } = user;
  return jwt.sign({ userName, email }, secret, { expiresIn });
};

exports.resolvers = {
  Query: {
    getAllVideos: async (root, args, { VideoSchema }) => {
      return await VideoSchema.find();
    },
  },

  Mutation: {
    addVideo: async (
      root,
      { title, category, description, userName },
      { VideoSchema }
    ) => {
      const newVideo = await new VideoSchema({
        title,
        category,
        description,
        userName,
      }).save();
      return newVideo;
    },

    signUpUser: async (root, { userName, email, password }, { UserSchema }) => {
      const user = await UserSchema.findOne({ userName });

      if (user) {
        throw new Error('Пользователь с таким именем уже существует');
      }

      const newUser = await new UserSchema({
        userName,
        email,
        password,
      }).save();
      return { token: createToken(newUser, process.env.SECRET, '6hr') };
    },
  },
};
