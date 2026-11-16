import {
  Activity,
  ArrowRight,
  Award,
  BatteryCharging,
  Camera,
  CalendarDays,
  CarFront,
  Check,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  Disc3,
  Gauge,
  MapPin,
  MessageCircle,
  MonitorCog,
  Phone,
  Settings,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
  Wind,
} from "lucide-react";

const photo = (id: string, width = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const services = [
  {
    title: "Mali i veliki servis",
    description: "Redovno održavanje i servisiranje po preporuci proizvođača.",
    icon: Settings,
    image: photo("photo-1486262715619-67b85e0b08d3"),
  },
  {
    title: "Popravka kočnica",
    description: "Sigurno kočenje uz proveru i zamenu istrošenih delova.",
    icon: Disc3,
    image: photo("photo-1487754180451-c456f719a1fc"),
  },
  {
    title: "Auto dijagnostika",
    description: "Precizno otkrivamo kvar uz savremenu dijagnostičku opremu.",
    icon: MonitorCog,
    image: photo("photo-1581092918056-0c4c3acd3789"),
  },
  {
    title: "Akumulatori",
    description: "Testiranje, izbor i zamena akumulatora za vaše vozilo.",
    icon: BatteryCharging,
    image: photo("photo-1597766353939-73a8d7e9d8b8"),
  },
  {
    title: "Gume i trap",
    description: "Montaža, balansiranje i centriranje trapa.",
    icon: Disc3,
    image: photo("photo-1517524206127-48bbd363f3d7"),
  },
  {
    title: "Vešanje i upravljanje",
    description:
      "Pouzdana popravka amortizera, vešanja i upravljačkog sistema.",
    icon: Activity,
    image: photo("photo-1487754180451-c456f719a1fc"),
  },
  {
    title: "Priprema za tehnički",
    description:
      "Pregled vozila i priprema za bezbedan prolazak tehničkog pregleda.",
    icon: ClipboardCheck,
    image: photo("photo-1492144534655-ae79c964c9d7"),
  },
  {
    title: "Klima uređaji",
    description: "Održavanje, dezinfekcija i servis auto-klime.",
    icon: Wind,
    image: photo("photo-1493238792000-8113da705763"),
  },
  {
    title: "Servis voznih parkova",
    description: "Pouzdano održavanje vozila za firme i poslovne korisnike.",
    icon: Truck,
    image: photo("photo-1503376780353-7e6692767b70"),
  },
];

const benefits = [
  { title: "Stručni mehaničari", icon: Wrench },
  { title: "Poštene cene", icon: CircleDollarSign },
  { title: "Moderna dijagnostika", icon: MonitorCog },
  { title: "Brz servis", icon: Clock3 },
  { title: "Kvalitetni delovi", icon: Settings },
  { title: "Garancija na rad", icon: ShieldCheck },
  { title: "Uredna radionica", icon: Sparkles },
];

const steps = [
  {
    title: "Zakažite termin",
    text: "Izaberite vreme koje vam odgovara.",
    icon: CalendarDays,
  },
  {
    title: "Opišite problem",
    text: "Recite nam šta se dešava sa vozilom.",
    icon: ClipboardCheck,
  },
  {
    title: "Pregled vozila",
    text: "Proveravamo vozilo i utvrđujemo stanje.",
    icon: CarFront,
  },
  {
    title: "Jasna ponuda",
    text: "Dobijate cenu i obim radova pre popravke.",
    icon: Gauge,
  },
  {
    title: "Preuzmite vozilo",
    text: "Vraćamo vam provereno i bezbedno vozilo.",
    icon: Check,
  },
];

const reviews = [
  {
    name: "Marko P.",
    text: "Brzo su pronašli kvar i sve mi objasnili pre popravke. Za svaku preporuku.",
  },
  {
    name: "Jelena S.",
    text: "Ljubazni, profesionalni i veoma korektni sa cenama. Vraćam se ponovo.",
  },
  {
    name: "Milan R.",
    text: "Zakazivanje je bilo jednostavno, a auto gotov istog dana. Odlična usluga.",
  },
];

function BrandMark() {
  return (
    <a className="brand" href="#top" aria-label="Auto servis, početna strana">
      <span className="brand-emblem">
        <Wrench size={22} strokeWidth={2.5} />
      </span>
      <span className="brand-copy">
        <strong>
          AUTO <b>SERVIS</b>
        </strong>
        <small>POUZDAN PARTNER NA PUTU</small>
      </span>
    </a>
  );
}

function BookingForm() {
  return (
    <form className="booking-form" action="#booking">
      <label className="sr-only" htmlFor="customer-name">
        Ime i prezime
      </label>
      <input
        id="customer-name"
        name="name"
        placeholder="Ime i prezime"
        required
      />
      <label className="sr-only" htmlFor="customer-phone">
        Broj telefona
      </label>
      <input
        id="customer-phone"
        name="phone"
        placeholder="Broj telefona"
        type="tel"
        required
      />
      <label className="sr-only" htmlFor="vehicle">
        Marka i model vozila
      </label>
      <select id="vehicle" name="vehicle" defaultValue="">
        <option value="" disabled>
          Marka i model vozila
        </option>
        <option>Putničko vozilo</option>
        <option>Lako komercijalno vozilo</option>
        <option>Drugo</option>
      </select>
      <label className="sr-only" htmlFor="service">
        Potrebna usluga
      </label>
      <select id="service" name="service" defaultValue="">
        <option value="" disabled>
          Potrebna usluga
        </option>
        {services.map((service) => (
          <option key={service.title}>{service.title}</option>
        ))}
      </select>
      <label className="sr-only" htmlFor="location">
        Opština
      </label>
      <input id="location" name="location" placeholder="Opština" />
      <label className="sr-only" htmlFor="appointment">
        Željeni termin
      </label>
      <input
        id="appointment"
        name="appointment"
        type="date"
        aria-label="Željeni termin"
      />
      <button className="button button-red form-submit" type="button">
        Zakažite servis <ArrowRight size={17} />
      </button>
      <p className="form-note">
        <ShieldCheck size={14} /> Vaše podatke koristimo samo za potvrdu
        termina.
      </p>
    </form>
  );
}

export default function Home() {
  return (
    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header container">
          <BrandMark />
          <nav className="desktop-nav" aria-label="Glavna navigacija">
            <a className="active" href="#top">
              Početna
            </a>
            <a href="#services">Usluge</a>
            <a href="#why-us">O nama</a>
            <a href="#reviews">Utisci</a>
            <a href="#booking">Akcije</a>
            <a href="#contact">Kontakt</a>
          </nav>
          <div className="header-contact">
            <a className="phone-link" href="tel:+381111234567">
              <Phone size={17} /> <span>011 123 4567</span>
            </a>
            <a className="button button-red header-cta" href="#booking">
              Zakažite servis
            </a>
          </div>
          <details className="mobile-menu">
            <summary aria-label="Otvori navigaciju">
              <span></span>
              <span></span>
              <span></span>
            </summary>
            <nav aria-label="Mobilna navigacija">
              <a href="#services">Usluge</a>
              <a href="#why-us">O nama</a>
              <a href="#reviews">Utisci</a>
              <a href="#booking">Zakažite servis</a>
              <a href="#contact">Kontakt</a>
            </nav>
          </details>
        </header>

        <div className="hero-content container">
          <div className="hero-copy">
            <p className="eyebrow">
              <span></span> AUTO SERVIS KOJEM MOŽETE VEROVATI
            </p>
            <h1 id="hero-title">
              Pouzdan servis
              <br />i popravka vozila.
              <br />
              <em>Vaš auto je u</em>
              <br />
              <em className="blue-text">dobrim rukama.</em>
            </h1>
            <p className="hero-description">
              Od redovnog održavanja do precizne dijagnostike i popravki —
              brinemo o vašem vozilu kao o svom.
            </p>
            <div className="hero-actions">
              <a className="button button-red" href="#booking">
                Zakažite servis <ArrowRight size={17} />
              </a>
              <a className="button button-outline" href="#booking">
                Zatražite ponudu
              </a>
            </div>
            <div className="hero-rating">
              <span className="rating-stars">★★★★★</span>
              <strong>4,9/5</strong>
              <span>od zadovoljnih vozača</span>
            </div>
          </div>
          <div className="hero-caption">
            <span className="caption-line"></span>
            <span>
              STRUČNOST KOJOJ VERUJETE
              <br />
              <b>BRIGA KOJU ZASLUŽUJETE</b>
            </span>
          </div>
        </div>
        <div className="hero-proof container">
          <div>
            <Clock3 />
            <span>
              <b>Brzi termini</b>
              <small>Bez dugog čekanja</small>
            </span>
          </div>
          <div>
            <Wrench />
            <span>
              <b>Stručni mehaničari</b>
              <small>Iskustvo i znanje</small>
            </span>
          </div>
          <div>
            <ShieldCheck />
            <span>
              <b>Garancija na rad</b>
              <small>Kvalitet iza kog stojimo</small>
            </span>
          </div>
          <div>
            <MapPin />
            <span>
              <b>Lokalni servis</b>
              <small>Uvek blizu vas</small>
            </span>
          </div>
        </div>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow eyebrow-dark">KOMPLETNA NEGA VAŠEG VOZILA</p>
            <h2>
              NAŠE AUTO <span>USLUGE</span>
            </h2>
            <p>
              Od sitnih popravki do redovnog održavanja — sve na jednom mestu.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <a
                  className="service-card"
                  href="#booking"
                  key={service.title}
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(5, 7, 10, .02) 10%, rgba(5, 7, 10, .93) 100%), url("${service.image}")`,
                  }}
                >
                  <span className="service-number">0{index + 1}</span>
                  <span className="service-card-copy">
                    <span className="service-icon">
                      <Icon size={20} />
                    </span>
                    <strong>{service.title}</strong>
                    <small>{service.description}</small>
                  </span>
                  <span className="service-arrow">
                    <ChevronRight size={17} />
                  </span>
                </a>
              );
            })}
          </div>
          <a
            className="button button-light-outline services-more"
            href="#booking"
          >
            Pogledajte sve usluge <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <section className="why-section section-pad" id="why-us">
        <div className="container">
          <div className="section-heading compact-heading">
            <p className="eyebrow eyebrow-dark">ZAŠTO DA IZABERETE NAS</p>
            <h2>
              VI VOZITE. <span>MI BRINEMO.</span>
            </h2>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div className="benefit" key={benefit.title}>
                  <span>
                    <Icon size={24} />
                  </span>
                  <b>{benefit.title}</b>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="booking-band" id="booking">
        <div
          className="booking-photo"
          role="img"
          aria-label="Automobil spreman za servis"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(8, 10, 13, .07), rgba(8, 10, 13, .7)), url("${photo("photo-1493238792000-8113da705763", 1200)}")`,
          }}
        ></div>
        <div className="container booking-layout">
          <div className="booking-copy">
            <p className="eyebrow">
              <span></span> TU SMO DA POMOGNEMO
            </p>
            <h2>
              VREME JE ZA
              <br />
              PREGLED <em>VOZILA?</em>
            </h2>
            <p>
              Rezervišite termin za manje od minuta. Javićemo vam se da
              potvrdimo detalje.
            </p>
            <ul>
              <li>
                <Check /> Bez obaveze
              </li>
              <li>
                <Check /> Jasna ponuda unapred
              </li>
              <li>
                <Check /> Kvalitetan servis
              </li>
              <li>
                <Check /> Garancija na rad
              </li>
            </ul>
          </div>
          <div className="booking-panel">
            <div className="form-heading">
              <div>
                <span className="eyebrow">BRZO I JEDNOSTAVNO</span>
                <h3>Zakažite servis</h3>
              </div>
              <CalendarDays />
            </div>
            <BookingForm />
          </div>
        </div>
      </section>

      <section className="reviews-section section-pad" id="reviews">
        <div className="container reviews-layout">
          <div className="google-rating">
            <span className="google-g">G</span>
            <p>OCENE NA GOOGLE-U</p>
            <strong>
              4,9 <span>/ 5</span>
            </strong>
            <div className="rating-stars">★★★★★</div>
            <small>Više od 250 zadovoljnih klijenata</small>
            <a href="#contact">
              Pročitajte utiske <ArrowRight size={14} />
            </a>
          </div>
          {reviews.map((review) => (
            <article className="review-card" key={review.name}>
              <div className="review-stars">★★★★★</div>
              <p>“{review.text}”</p>
              <div className="review-author">
                <span className="review-avatar">{review.name.charAt(0)}</span>
                <span>
                  <b>{review.name}</b>
                  <small>Proveren klijent</small>
                </span>
                <ShieldCheck className="review-verified" size={17} />
              </div>
            </article>
          ))}
          <aside className="warranty-card">
            <span className="warranty-icon">
              <Award size={28} />
            </span>
            <div>
              <h3>
                Naša garancija
                <br />
                <em>vaša sigurnost.</em>
              </h3>
              <ul>
                <li>
                  <Check /> Stručan i kvalitetan rad
                </li>
                <li>
                  <Check /> Provereni delovi
                </li>
                <li>
                  <Check /> Garancija na popravku
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="process-section section-pad">
        <div className="container">
          <div className="section-heading compact-heading">
            <p className="eyebrow eyebrow-dark">
              JEDNOSTAVNO OD POČETKA DO KRAJA
            </p>
            <h2>
              KAKO <span>RADIMO</span>
            </h2>
          </div>
          <div className="steps-grid">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div className="step" key={step.title}>
                  <div className="step-icon">
                    <Icon size={25} />
                    <span>{index + 1}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  {index < steps.length - 1 && (
                    <ArrowRight className="step-arrow" size={19} />
                  )}
                </div>
              );
            })}
          </div>
          <div className="brands-row">
            <span>
              PREPORUČUJEMO
              <br />
              <b>PROVERENE BRENDOVE</b>
            </span>
            <b className="brand-bosch">BOSCH</b>
            <b className="brand-castrol">Castrol</b>
            <b className="brand-michelin">MICHELIN</b>
            <b className="brand-shell">Shell</b>
            <b className="brand-mobil">
              Mobil<span>™</span>
            </b>
          </div>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="container footer-main">
          <div className="footer-about">
            <BrandMark />
            <p>
              Vaš pouzdan lokalni auto servis. Brinemo o bezbednosti,
              pouzdanosti i dugom veku vašeg vozila.
            </p>
            <div className="socials">
              <a href="#contact" aria-label="Društvene mreže">
                <MessageCircle size={16} />
              </a>
              <a href="#contact" aria-label="Fotografije servisa">
                <Camera size={16} />
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h3>USLUGE</h3>
            <a href="#services">Mali i veliki servis</a>
            <a href="#services">Popravka kočnica</a>
            <a href="#services">Auto dijagnostika</a>
            <a href="#services">Gume i trap</a>
            <a href="#services">Klima uređaji</a>
          </div>
          <div className="footer-links">
            <h3>INFORMACIJE</h3>
            <a href="#why-us">O nama</a>
            <a href="#reviews">Utisci klijenata</a>
            <a href="#booking">Zakažite servis</a>
            <a href="#contact">Kontakt</a>
          </div>
          <div className="footer-contact">
            <h3>KONTAKT I RADNO VREME</h3>
            <a href="tel:+381111234567">
              <Phone size={16} /> 011 123 4567
            </a>
            <span>
              <MapPin size={16} /> Beograd, Srbija
            </span>
            <span>
              <Clock3 size={16} /> Pon–Pet: 08:00–17:00
            </span>
            <span className="footer-saturday">Subota: 08:00–13:00</span>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Auto Servis. Sva prava zadržana.</span>
          <span>
            Uslovi korišćenja&nbsp;&nbsp; · &nbsp;&nbsp;Politika privatnosti
          </span>
          <a href="#top">Nazad na vrh ↑</a>
        </div>
        <div className="mobile-bottom-bar">
          <a href="tel:+381111234567">
            <Phone size={17} /> Pozovite
          </a>
          <a href="#booking">
            <CalendarDays size={17} /> Zakažite servis
          </a>
        </div>
      </footer>
    </main>
  );
}
