'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Users', [{
    username: 'admin',
    email: "admin@admin.com",
    password: "$2b$10$kz6/S2nCkWHscz/N9DdMXu5wl0o/t4VUMnhE2GIhGvvX/te2GYM7q",
    admin: true,
    createdAt: "2020-10-09 01:40:20",
    updatedAt: "2020-10-09 01:40:20"
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
