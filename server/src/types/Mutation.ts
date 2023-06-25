import { PrismaClient } from "@prisma/client";
import { idArg, intArg, mutationType, stringArg } from "nexus";

const prisma = new PrismaClient();
export const Mutation = mutationType({
 definition(t) {
     t.field('createHabit',{
        type:'Habit',
        args: {
            name: stringArg(),
            streak: intArg(),
          },
        resolve:(_,{name,streak},ctx)=>{
            return prisma.habit.create({
                data: {
                    name,
                    streak,
                  },
            });
        }
     });
     t.nullable.field('updateHabit', {
        type: 'Habit',
        args: {
                 id: stringArg(),
                 name:stringArg(),
                 streak:intArg()
        },
        resolve: (_parent, { id,name ,streak}, ctx) => {
          return prisma.habit.update({
            where: { id: id},
            data: { name: name,
                  streak:streak
                 },

          })
        },
      });
      t.nullable.field('deleteHabit',{
        type:'Habit',
        args:{id:stringArg()},
        resolve:(_parent,{id},ctx)=>{
            return prisma.habit.delete({
                where:{
                    id:id
                }
            })
        }
      });
      t.nullable.field('incrementStreak', {
        type: 'Habit',
        args: {
            name: stringArg(),
          },
        resolve: (_parent, {name}, ctx) => {
          
            return prisma.habit.update({
                data: {
                    streak: 88,
                },
                where: {
                  name:name,
                },
              })
        },
      });
 },
})