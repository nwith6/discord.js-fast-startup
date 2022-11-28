# discord.js-fast-startup
This repo instantly lets you start coding your bot in a test environment.

# To get started
1. To start you need to open the repo and run the command ``npm install``.
2. Configure the ``config.json`` file accordingly.
3. Run ``node index.js``. To deploy your commands run ``npm run deploy``

# Difference between the 2 terminal commands
When you create a new command to sort of register it you must run ``npm run deploy``. This updates your test server with the command. If you dont need to register a command you can just run ``node index.js`` which lets your bot run and respond to already registered commands.
