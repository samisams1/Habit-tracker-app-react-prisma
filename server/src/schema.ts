import { makeSchema } from "nexus";
import { nexusPrisma } from "nexus-plugin-prisma";
import { Mutation,Query,User,Habit, AuthPayload } from "./types";

const schema =makeSchema({
    types:[Query,Mutation,Habit,User,AuthPayload],
    plugins: [nexusPrisma()],
    outputs:{
        schema:`${__dirname}/generated/schema.graphql`,
        typegen:`${__dirname}/generated/types.ts`
    }
   
});

export default schema;

