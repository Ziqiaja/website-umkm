* {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background: #f7f1e8;
  color: #352017;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 8%;
  background: #3b2418;
  color: white;
  position: sticky;
  top: 0;
  z-index: 10;
}

.logo {
  font-size: 1.2rem;
  font-weight: bold;
}

nav {
  display: flex;
  gap: 22px;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: 600;
}

nav a:hover {
  opacity: 0.7;
}

/* Hero */
.hero {
  min-height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 50px 20px;
  background: linear-gradient(
    135deg,
    #4b2e21,
    #9a6745
  );
  color: white;
}

.hero-content {
  max-width: 700px;
}

.subtitle {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 0.85rem;
  opacity: 0.8;
}

h1 {
  font-size: clamp(2.5rem, 8vw, 5rem);
  margin: 15px 0;
}

.description {
  font-size: 1.1rem;
  line-height: 1.8;
}

/* Button */
button {
  border: none;
  border-radius: 30px;
  padding: 13px 24px;
  margin-top: 15px;
  background: #f4b942;
  color: #352017;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  transform: translateY(-3px);
  opacity: 0.9;
}

.promo-text {
  margin-top: 20px;
  font-weight: bold;
}

/* Menu */
.menu {
  padding: 70px 8%;
  text-align: center;
}

.menu h2,
.promo h2 {
  font-size: 2.2rem;
  margin-bottom: 8px;
}

.section-desc {
  margin-bottom: 35px;
  opacity: 0.7;
}

.menu-container {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(220px, 1fr)
  );
  gap: 22px;
}

.card {
  background: white;
  padding: 28px 22px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgb(53 32 23 / 12%);
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-7px);
}

.icon {
  font-size: 2.5rem;
}

.card h3 {
  margin-bottom: 10px;
}

.card p {
  line-height: 1.6;
  color: #6b5549;
}

.card span {
  display: block;
  margin-top: 20px;
  font-weight: bold;
  font-size: 1.1rem;
}

/* Promo */
.promo {
  padding: 65px 20px;
  text-align: center;
  background: #ead7bd;
}

/* Footer */
footer {
  text-align: center;
  padding: 35px 20px;
  background: #3b2418;
  color: white;
}

footer p {
  opacity: 0.8;
}
