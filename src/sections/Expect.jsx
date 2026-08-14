import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const expects = [

  {
    q: "Nos conocemos",
    a: "En la primera sesión hablamos de lo que estás viviendo y de aquello que te gustaría trabajar.",
  },
  {
    q: "Comprendemos lo que ocurre",
    a: "Exploramos emociones, pensamientos, relaciones y, cuando es pertinente, lo que tu cuerpo está expresando.",
  },
  {
    q: "Construimos tu proceso",
    a: "El trabajo terapéutico se adapta a tus necesidades, ritmo y objetivos.",
  },
  {
    q: "Integramos cambios",
    a: "Buscamos que aquello que descubres en terapia pueda convertirse en recursos para tu vida cotidiana.",
  },
  
]

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      viewport={{ once: true }}
      className="border-b"
      style={{ borderColor: "var(--color-warm)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span
          className="text-base font-light"
          style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", color: "var(--color-deep)" }}
        >
          {item.q}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors"
          style={{ backgroundColor: open ? "var(--color-deep)" : "var(--color-warm)" }}
        >
          <motion.svg
            width="12" height="12" viewBox="0 0 24 24"
            fill="none" stroke={open ? "white" : "var(--color-accent)"} strokeWidth="2.5"
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <path d="M6 9l6 6 6-6" />
          </motion.svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p
              className="pb-5 text-sm leading-relaxed font-light"
              style={{ color: "var(--color-muted)" }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24" style={{ backgroundColor: "var(--color-cream)" }}>
      <div className="max-w-3xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[.22em] uppercase mb-3" style={{ color: "var(--color-accent)" }}>
            Primera Sesión
          </p>
          <h2
            className="text-5xl mb-4 leading-tight"
            style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, color: "var(--color-deep)" }}
          >
            ¿Qué sucede{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>en una sesión?</em>
          </h2>
          
        </motion.div>

        <div className="border-t" style={{ borderColor: "var(--color-warm)" }}>
          {expects.map((item, i) => (
            <FAQItem key={item.q} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
