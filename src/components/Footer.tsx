const Footer = () => {
  return (
    <footer className="border-t border-border py-10 bg-card">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm font-bold text-gradient">miman.id</p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} miman.id — Asisten Sales AI untuk UMKM Indonesia.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
