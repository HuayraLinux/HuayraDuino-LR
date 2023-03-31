module.exports = {
  packagerConfig: {},
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        options: {
          iconUrl: 'ardublockly/img/HuayraDuino_icono.ico',
          appDirectory: './',
          outputDirectory: 'out/win/',
          authors: "huayra developers",
        }},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          icon: 'ardublockly/img/HuayraDuino_icono.png',
          scripts: {
            postinst: 'electron/postinst'
          }
        }},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {
        options: {
          icon: 'ardublockly/img/HuayraDuino_icono.png'
        }},
    },
  ],
};
