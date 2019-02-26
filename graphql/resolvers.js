const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const createToken = (user, secret, expiresIn) => {
  const { userName, email } = user;
  return jwt.sign({ userName, email }, secret, { expiresIn });
};

exports.resolvers = {
  Query: {

    getAllVideos: async (root, args, { VideoSchema }) => {
      return await VideoSchema.find().sort({
        createdDate: 'desc'
      });
    },

    searchVideos: async (root, { searchTerm }, { VideoSchema }) => {
      if (searchTerm) {
        const searchResults = await VideoSchema.find({
          $text: { $search: searchTerm },
        }, {
            score: { $meta: "textScore" }
          }).sort({
            score: { $meta: "textScore" }
          });
        return searchResults;
      } else {
        const videos = await VideoSchema.find().sort({ createdDate: 'desc' });
        return videos;
      }
    },

    getVideo: async (root, { _id }, { VideoSchema }) => {
      const video = await VideoSchema.findOne({ _id });
      return video;
    },

    getUserVideos: async (root, { userName }, { VideoSchema }) => {
      const userVideos = await VideoSchema.find({ userName }).sort({
        createdDate: 'desc'
      });
      return userVideos;
    },
    getCurrentUser: async (root, args, { currentUser, UserSchema }) => {
      if (!currentUser) {
        return null;
      }
      const user = await UserSchema.findOne({
        userName: currentUser.userName,
      }).populate({
        path: 'comments',
        model: 'Video',
      });
      return user;
    }
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

    signInUser: async (root, { userName, password }, { UserSchema }) => {
      const user = await UserSchema.findOne({ userName });
      if (!user) {
        throw new Error('Пользователь с таким именем не найден');
      }

      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword) {
        throw new Error('Пароль неверен');
      }

      return { token: createToken(user, process.env.SECRET, '6hr') };
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
