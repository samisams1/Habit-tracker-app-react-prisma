export const facebookLoginInput = inputObjectType({
    name: "facebookLoginInput",
    definition(t) {
      t.string("userId", { nullable: false });
      t.string("accessToken", { nullable: false });
    },
  });