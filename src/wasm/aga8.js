let wasm;

const cachedTextDecoder = (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { ignoreBOM: true, fatal: true }) : { decode: () => { throw Error('TextDecoder not available') } } );

if (typeof TextDecoder !== 'undefined') { cachedTextDecoder.decode(); };

let cachedUint8ArrayMemory0 = null;

function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

let cachedFloat64ArrayMemory0 = null;

function getFloat64ArrayMemory0() {
    if (cachedFloat64ArrayMemory0 === null || cachedFloat64ArrayMemory0.byteLength === 0) {
        cachedFloat64ArrayMemory0 = new Float64Array(wasm.memory.buffer);
    }
    return cachedFloat64ArrayMemory0;
}

let WASM_VECTOR_LEN = 0;

function passArrayF64ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 8, 8) >>> 0;
    getFloat64ArrayMemory0().set(arg, ptr / 8);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}
/**
 * @param {Float64Array} composition
 * @param {number} pressure
 * @param {number} temperature
 * @returns {JsProperties}
 */
export function calculate_aga8(composition, pressure, temperature) {
    const ptr0 = passArrayF64ToWasm0(composition, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.calculate_aga8(ptr0, len0, pressure, temperature);
    return JsProperties.__wrap(ret);
}

const JsPropertiesFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_jsproperties_free(ptr >>> 0, 1));

export class JsProperties {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(JsProperties.prototype);
        obj.__wbg_ptr = ptr;
        JsPropertiesFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        JsPropertiesFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_jsproperties_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    get d() {
        const ret = wasm.__wbg_get_jsproperties_d(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set d(arg0) {
        wasm.__wbg_set_jsproperties_d(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get mm() {
        const ret = wasm.__wbg_get_jsproperties_mm(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set mm(arg0) {
        wasm.__wbg_set_jsproperties_mm(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get z() {
        const ret = wasm.__wbg_get_jsproperties_z(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set z(arg0) {
        wasm.__wbg_set_jsproperties_z(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get dp_dd() {
        const ret = wasm.__wbg_get_jsproperties_dp_dd(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set dp_dd(arg0) {
        wasm.__wbg_set_jsproperties_dp_dd(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get d2p_dd2() {
        const ret = wasm.__wbg_get_jsproperties_d2p_dd2(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set d2p_dd2(arg0) {
        wasm.__wbg_set_jsproperties_d2p_dd2(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get dp_dt() {
        const ret = wasm.__wbg_get_jsproperties_dp_dt(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set dp_dt(arg0) {
        wasm.__wbg_set_jsproperties_dp_dt(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get u() {
        const ret = wasm.__wbg_get_jsproperties_u(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set u(arg0) {
        wasm.__wbg_set_jsproperties_u(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get h() {
        const ret = wasm.__wbg_get_jsproperties_h(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set h(arg0) {
        wasm.__wbg_set_jsproperties_h(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get s() {
        const ret = wasm.__wbg_get_jsproperties_s(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set s(arg0) {
        wasm.__wbg_set_jsproperties_s(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get cv() {
        const ret = wasm.__wbg_get_jsproperties_cv(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set cv(arg0) {
        wasm.__wbg_set_jsproperties_cv(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get cp() {
        const ret = wasm.__wbg_get_jsproperties_cp(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set cp(arg0) {
        wasm.__wbg_set_jsproperties_cp(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get w() {
        const ret = wasm.__wbg_get_jsproperties_w(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set w(arg0) {
        wasm.__wbg_set_jsproperties_w(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get g() {
        const ret = wasm.__wbg_get_jsproperties_g(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set g(arg0) {
        wasm.__wbg_set_jsproperties_g(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get jt() {
        const ret = wasm.__wbg_get_jsproperties_jt(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set jt(arg0) {
        wasm.__wbg_set_jsproperties_jt(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get kappa() {
        const ret = wasm.__wbg_get_jsproperties_kappa(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set kappa(arg0) {
        wasm.__wbg_set_jsproperties_kappa(this.__wbg_ptr, arg0);
    }
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

function __wbg_get_imports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbindgen_init_externref_table = function() {
        const table = wasm.__wbindgen_export_0;
        const offset = table.grow(4);
        table.set(0, undefined);
        table.set(offset + 0, undefined);
        table.set(offset + 1, null);
        table.set(offset + 2, true);
        table.set(offset + 3, false);
        ;
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };

    return imports;
}

function __wbg_init_memory(imports, memory) {

}

function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    __wbg_init.__wbindgen_wasm_module = module;
    cachedFloat64ArrayMemory0 = null;
    cachedUint8ArrayMemory0 = null;


    wasm.__wbindgen_start();
    return wasm;
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (typeof module !== 'undefined') {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();

    __wbg_init_memory(imports);

    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }

    const instance = new WebAssembly.Instance(module, imports);

    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (typeof module_or_path !== 'undefined') {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (typeof module_or_path === 'undefined') {
        module_or_path = new URL('aga8_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    __wbg_init_memory(imports);

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync };
export default __wbg_init;
