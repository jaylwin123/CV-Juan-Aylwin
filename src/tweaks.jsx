import { useState, useEffect } from "react";

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/ {
  theme: "light",
  accent: "electric",
  density: "comfy",
}; /*EDITMODE-END*/

function Tweaks() {
  const [state, setState] = useState(TWEAK_DEFAULTS);
  const [open, setOpen] = useState(false);
  const [editActive, setEditActive] = useState(false);

  // Apply
  useEffect(() => {
    document.documentElement.dataset.theme = state.theme;
    document.documentElement.dataset.accent = state.accent;
    document.documentElement.style.setProperty(
      "--step",
      state.density === "compact" ? "0.82" : "1",
    );
  }, [state]);

  // Host protocol
  useEffect(() => {
    const onMsg = (e) => {
      const d = e.data || {};
      if (d.type === "__activate_edit_mode") {
        setEditActive(true);
        setOpen(true);
      }
      if (d.type === "__deactivate_edit_mode") {
        setEditActive(false);
        setOpen(false);
      }
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  const set = (patch) => {
    setState((prev) => {
      const next = { ...prev, ...patch };
      window.parent.postMessage(
        { type: "__edit_mode_set_keys", edits: patch },
        "*",
      );
      return next;
    });
  };

  const close = () => {
    setOpen(false);
    setEditActive(false);
    window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*");
  };

  if (!open) return null;

  return (
    <div className="tweaks">
      <div className="tweaks-head">
        <h4>⌘ Tweaks</h4>
        <button onClick={close}>✕</button>
      </div>

      <div className="tweak">
        <span className="t-lbl">Tema</span>
        <div className="seg">
          {["dark", "light"].map((t) => (
            <button
              key={t}
              className={state.theme === t ? "on" : ""}
              onClick={() => set({ theme: t })}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="tweak">
        <span className="t-lbl">Accent</span>
        <div className="swatches">
          {[
            { k: "electric", c: "#d4ff3a" },
            { k: "orange", c: "#ff6b35" },
            { k: "cyan", c: "#5eead4" },
            { k: "violet", c: "#c4a7ff" },
          ].map((s) => (
            <button
              key={s.k}
              style={{ "--c": s.c }}
              className={state.accent === s.k ? "on" : ""}
              onClick={() => set({ accent: s.k })}
              title={s.k}
            />
          ))}
        </div>
      </div>

      <div className="tweak">
        <span className="t-lbl">Densidad</span>
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

export { Tweaks };
