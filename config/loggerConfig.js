module.exports = {
  appenders: [
    {
      type: 'file',
      filename: './logs/logger.log',
      maxLogSize: 20480,
      backups: 10,
    },
    {
      type: 'console'
    }
    // {
    //   'type': 'file',
    //   'filename': './logs/error.log',
    //   'maxLogSize': 20480,
    //   'backups': 10,
    //   'category': 'error'
    // },
    // {
    //   'type': 'file',
    //   'filename': './logs/info.log',
    //   'maxLogSize': 20480,
    //   'backups': 10,
    //   'category': 'info'
    // }
  ]
};
