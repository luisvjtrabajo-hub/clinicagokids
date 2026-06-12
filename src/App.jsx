import { useEffect, useState } from "react";
import {
  ArrowRight,
  Baby,
  Brain,
  Facebook,
  HeartHandshake,
  Instagram,
  MapPin,
  MessageCircle,
  MoonStar,
  Quote,
  Ruler,
  ShieldPlus,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import heroCrocodile from "../Cocodrilo.png";
import siteLogo from "../Logo.png";

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA-51P7Skt0WNx7LrER0srPcNWU2xqWIjU6YeZuQQ3MBrTYOT-6Hz7LsZFWyC6yxg8d63R4V7nB28p_f0JHA4h3km9MqBYZmKlXgiiqOzHv6ZIwsmO5-GDfZlVRybqSyNk2wRXs8Dpx5KstvXVow5atd_4jTmbGtl7bCLq2bSYft_qgKGV_Xee-ATsKz4Ed4ah0OGT1vj7s8v9_HjJOPu2BdPHVpF4G72iSRYJjifiN_hXj-GcOhfn9lZzVSdQEPWNd3CtA8l1Mi8Y";

const specialistsImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBdiHGF2dzDMo7X6R5Z4cKeEMTldNaGEbMlWDDQyML7CGSs9GKs4KfcevEVkHpK4_HzsVqq7m3JGFfXBvYvftaDy_AphduqIrUYlDTE5CbwE88nkHA9RoQ4t-AYzBbiKc8nO7cZ7D9KasAj6QQpqhEtY9KUqQJnEDiHnR7dpL8kUY6IljNmOeuolsZK9B8ylkC6Gv4q972SZ4pwmvl8YPCQf-ypZ-RNyBZo2PtkYTIunkVaxkPy2iP5OL3T-8Zs58iBWkJV7gXkWmc";

const dentistOne =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAJq2-OAsqTKlIJoYk7gYitMdvOEM2xJpnLfSS9Grc8NR9M4_iJ-Yoaoxs9pcmw13Q9IfCJp6_lS2OO7FzFr-nkYo8orBN02F0HvLhqv6sPMT9MIl7RqgumGpAvKI2EJE722EBLu-MrlJPSKNNoT4uEw_hhWgZtMlA7rX79lx2hiyCU7a47pdMUVercy5CD29PeCW0Vz7ZDyYUnwNe652CmukEfdQINU4IIc2GXwfvjaHRYc28KcoDjMe2gQ9YiXn5p_BpDuOE6rCE";

const dentistTwo =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD8g3O22umqaJKQMQbOqLSf2zYUbJwIhafXjv63a50VlWvGSa_H5CZ6QMeD5WhrbEdlsXK5xoU3mr49TlawQdO4oyDGmSKMImqXC2HAsbNsmpfJ2pG2PNKFlhWof0UBg5D5voGJjahnXyXyb_FlruPH5BxhF56Lp9mHlLL1imjxwp8kz1vT7LvVctRcM9XGkLkIpy53KEwE2XIhjtzFB4_umfAAXnwE5HoZmJUkSbPWm811zNUM2AUkv6nX31QrXImI3tcgTNQ0FWU";

const testimonialImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAuZWoRJKZyvfBGg430KQb3pbSG8C2OngKCUeVO9YaNDB2AkH-VPb4St539JiSg73Tj_DczD88DvqnGO0usqg9wEWS8I9F29ioWP68VyIz9cMTcBBKx42MAyIqE7n5SRI6P02OdlH8ugs-4yAHV4pr29xQhAGWoFJxrsXZSgAQeXzuH80wE_Rr3iM3N0jsfdjeeKJI9tv6-jy-dM-cTysFWCkDJG4RUqkrDUe2LSN2SbtbhR_7usjx_GjHh65P9R3NwwLj304BcAzg";

const valueItems = [
  {
    icon: Stethoscope,
    title: "Tratamientos Modernos",
    text: "Tecnología de vanguardia para diagnósticos precisos y tratamientos mínimamente invasivos.",
    tone: "orange",
  },
  {
    icon: HeartHandshake,
    title: "Especialistas en Niños",
    text: "Un equipo dedicado exclusivamente a la salud bucal infantil desde los primeros meses.",
    tone: "blue",
  },
  {
    icon: Brain,
    title: "Manejo de Conducta",
    text: "Técnicas psicológicas para que la visita al dentista sea una experiencia positiva y divertida.",
    tone: "green",
  },
];

const serviceItems = [
  {
    icon: ShieldPlus,
    title: "Odontopediatría Integral",
    text: "Prevención y restauración completa para mantener dientes sanos y fuertes.",
    tone: "green",
  },
  {
    icon: Ruler,
    title: "Ortodoncia Preventiva",
    text: "Guiamos el crecimiento correcto de los maxilares y la posición dental desde temprana edad.",
    tone: "orange",
  },
  {
    icon: Baby,
    title: "Odontología para Bebés",
    text: "Cuidado preventivo especializado desde la aparición del primer diente de leche.",
    tone: "blue",
  },
  {
    icon: MoonStar,
    title: "Sedación Consciente",
    text: "Para que los procedimientos complejos sean tranquilos y sin traumas para el niño.",
    tone: "mint",
  },
];

const quickLinks = [
  "Horarios de Atención",
  "Ubicación",
  "Blog de Salud Dental",
  "Preguntas Frecuentes",
];

const whatsappNumber = "932245094";
const whatsappHref = `https://wa.me/51${whatsappNumber}?text=Hola%2C%20quiero%20agendar%20una%20cita`;

function App() {
  const [isCompactHeader, setIsCompactHeader] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsCompactHeader(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="page-shell">
      <header className={`topbar ${isCompactHeader ? "topbar--compact" : ""}`}>
        <div className="container topbar__inner">
          <a className="brand" href="#inicio" aria-label="Ir al inicio de GoKids & Family">
            <img className="brand__logo" src={siteLogo} alt="Logo de GoKids & Family" />
          </a>

          <nav className="topbar__nav" aria-label="Principal">
            <a className="topbar__link topbar__link--active" href="#inicio">
              Inicio
            </a>
            <a className="topbar__link" href="#servicios">
              Servicios
            </a>
            <a className="topbar__link" href="#nosotros">
              Nosotros
            </a>
            <a className="topbar__link" href="#contacto">
              Contacto
            </a>
          </nav>

          <a
            className="button button--pill button--soft"
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            Agendar Cita
          </a>
        </div>
      </header>

      <main>
        <section className="hero section" id="inicio">
          <div className="container hero__grid">
            <div className="hero__copy">
              <img
                className="hero__logo"
                src={heroCrocodile}
                alt="Mascota cocodrilo de GoKids & Family"
              />
              <h1>
                GoKids & Family: <span>Sonrisas Sanas</span> para un Futuro Brillante
              </h1>
              <p className="lead">
                Aquí les brindamos los mejores y actuales tratamientos odontopediátricos.
                Somos especialistas en manejo de conducta para que tus hijos crezcan
                amando su sonrisa.
              </p>
              <div className="hero__actions">
                <a
                  className="button button--primary"
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  Reserva tu Cita
                </a>
                <a className="button button--ghost" href="#nosotros">
                  Conoce más
                </a>
              </div>
            </div>

            <div className="hero__media">
              <div className="hero__glow" />
              <div className="hero__card">
                <img
                  src={heroImage}
                  alt="Dentista infantil atendiendo con calidez a una paciente en el consultorio"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section section--white values">
          <div className="container">
            <div className="values__grid">
              {valueItems.map((item) => {
                const Icon = item.icon;

                return (
                  <article className="value-card" key={item.title}>
                    <div className={`icon-badge icon-badge--${item.tone}`}>
                      <Icon size={28} strokeWidth={2.2} />
                    </div>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section services" id="servicios">
          <div className="container">
            <div className="section-heading">
              <div>
                <h2>Nuestros Servicios</h2>
                <p>
                  Brindamos soluciones integrales adaptadas a cada etapa del crecimiento
                  de tus pequeños.
                </p>
              </div>
              <div className="chip">
                <Sparkles size={16} />
                <span>Cuidado de Confianza</span>
              </div>
            </div>

            <div className="services__grid">
              {serviceItems.map((item) => {
                const Icon = item.icon;

                return (
                  <article className={`service-card service-card--${item.tone}`} key={item.title}>
                    <div className={`service-card__icon service-card__icon--${item.tone}`}>
                      <Icon size={22} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <a
                      className={`service-card__link service-card__link--${item.tone}`}
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver detalle
                      <ArrowRight size={16} />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section--white" id="nosotros">
          <div className="container">
            <div className="specialists">
              <div className="specialists__blob specialists__blob--right" />
              <div className="specialists__blob specialists__blob--left" />

              <div className="specialists__content">
                <div className="eyebrow">Expertos Certificados</div>
                <h2>Maestros del Manejo de Conducta</h2>
                <p>
                  Nuestro equipo no solo sabe de dientes, son expertos en entender el
                  mundo infantil. Utilizamos técnicas de psicología positiva, juegos y
                  explicaciones adaptadas para asegurar que cada visita sea libre de miedo.
                  En GoKids & Family, el bienestar emocional es tan importante como la
                  salud clínica.
                </p>

                <div className="specialists__team">
                  <div className="avatar-stack" aria-hidden="true">
                    <img src={dentistOne} alt="" />
                    <img src={dentistTwo} alt="" />
                    <span>+5</span>
                  </div>
                  <strong>Tu equipo de confianza</strong>
                </div>
              </div>

              <div className="specialists__image-wrap">
                <img
                  className="specialists__image"
                  src={specialistsImage}
                  alt="Equipo odontopediátrico enseñando a un niño con un enfoque lúdico"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section testimonial">
          <div className="container testimonial__inner">
            <Quote className="testimonial__quote" size={56} />
            <blockquote>
              "La mejor experiencia para mis hijos, ahora les encanta ir al dentista.
              El trato es tan dulce y profesional que mis pequeños no sintieron ni un
              poquito de miedo."
            </blockquote>

            <div className="testimonial__author">
              <img src={testimonialImage} alt="Madre satisfecha con la atención de la clínica" />
              <p>María Fernanda S.</p>
              <span>Mamá de Mateo (5 años) y Sofía (3 años)</span>
            </div>
          </div>
        </section>
      </main>

      <a
        className="whatsapp-float"
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Escribir por WhatsApp"
      >
        <MessageCircle size={28} />
        <span>WhatsApp</span>
      </a>

      <footer className="footer" id="contacto">
        <div className="container footer__grid">
          <div className="footer__brand">
            <h3>GoKids & Family</h3>
            <p>
              Clínica Odontopediátrica Familiar. Expertos en sonrisas felices y pacientes
              sin miedo.
            </p>
            <div className="socials">
              <a href="#" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4>Enlaces Rápidos</h4>
            <ul className="footer__list">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contáctanos</h4>
            <ul className="footer__contact">
              <li>
                <MapPin size={18} />
                <span>Los Olivos, Perú</span>
              </li>
              <li>
                <MessageCircle size={18} />
                <a href={whatsappHref} target="_blank" rel="noreferrer">
                  WhatsApp: {whatsappNumber}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container footer__bottom">
          <p>
            © 2024 GoKids & Family. Clínica Odontopediátrica Familiar. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
