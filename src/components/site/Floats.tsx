import { useEffect, useState } from "react";
import { MessageCircle, Download, X } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a href="https://wa.me/263771243538" target="_blank" rel="noreferrer"
      className="group fixed bottom-6 left-6 z-50 flex items-center gap-3">
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant animate-pulse-ring">
        <MessageCircle className="h-6 w-6" />
      </span>
      <span className="hidden sm:block rounded-full glass px-3 py-2 text-xs font-semibold text-foreground/90 opacity-0 -translate-x-2 transition group-hover:opacity-100 group-hover:translate-x-0">
        Chat on WhatsApp
      </span>
    </a>
  );
}

export function InstallPwa() {
  const [evt, setEvt] = useState<any>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const dismissed = typeof window !== "undefined" && localStorage.getItem("ecr-pwa-dismissed");
    const onBip = (e: Event) => {
      e.preventDefault();
      setEvt(e);
      if (!dismissed) setTimeout(() => setShow(true), 2500);
    };
    window.addEventListener("beforeinstallprompt", onBip as any);
    return () => window.removeEventListener("beforeinstallprompt", onBip as any);
  }, []);

  const install = async () => {
    if (!evt) return;
    evt.prompt();
    await evt.userChoice;
    setShow(false);
  };
  const dismiss = () => {
    setShow(false);
    try { localStorage.setItem("ecr-pwa-dismissed", "1"); } catch {}
  };

  return (
    <>
      {/* floating install button */}
      {evt && (
        <button onClick={install}
          className="fixed bottom-6 right-6 z-50 hidden md:inline-flex items-center gap-2 rounded-full gradient-gold px-5 py-3 text-sm font-semibold shadow-gold hover:scale-[1.03] transition"
          style={{ color: "var(--gold-foreground)" }}>
          <Download className="h-4 w-4" /> Install App
        </button>
      )}
      {show && (
        <div className="fixed inset-x-4 bottom-24 z-50 mx-auto max-w-md rounded-2xl glass p-4 shadow-elegant md:right-6 md:left-auto md:bottom-24">
          <div className="flex items-start gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl gradient-brand text-white">
              <Download className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold">Install ECR Translogix App</p>
              <p className="mt-0.5 text-xs text-foreground/70">Get faster access, offline support and a native experience.</p>
              <div className="mt-3 flex gap-2">
                <button onClick={install} className="rounded-full gradient-gold px-4 py-1.5 text-xs font-semibold" style={{ color: "var(--gold-foreground)" }}>Install</button>
                <button onClick={dismiss} className="rounded-full glass px-4 py-1.5 text-xs font-semibold">Later</button>
              </div>
            </div>
            <button onClick={dismiss} className="text-foreground/60 hover:text-foreground"><X className="h-4 w-4" /></button>
          </div>
        </div>
      )}
    </>
  );
}
