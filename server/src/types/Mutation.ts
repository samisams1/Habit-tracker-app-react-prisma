import { PrismaClient } from "@prisma/client";
import { mutationType } from "nexus";

const prisma = new PrismaClient();
export const Mutation = mutationType({
    definition(t) {
   
        t.field('deleteHabit',{
            type:'Habit',
            resolve:(_, _args,ctx)=>{
                return prisma.habit.delete({
                    where:{
                        id:'clj8vr5d90000loc1ghxrf5j0'
                    }
                })
            }
        })
    },
    
})