import { FaDirections } from "react-icons/fa"

const LAT = 18.9090
const LNG = -99.2313

const MAPS_NAV = `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`

export default function MapFacade() {
  return (
    <div className="mt-6 flex ">
      <a
        href={MAPS_NAV}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-opacity hover:opacity-70"
        style={{ color: "var(--color-accent)" }}
      >
        <FaDirections />
        Cómo llegar
      </a>
    </div>
  )
}