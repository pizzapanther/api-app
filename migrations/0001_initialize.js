exports.up = (pgm, run) => {
  pgm.createTable('reviewer', {
    id: 'id',
    name: {type: 'varchar(75)'}
  });
  run();
};

exports.down = (pgm, run) => {
  pgm.dropTable('reviewer');
  run();
};
