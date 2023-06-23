import { queryType } from "nexus";

export const Query = queryType({
    definition(t) {
        t.string('firstQuery',{
            resolve:()=>"this is my first Query"
        })
    },
})