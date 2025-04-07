import classes from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <small className={classes.copyright}>&copy; 2025 Krzysztof Gasik</small>
      <p className={classes.information}>
        <span className="semi-bold">About this portfolio:</span> built with
        React & Next.js using Server Actions, TypeScript, CSS, Framer Motion,
        React Email & Resend.{" "}
        <span className="semi-bold">Hosted on Vercel</span>
      </p>
    </footer>
  );
}
