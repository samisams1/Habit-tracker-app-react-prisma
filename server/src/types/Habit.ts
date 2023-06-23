const { objectType } = require('nexus') 

export const Habit = objectType({
    name: 'Habit',
    definition(t) {
      t.id('id');
      t.string('name');
      t.string('streak');
    },
  })
 