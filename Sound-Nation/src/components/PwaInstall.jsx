import React, { useEffect, useState } from "react";

export const InstallPWA = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  function isiOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  }

  function isAndroid() {
    return /Android/.test(navigator.userAgent);
  }

  useEffect(() => {
    const alreadyInstalled = localStorage.getItem("pwaInstalled");
    if (!alreadyInstalled && !window.navigator.standalone) {
      setShowBanner(true);
    }
  }, []);

  useEffect(() => {
    const alreadyInstalled = localStorage.getItem("pwaInstalled");
    if (!alreadyInstalled) {
      setShowBanner(true);
    }
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    const handleAppInstalled = () => {
      localStorage.setItem("pwaInstalled", "true");
      setShowBanner(false);
    };
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstall = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          localStorage.setItem("pwaInstalled", "true");
        }
        setDeferredPrompt(null);
      });
    }
  };

  const handleClose = () => {
    setShowBanner(false);
  };

  return (
    <div>
      {showBanner &&
        (isAndroid() ? (
          <div className="bg-white opacity-80 flex gap-3 p-2 items-center flex-wrap justify-center">
            <p>
              Avec Google chrome vous pouvez installer notre application pour
              une meilleure expérience !
            </p>
            <button
              className="border-[2px] border-black p-1 rounded-lg active:opacity-80 active:bg-black"
              onClick={handleInstall}
            >
              Installer
            </button>
            <button
              className="border-[2px] border-black p-1 rounded-lg active:opacity-80 active:bg-black "
              onClick={handleClose}
            >
              Fermer
            </button>
          </div>
        ) : (
          <div className="bg-white opacity-80 flex p-2 items-center flex-wrap justify-center ">
            <p className="text-[0.8rem]">
              Pour installer notre application cliquer sur le bouton
            </p>
            <img
              className="w-[1em]"
              src="/images/partager.png"
              alt="Bouton pour partager sur les appareils ios"
            />
            <p className="text-[0.8rem]">de votre navigateur puis</p>
            <strong className="text-[0.8rem]">
              "ajouter à l'écran d'accueil"
            </strong>
          </div>
        ))}
    </div>
  );
};
