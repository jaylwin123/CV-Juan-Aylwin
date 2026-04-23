import { useEffect } from "react";

export const TWEAK_DEFAULTS = {
  palette: "terra",
  density: "comfy",
};

export function Tweaks({ open, state, setState }) {
  useEffect(() => {
    document.documentElement.dataset.palette = state.palette;
    document.documentElement.style.setProperty(
      "--step",
      state.density === "compact" ? "0.78" : "1",
    );
  }, [state]);

  if (!open) return null;

  const set = (patch) => setState((prev) => ({ ...prev, ...patch }));

  return (
    <div className="tweaks-panel">
      <h4>Tweaks</h4>
      <div className="tweak-row">
        <span className="label">Paleta</span>
        <div className="swatches">
          {["terra", "forest", "indigo"].map((p) => (
            <button
              key={p}
              className={`swatch ${p}${state.palette === p ? " on" : ""}`}
              onClick={() => set({ palette: p })}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
      <div className="tweak-row">
        <span className="label">Densidad</span>
        <div className="seg">
          {["comfy", "compact"].map((d) => (
            <button
              key={d}
              className={state.density === d ? "on" : ""}
              onClick={() => set({ density: d })}
            >
              {d}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
