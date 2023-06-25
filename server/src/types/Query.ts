import { PrismaClient } from "@prisma/client";
import { arg, idArg, queryType, stringArg } from "nexus"
import { type } from "os";

const prisma = new PrismaClient();
export const Query = queryType({
  definition(t) {
      t.list.field('habits',{
       type:"Habit",
       resolve: (_, _args, ctx) => {
        return prisma.habit.findMany();
        
       }
      });
      t.list.field('habit',{
        type:"Habit",
        args: { id: idArg() },
        resolve: (_parent,{id},ctx)=>{
            return prisma.habit.findMany({
                where:{
                    id: String(id)
                }
            })
        }
      });
    t.list.field('findHabitByName',{
      type:"Habit",
      args:{name:stringArg()},
      resolve:(_parent,{name},ctx)=>{
        return prisma.habit.findMany({
          where:{
            name:name
          }
        })
      }
    })
  },
});