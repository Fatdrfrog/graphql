import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
const typeDefs = `#graphql
    type Song {
        author: String
        title: String
    }
    
    type Query {
        songs: [Song]
    }`;
const songs = [
    {
        author: "91",
        title: "Suraqtar",
    },
    {
        author: "91",
        title: "Kaytadan",
    },
];
const resolvers = {
    Query: {
        songs: () => songs,
    },
};
const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
console.log("started server on port: " + url);
