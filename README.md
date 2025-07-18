# reactAGA8

A web-based AGA8 calculator built with React and Rust (WASM).

## Overview
This project provides a modern web interface for the AGA8 gas properties calculation, using a Rust implementation compiled to WebAssembly (WASM) for high performance and accuracy. The frontend is built with React and Vite.

- **Frontend:** React (Vite)
- **Backend/Engine:** Rust (compiled to WASM)
- **Purpose:** Calculate natural gas properties using the AGA8 standard

## Features
- Input gas composition in engineering units (percent or mole fraction)
- Pressure and temperature input with unit conversion
- Results match the official NIST AGA8 Rust implementation
- Modern, user-friendly UI

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Install dependencies
```bash
npm install
```

### Build the WASM module
You must build the Rust AGA8 code to WASM before running the frontend. From the `RUST` directory:
```bash
cd ../RUST
wasm-pack build --target web --out-dir ../web/src/wasm
```

### Run the frontend
```bash
npm run dev
```

Open your browser to the local address shown in the terminal (usually http://localhost:5173).

## Project Structure
- `src/` - React source code
- `src/wasm/` - WASM module and JS bindings (generated by wasm-pack)
- `RUST/` - Rust AGA8 implementation

## Usage
1. Enter gas composition (prefilled with a demo mixture)
2. Set pressure and temperature (with unit selection)
3. Click **Calculate** to see results

## License
This project is for demonstration and educational purposes. See the `RUST/README.md` for details on the Rust AGA8 implementation.

---

For questions or contributions, please open an issue or pull request on GitHub.