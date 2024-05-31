module.exports = {
    apps : [{
      name: 'prjRCNDev',
      script: './src/server.js',
      //"watch" : true,    
      env_production: {
        NODE_ENV: "production"
      },
      log_date_format: 'DD/MM/YYYY HH:mm:ss.SSS',
      out_file: './logs/NodeOut.log', 
      error_file: './logs/NodeError.log', 
      merge_logs: true
    }, /*{
      script: './service-worker/',
      watch: ['./service-worker']
    }*/],
  
    /*
    deploy : {
      production : {
        user : 'SSH_USERNAME',
        host : 'SSH_HOSTMACHINE',
        ref  : 'origin/master',
        repo : 'GIT_REPOSITORY',
        path : 'DESTINATION_PATH',
        'pre-deploy-local': '',
        'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
        'pre-setup': ''
      },
      development: {
        user : 'SSH_USERNAME',
        host : 'SSH_HOSTMACHINE',
        ref  : 'origin/homolog',
        repo : 'GIT_REPOSITORY',
        path : 'DESTINATION_PATH',
        'pre-deploy-local': '',
        'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env staging',
        'pre-setup': ''
      }
    }*/
  };
  