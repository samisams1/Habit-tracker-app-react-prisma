export const googleLoginInput = inputObjectType({
    name: "googleLoginInput",
    definition(t) {
      t.string("idToken", { nullable: false });
    },
  });