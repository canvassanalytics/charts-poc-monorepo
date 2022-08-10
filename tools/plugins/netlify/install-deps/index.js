module.exports = {
    onPreBuild: ({ utils }) => {
        const currentProject = process.env.PROJECT_NAME;
        utils.run.command(`npm install ./apps/${currentProject}`);
        // utils.run.command(`npm link .apps/${currentProject}/node_modules/react`);
        utils.run.command(`echo done`);
        // utils.run.command(`pwd`);
        // utils.run.command(`npm install`);
    },
};
