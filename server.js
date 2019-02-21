const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const bodyParser = require('body-parser');

const VideoSchema = require('./models/Video');
const UserSchema = require('./models/User');

const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const { typeDefs } = require('./graphql/schema');
const { resolvers } = require('./graphql/resolvers');

const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('DB connected'))
  .catch(err => console.log(err));

const app = express();

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
  })
);

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema,
    context: {
      UserSchema,
      VideoSchema,
    },
  })
);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
