import { makeSchema } from "nexus";
import { nexusPrisma } from "nexus-plugin-prisma";
import { Mutation } from "./types";
import { Habit } from "./types/Habit";
import { Query } from "./types/Query";

const schema =makeSchema({
    types:[Habit,Query,Mutation],
    plugins: [nexusPrisma()],
    outputs:{
        schema:`${__dirname}/generated/schema.graphql`,
        typegen:`${__dirname}/generated/types.ts`
    }
   
});

export default schema;

