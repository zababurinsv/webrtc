export default (fs = {}) => {
  return new Promise(async (resolve, reject) => {
    resolve({
      symlink: async (oldPath, newPath) => {
        try {
          let symlink = await fs.symlink(oldPath, newPath);
          resolve({
            status: true,
            success: true,
            message: symlink
          })
        } catch (e) {
          resolve({
            status: false,
            success: false,
            message: e
          })
        }
      },
      mount: async (type = {}, params = {}, dir = '/newKind') => {
        try {
          let mount = await fs.mount(type, params, dir)
          resolve({
            status: true,
            success: true,
            message: mount
          })
        } catch (e) {
          resolve({
            status: false,
            success: false,
            message: e
          })
        }
      },
      unmount: async (mountPoint = '/newKind') => {
        try {
          let unmount = await fs.unmount(mountPoint)
          resolve({
            status: true,
            success: true,
            message: unmount
          })
        } catch (e) {
          resolve({
            status: false,
            success: false,
            message: e
          })
        }
      },
      fsLoad: () => {
        return new Promise(async (resolve, reject) => {
          fs.syncfs(true,  (err) => {
            if(err) {
              resolve({
                status: "false",
                success: false,
                message: err
              })
            } else {
              console.log('file load')
              resolve({
                status: "true",
                success: true,
                message: 'file load'
              })
            }
          });
        })
      },
      fsSave: () => {
        return new Promise(async (resolve, reject) => {
          fs.syncfs(false , (err) => {
            if(err) {
              resolve({
                status: "false",
                success: false,
                message: err
              })
            } else {
              console.log('file save')
              resolve({
                status: "true",
                success: true,
                message: 'file save'
              })
            }
          });
        })
      },
      mkdir: (path) => {
        return new Promise(async (resolve, reject) => {
          try {
            let mkdir = await fs.mkdir(path)
            resolve({
              status: true,
              success: true,
              message: mkdir
            })
          }catch (e) {
            resolve({
              status: false,
              success: false,
              message: e
            })
          }
        })
      },
      readdir: (path) => {
        return new Promise(async (resolve, reject) => {
          try {
            let readdir = await fs.readdir(path)
            resolve({
              status: true,
              success: true,
              message: readdir
            })
          } catch (e) {
            resolve({
              status: false,
              success: false,
              message: e
            })
          }
        })
      },
      rmdir: (path) => {
        return new Promise(async (resolve, reject) => {
          try {
            let rmdir = await fs.rmdir(path)
            resolve({
              status: true,
              success: true,
              message: rmdir
            })
          }catch (e) {
            resolve({
              status: false,
              success: false,
              message: e
            })
          }
        })
      },
      cwd: (path) => {
        return new Promise(async (resolve, reject) => {
          try {
            let cwd = await fs.cwd()
            resolve({
              status: true,
              success: true,
              message: cwd
            })
          }catch (e) {
            resolve({
              status: false,
              success: false,
              message: e
            })
          }
        })
      },
      rename: (file, result) => {
        return new Promise(async (resolve, reject) => {
          try {
            let rename = await fs.rename(file, result)
            resolve({
              status: true,
              success: true,
              message: rename
            })
          }catch (e) {
            resolve({
              status: false,
              success: false,
              message: e
            })
          }
        })
      },
      readFile: (file, encoding = "utf8") => {
        return new Promise(async (resolve, reject) => {
          try {
            let readFile = await fs.readFile(file, { encoding: encoding })
            resolve({
              status: true,
              success: true,
              message: readFile
            })
          }catch (e) {
            resolve({
              status: false,
              success: false,
              message: e
            })
          }
        })
      },
      unlink: (file) => {
        return new Promise(async (resolve, reject) => {
          try {
           let unlink = await fs.unlink(file)
            resolve({
              status: true,
              success: true,
              message: unlink
            })
          }catch (e) {
            resolve({
              status: false,
              success: false,
              message: e
            })
          }
        })
      },
      writeFile: (file, contents) => {
        return new Promise(async (resolve, reject) => {
          try {
           let writeFile =  await fs.writeFile(file, contents)
            resolve({
              status: true,
              success: true,
              message: writeFile
            })
          }catch (e) {
            resolve({
              status: false,
              success: false,
              message: e
            })
          }
        })
      },
      createDataFile: (folder, file, contents, readable = true, writable = true ) => {
        return new Promise(async (resolve, reject) => {
          try {
            let createDataFile = await fs.createDataFile(folder, file, contents, readable, writable)
            resolve({
              status: true,
              success: true,
              message: createDataFile
            })
          }catch (e) {
            resolve({
              status: false,
              success: false,
              message: e
            })
          }
        })
      }
    })
  })
}
