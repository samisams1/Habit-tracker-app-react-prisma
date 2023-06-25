export const resetPasswordInput = inputObjectType({
    name: "resetPasswordInput",
    definition(t) {
      t.string("resetPasswordToken", { nullable: false });
      t.string("newPassword", { nullable: false });
    },
  });