exports.up = (pgm, run) => {
  pgm.addColumns(
    'reviewer',
    {date_joined: {type: 'date'}}
  );
  run();
};

exports.down = (pgm, run) => {
  pgm.dropColumns('reviewer', ['date_joined']);
  run();
};