const hexBg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V16L28 0l28 16v34z' fill='none' stroke='%23FFD600' stroke-width='1'/%3E%3Cpath d='M28 100L0 84V50l28-16 28 16v34z' fill='none' stroke='%23FFD600' stroke-width='1'/%3E%3C/svg%3E")`

export default function HexBackground() {
  return (
    <div style={{
      position: 'fixed', inset: 0, opacity: 0.04,
      backgroundImage: hexBg,
      pointerEvents: 'none', zIndex: 0,
    }} />
  )
}
