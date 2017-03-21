module.exports = {
  'appenders': [
    {
      'type': 'file',
      'filename': './logs/logger.log',
      'maxLogSize': 20480,
      'backups': 10
    }
  ]
}
