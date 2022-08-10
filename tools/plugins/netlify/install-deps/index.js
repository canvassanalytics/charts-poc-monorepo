module.exports = {
    onPreBuild: ({ utils }) => {
        const currentProject = process.env.PROJECT_NAME;
        utils.run.command(`pwd && cd apps/${currentProject} && npm install`)
    },
};
