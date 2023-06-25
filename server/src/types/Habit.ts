import { idArg, objectType } from "nexus";

export const Habit = objectType({
    name:"Habit",
    definition(t) {
       t.string('id')
       t.string('name')
       t.string('streak')
    },
})