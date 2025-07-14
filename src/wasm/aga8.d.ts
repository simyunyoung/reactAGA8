/* tslint:disable */
/* eslint-disable */
export function calculate_aga8(composition: Float64Array, pressure: number, temperature: number): JsProperties;
export class JsProperties {
  private constructor();
  free(): void;
  d: number;
  mm: number;
  z: number;
  dp_dd: number;
  d2p_dd2: number;
  dp_dt: number;
  u: number;
  h: number;
  s: number;
  cv: number;
  cp: number;
  w: number;
  g: number;
  jt: number;
  kappa: number;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly aga8_2017: (a: number, b: number, c: number, d: number) => void;
  readonly aga8_new: () => number;
  readonly aga8_free: (a: number) => void;
  readonly aga8_setup: (a: number) => void;
  readonly aga8_set_composition: (a: number, b: number) => void;
  readonly aga8_set_pressure: (a: number, b: number) => void;
  readonly aga8_get_pressure: (a: number) => number;
  readonly aga8_set_temperature: (a: number, b: number) => void;
  readonly aga8_get_temperature: (a: number) => number;
  readonly aga8_set_density: (a: number, b: number) => void;
  readonly aga8_get_density: (a: number) => number;
  readonly aga8_get_properties: (a: number, b: number) => void;
  readonly aga8_calculate_pressure: (a: number) => void;
  readonly aga8_calculate_density: (a: number) => void;
  readonly aga8_calculate_properties: (a: number) => void;
  readonly gerg_2008: (a: number, b: number, c: number, d: number) => void;
  readonly gerg_new: () => number;
  readonly gerg_free: (a: number) => void;
  readonly gerg_setup: (a: number) => void;
  readonly gerg_set_composition: (a: number, b: number) => void;
  readonly gerg_set_pressure: (a: number, b: number) => void;
  readonly gerg_get_pressure: (a: number) => number;
  readonly gerg_set_temperature: (a: number, b: number) => void;
  readonly gerg_get_temperature: (a: number) => number;
  readonly gerg_set_density: (a: number, b: number) => void;
  readonly gerg_get_density: (a: number) => number;
  readonly gerg_get_properties: (a: number, b: number) => void;
  readonly gerg_calculate_pressure: (a: number) => void;
  readonly gerg_calculate_density: (a: number) => void;
  readonly gerg_calculate_properties: (a: number) => void;
  readonly __wbg_jsproperties_free: (a: number, b: number) => void;
  readonly __wbg_get_jsproperties_d: (a: number) => number;
  readonly __wbg_set_jsproperties_d: (a: number, b: number) => void;
  readonly __wbg_get_jsproperties_mm: (a: number) => number;
  readonly __wbg_set_jsproperties_mm: (a: number, b: number) => void;
  readonly __wbg_get_jsproperties_z: (a: number) => number;
  readonly __wbg_set_jsproperties_z: (a: number, b: number) => void;
  readonly __wbg_get_jsproperties_dp_dd: (a: number) => number;
  readonly __wbg_set_jsproperties_dp_dd: (a: number, b: number) => void;
  readonly __wbg_get_jsproperties_d2p_dd2: (a: number) => number;
  readonly __wbg_set_jsproperties_d2p_dd2: (a: number, b: number) => void;
  readonly __wbg_get_jsproperties_dp_dt: (a: number) => number;
  readonly __wbg_set_jsproperties_dp_dt: (a: number, b: number) => void;
  readonly __wbg_get_jsproperties_u: (a: number) => number;
  readonly __wbg_set_jsproperties_u: (a: number, b: number) => void;
  readonly __wbg_get_jsproperties_h: (a: number) => number;
  readonly __wbg_set_jsproperties_h: (a: number, b: number) => void;
  readonly __wbg_get_jsproperties_s: (a: number) => number;
  readonly __wbg_set_jsproperties_s: (a: number, b: number) => void;
  readonly __wbg_get_jsproperties_cv: (a: number) => number;
  readonly __wbg_set_jsproperties_cv: (a: number, b: number) => void;
  readonly __wbg_get_jsproperties_cp: (a: number) => number;
  readonly __wbg_set_jsproperties_cp: (a: number, b: number) => void;
  readonly __wbg_get_jsproperties_w: (a: number) => number;
  readonly __wbg_set_jsproperties_w: (a: number, b: number) => void;
  readonly __wbg_get_jsproperties_g: (a: number) => number;
  readonly __wbg_set_jsproperties_g: (a: number, b: number) => void;
  readonly __wbg_get_jsproperties_jt: (a: number) => number;
  readonly __wbg_set_jsproperties_jt: (a: number, b: number) => void;
  readonly __wbg_get_jsproperties_kappa: (a: number) => number;
  readonly __wbg_set_jsproperties_kappa: (a: number, b: number) => void;
  readonly calculate_aga8: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_export_0: WebAssembly.Table;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
