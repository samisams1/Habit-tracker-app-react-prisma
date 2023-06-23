import { PrismaClient } from "@prisma/client";
import { queryType } from "nexus"

const prisma = new PrismaClient();
export const Query = queryType({
    definition(t) {
      t.list.field('habits', {
       type: 'Habit',
        resolve: (_, _args, ctx) => {
         return prisma.habit.findMany()
        },
       })
     t.list.field('habit',{
        type:'Habit',
        resolve:(_, _args,ctx)=>{
            return prisma.habit.findMany({
                where:{
                    id:'clj8vr5d90000loc1ghxrf5j0'
                }
            })
        }
     })
    },
});