const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config({ path: 'variables.env' });
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

// Mongoose schema imports
const VideoSchema = require('./models/Video');
const UserSchema = require('./models/User');
const VideoCommentSchema = require('./models/VideoComment');
const BlogCommentSchema = require('./models/BlogComment');

// GraphQl schemas imports
const { typeDefs } = require('./graphql/schema');
const { resolvers } = require('./graphql/resolvers');

// GraphQl-express setup
const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

// Initialze express schema with graphql types and resolvers
const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('DB connected'))
  .catch(err => console.log(err));

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsOptions));

// Set up jwt authentication middleware
app.use(async (req, res, next) => {
  const token = req.headers['authorization'];
  if (token !== 'null') {
    try {
      const currentUser = await jwt.verify(token, process.env.SECRET);
      req.currentUser = currentUser;
    } catch (err) {
      console.error(err);
    }
  }
  next();
});

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
  })
);

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress(({ currentUser }) => ({
    schema,
    context: {
      UserSchema,
      VideoSchema,
      VideoCommentSchema,
      BlogCommentSchema,
      currentUser,
    },
  }))
);

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log(`Server running at localhost:${PORT}`);
});
