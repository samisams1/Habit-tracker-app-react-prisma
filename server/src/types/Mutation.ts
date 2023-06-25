import { PrismaClient } from "@prisma/client";
import { compare, hash } from "bcrypt";
import { idArg, intArg, mutationType, nonNull, stringArg } from "nexus";
import { APP_SECRET } from "../utils/utils";
import * as jwt from "jsonwebtoken";
import mailService from "../services/sendEmail";
const prisma = new PrismaClient();
export const Mutation = mutationType({
 definition(t) {
    t.nonNull.field("signup", { // 1
        type: "AuthPayload",  
        args: {  
            email: nonNull(stringArg()), 
            password: nonNull(stringArg()),
            name: nonNull(stringArg()),
        },
        async resolve(parent, args, context) {
            
            const { email, name } = args;
            const password = await hash(args.password, 10);
            const isUserExist = await prisma.user.findFirst({
                where: {
                  email
                }
              });
            
              if (isUserExist) {
                throw new Error("Email is already associated with another user");
              }
            const user = await prisma.user.create({
                data: { email, name, password },
            });
            const token = jwt.sign({ userId: user.id }, APP_SECRET);
            const html = mailService.activationEmail(token);
            return {
                token,
                user,
            };
        },
    });
    t.nonNull.field("login", { 
        type: "AuthPayload",
        args: {
            email: nonNull(stringArg()),
            password: nonNull(stringArg()),
        },
        async resolve(parent, args, context) {
            const user = await prisma.user.findUnique({
                where: { email: args.email },
            });
            if (!user) {
                throw new Error("No such user found");
            }
            const valid = await compare(
                args.password,
                user.password,
            );
            if (!valid) {
                throw new Error("Invalid password");
            }
            const token = jwt.sign({ userId: user.id }, APP_SECRET);
            return {
                token,
                user,
            };
        },
    });
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