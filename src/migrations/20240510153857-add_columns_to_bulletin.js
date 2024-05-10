'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('bulletins', 'radioechoscanner', {
      type: Sequelize.STRING,
      allowNull: true // ou false selon tes besoins
    });

    await queryInterface.addColumn('bulletins', 'radioechoscanner', {
      type: Sequelize.STRING,
      allowNull: true // ou false selon tes besoins
    });
    await queryInterface.addColumn('bulletins', 'maternité ', {
      type: Sequelize.STRING,
      allowNull: true // ou false selon tes besoins
    });
    await queryInterface.addColumn('bulletins', 'chirurgie', {
      type: Sequelize.STRING,
      allowNull: true // ou false selon tes besoins
    });
    await queryInterface.addColumn('bulletins', 'inject', {
      type: Sequelize.STRING,
      allowNull: true // ou false selon tes besoins
    });
    await queryInterface.addColumn('bulletins', 'dent', {
      type: Sequelize.STRING,
      allowNull: true // ou false selon tes besoins
    });
    await queryInterface.addColumn('bulletins', 'monture', {
      type: Sequelize.STRING,
      allowNull: true // ou false selon tes besoins
    });
    await queryInterface.addColumn('bulletins', 'total', {
      type: Sequelize.STRING,
      allowNull: true // ou false selon tes besoins
    });
    // Ajoute les autres colonnes de la même manière
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('bulletins', 'analyse');
    

    // Supprime les autres colonnes ajoutées dans up
  }
};
