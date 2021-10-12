import api from './api.mjs'
import init from './main.mjs'
import bytecode from './wasmBinary.mjs'
import isEmpty from './isEmpty/isEmpty.mjs'
export default (type = 'IDBFS', mount = '/newKind', object = { fs: { idbfs: { }, api: { } }, terminate: () => { } }) => {
    return new Promise(async (resolve, reject) => {
        try {
            let Module = await init({ wasmBinary: bytecode })
            object.fs.idbfs = await Module.FS
            object.fs.api = await api(object.fs.idbfs)
            object.fs.api.mkdir(mount);
            switch (type) {
                case 'IDBFS':
                    object.fs.api.mount(Module.FS.filesystems.IDBFS, {}, mount)
                    break
                case 'WORKERFS':
                    object.fs.api.mount(Module.FS.filesystems.WORKERFS, {}, mount)
                    break
                default:
                    console.warn('undefined fs type. Loading idbfs')
                    object.fs.api.mount(Module.FS.filesystems.IDBFS, {}, mount)
                    break
            }
            object.fs.api.fsLoad();
            object.terminate = () => {
                if(window) {
                    window.onbeforeunload = function () {
                        object.fs.api.fsSave()
                    };
                } else {
                    console.log('неопределённое поведение')
                }
            }
            resolve(new Proxy(  object.fs.api,{
                get: (obj, prop) => {
                    console.log({
                        _:'get target',
                        prop:prop,
                        obj:obj,
                        value:obj[prop]
                    })
                    return obj[prop];
                },
                set: (obj, prop, value) => {
                    console.log({
                        _:'set target',
                        prop:prop,
                        obj:obj,
                        value:value
                    })
                    if(isEmpty(obj[prop])){
                        obj[prop] = []
                    }
                    obj[prop] = value;
                    return true
                }}))
        } catch (e) {
            reject(e)
        }
    })
}
