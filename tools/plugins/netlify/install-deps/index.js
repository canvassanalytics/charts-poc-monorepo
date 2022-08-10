module.exports = {
    onPreBuild: ({ utils }) => {
        const currentProject = process.env.PROJECT_NAME;
        utils.run.command(`npm --prefix ./apps/${currentProject} install ./apps/${currentProject}`);
        utils.run.command(`echo done`);
        // utils.run.command(`pwd`);
        // utils.run.command(`npm install`);
    },
};
