module.exports = {
    onPreBuild: ({ utils }) => {
        const currentProject = process.env.PROJECT_NAME;
        utils.run.command(`cd apps/${currentProject} && pwd`);
        // utils.run.command(`cd apps/${currentProject}`);
        // utils.run.command(`pwd`);
        // utils.run.command(`npm install`);
    },
};
