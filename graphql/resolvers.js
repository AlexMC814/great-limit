exports.resolvers = {
  Query: {
    getAllVideos: async (root, args, { VideoSchema }) => {
      return await VideoSchema.find();
    },
  },

  Mutation: {
    addVideo: async (
      root,
      { videoTitle, category, description, userName },
      { VideoSchema }
    ) => {
      const newVideo = await new VideoSchema({
        videoTitle,
        category,
        description,
        userName,
      }).save();
      return newVideo;
    },
  },
};
