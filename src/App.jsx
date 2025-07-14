import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// WASM loader
let wasm;
async function loadWasm() {
  if (!wasm) {
    const mod = await import('./wasm/aga8.js');
    await mod.default(); // Initialize WASM
    wasm = mod;
  }
  return wasm;
}

const GAS_COMPONENTS = [
  "Methane", "Nitrogen", "Carbon dioxide", "Ethane", "Propane", "Isobutane", "n-Butane", "Isopentane", "n-Pentane", "Hexane", "Heptane", "Octane", "Nonane", "Decane", "Hydrogen", "Oxygen", "Carbon monoxide", "Water", "Hydrogen sulfide", "Helium", "Argon"
];

function App() {
  const [composition, setComposition] = useState([
    80.12,   // Methane
    2,       // Nitrogen
    6,       // CO2
    8,       // Ethane
    3,       // Propane
    0.15,    // Isobutane
    0.3,     // n-Butane
    0.05,    // Isopentane
    0.165,   // n-Pentane
    0.215,   // Hexane
    0,       // Heptane
    0,       // Octane
    0,       // Nonane
    0,       // Decane
    0,       // Hydrogen
    0,       // Oxygen
    0,       // Carbon monoxide
    0,       // Water
    0,       // Hydrogen sulfide
    0,       // Helium
    0        // Argon
  ]);
  // Add pressure unit selector
  const [pressureUnit, setPressureUnit] = useState('kPa'); // 'bar', 'MPa', 'kPa'
  // Prefill demo values (do not redeclare pressure/temperature/composition)
  // Only set initial values if not already set
  const [pressure, setPressure] = useState(50000); // kPa
  const [temperature, setTemperature] = useState(400); // K
  const [result, setResult] = useState(null);
  const [wasmLoaded, setWasmLoaded] = useState(false);
  const [compositionUnit, setCompositionUnit] = useState('percent'); // 'percent' or 'fraction'
  // Add state for SI values
  const [siPressure, setSiPressure] = useState(50); // bar
  const [siTemperature, setSiTemperature] = useState(323.15); // K

  useEffect(() => {
    loadWasm().then(() => setWasmLoaded(true));
  }, []);

  // Update SI values when user changes input
  useEffect(() => {
    setSiPressure(pressure); // 1 barg = 1 bar
    setSiTemperature(temperature + 273.15); // degC to K
  }, [pressure, temperature]);

  const handleCompositionChange = (idx, value) => {
    const arr = [...composition];
    arr[idx] = parseFloat(value);
    setComposition(arr);
  };

  const handleCalculate = async (e) => {
    e.preventDefault();
    const w = await loadWasm();
    let comp = composition;
    if (compositionUnit === 'percent') {
      comp = composition.map(v => parseFloat(v) / 100);
    }
    // Convert pressure to kPa for WASM
    let pressure_kpa = pressure;
    if (pressureUnit === 'bar') pressure_kpa = pressure * 100;
    if (pressureUnit === 'MPa') pressure_kpa = pressure * 1000;
    try {
      const props = w.calculate_aga8(comp, pressure_kpa, temperature);
      setResult(props);
    } catch (err) {
      setResult({ error: err.message });
    }
  };

  // Validation for sum of composition
  const sumComposition = composition.reduce((a, b) => a + parseFloat(b || 0), 0);
  const validSum = compositionUnit === 'percent' ? Math.abs(sumComposition - 100) < 0.5 : Math.abs(sumComposition - 1) < 0.01;

  // Calculate pressure_kpa just before return
  let pressure_kpa = pressure;
  if (pressureUnit === 'bar') pressure_kpa = pressure * 100;
  if (pressureUnit === 'MPa') pressure_kpa = pressure * 1000;

  return (
    <div className="aga8-app" style={{ maxWidth: 600, margin: '32px auto', fontFamily: 'Roboto, Arial, sans-serif', background: '#f5f5f5', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 24, color: '#1967d2', fontWeight: 500, letterSpacing: 1 }}>AGA8 Calculator</h1>
      <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0002', padding: 24, marginBottom: 24 }}>
        <h2 style={{ marginTop: 0, color: '#1967d2', fontWeight: 400 }}>Input Conditions</h2>
        <form onSubmit={handleCalculate}>
          <div style={{ marginBottom: 16 }}>
            <label style={{ color: '#555', fontWeight: 500 }}>Pressure: </label>
            <input type="number" step="any" value={pressure} onChange={e => setPressure(parseFloat(e.target.value))} required style={{ width: 100, border: '1px solid #cfd8dc', borderRadius: 4, padding: '4px 8px', fontSize: 16 }} />
            <select value={pressureUnit} onChange={e => setPressureUnit(e.target.value)} style={{ marginLeft: 8, border: '1px solid #cfd8dc', borderRadius: 4, padding: '4px 8px', fontSize: 16 }}>
              <option value="kPa">kPa</option>
              <option value="bar">bar</option>
              <option value="MPa">MPa</option>
            </select>
            <span style={{ marginLeft: 16, color: '#888' }}>WASM input: {pressure_kpa} kPa</span>
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ color: '#555', fontWeight: 500 }}>Temperature: </label>
            <input type="number" step="any" value={temperature} onChange={e => setTemperature(parseFloat(e.target.value))} required style={{ width: 100, border: '1px solid #cfd8dc', borderRadius: 4, padding: '4px 8px', fontSize: 16 }} />
            <span style={{ marginLeft: 8, color: '#555' }}>K</span>
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ color: '#555', fontWeight: 500 }}>Composition unit: </label>
            <select value={compositionUnit} onChange={e => setCompositionUnit(e.target.value)} style={{ border: '1px solid #cfd8dc', borderRadius: 4, padding: '4px 8px', fontSize: 16 }}>
              <option value="percent">Percent (%)</option>
              <option value="fraction">Mole Fraction (0-1)</option>
            </select>
          </div>
          <h2 style={{ margin: '24px 0 8px 0', color: '#1967d2', fontWeight: 400 }}>Gas Composition</h2>
          <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', maxWidth: 340, background: '#f7fafd', borderRadius: 8, border: '1px solid #e3eaf2', padding: 12, marginBottom: 12 }}>
            {composition.map((val, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', margin: '4px 0' }}>
                <span style={{ fontSize: '0.97em', width: 120, color: '#333' }}>{GAS_COMPONENTS[idx]}</span>
                <input
                  type="number"
                  step="any"
                  value={val}
                  onChange={e => handleCompositionChange(idx, e.target.value)}
                  style={{ width: 80, marginLeft: 8, border: '1px solid #cfd8dc', borderRadius: 4, padding: '4px 8px', fontSize: 15, background: '#fff', color: '#111' }}
                  required
                />
              </div>
            ))}
          </div>
          <div style={{ margin: '12px 0', color: validSum ? '#388e3c' : '#d32f2f', fontWeight: 500 }}>
            {compositionUnit === 'percent'
              ? `Sum: ${sumComposition.toFixed(3)}% (should be 100%)`
              : `Sum: ${sumComposition.toFixed(4)} (should be 1.0)`}
          </div>
          <button type="submit" disabled={!wasmLoaded || !validSum} style={{ width: '100%', padding: '12px 0', fontSize: 18, background: '#1967d2', color: '#fff', border: 'none', borderRadius: 6, cursor: wasmLoaded && validSum ? 'pointer' : 'not-allowed', marginTop: 8, fontWeight: 500, letterSpacing: 1 }}>
            Calculate
          </button>
        </form>
      </div>
      {/* Divider for visual separation */}
      <hr style={{ border: 0, borderTop: '2px solid #e3eaf2', margin: '32px 0 0 0' }} />
      {result && (
        <div className="result" style={{ marginTop: 32, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0002', padding: 24 }}>
          <h2 style={{ marginTop: 0, color: '#1967d2', fontWeight: 400 }}>Results</h2>
          {result.error ? (
            <div style={{ color: '#d32f2f' }}>Error: {result.error}</div>
          ) : (
            <table style={{ borderCollapse: 'collapse', marginTop: 8, width: '100%', color: '#111' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '8px 12px', background: '#f7fafd', color: '#1967d2', fontWeight: 500, borderBottom: '2px solid #cfd8dc' }}>Property</th>
                  <th style={{ textAlign: 'left', padding: '8px 12px', background: '#f7fafd', color: '#1967d2', fontWeight: 500, borderBottom: '2px solid #cfd8dc' }}>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontWeight: 600, background: '#e3f2fd', color: '#111' }}><td>Molar concentration [mol/l]</td><td>{result.d}</td></tr>
                <tr style={{ fontWeight: 600, background: '#e3f2fd', color: '#111' }}><td>Molar mass [g/mol]</td><td>{result.mm}</td></tr>
                <tr style={{ fontWeight: 600, background: '#e3f2fd', color: '#111' }}><td>Compressibility factor (Z)</td><td>{result.z}</td></tr>
                <tr style={{ color: '#111' }}><td>dP/dD</td><td>{result.dp_dd}</td></tr>
                <tr style={{ color: '#111' }}><td>d²P/dD²</td><td>{result.d2p_dd2}</td></tr>
                <tr style={{ color: '#111' }}><td>dP/dT</td><td>{result.dp_dt}</td></tr>
                <tr style={{ color: '#111' }}><td>Internal energy (U)</td><td>{result.u}</td></tr>
                <tr style={{ color: '#111' }}><td>Enthalpy (H)</td><td>{result.h}</td></tr>
                <tr style={{ color: '#111' }}><td>Entropy (S)</td><td>{result.s}</td></tr>
                <tr style={{ color: '#111' }}><td>Cv</td><td>{result.cv}</td></tr>
                <tr style={{ color: '#111' }}><td>Cp</td><td>{result.cp}</td></tr>
                <tr style={{ fontWeight: 600, background: '#e3f2fd', color: '#111' }}><td>Speed of sound (W)</td><td>{result.w}</td></tr>
                <tr style={{ color: '#111' }}><td>Gibbs energy (G)</td><td>{result.g}</td></tr>
                <tr style={{ color: '#111' }}><td>Joule-Thomson coefficient (JT)</td><td>{result.jt}</td></tr>
                <tr style={{ color: '#111' }}><td>Kappa</td><td>{result.kappa}</td></tr>
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}

export default App
