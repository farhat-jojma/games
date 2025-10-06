// gdsdk-stub.js
// Fake SDK for local testing (no ads)

(function () {
    console.log("gdsdk-stub.js loaded - ads disabled.");

    // Simule l'objet gdsdk attendu par le jeu
    window.gdsdk = {
        showBanner: function () {
            console.log("Stub: showBanner()");
            return Promise.resolve();
        },
        showInterstitial: function () {
            console.log("Stub: showInterstitial()");
            // On simule que la pub est déjà passée
            if (window.GD_OPTIONS && window.GD_OPTIONS.onEvent) {
                window.GD_OPTIONS.onEvent({ name: "SDK_GAME_START" });
            }
            return Promise.resolve();
        },
        showRewarded: function () {
            console.log("Stub: showRewarded()");
            // Simule immédiatement la fin de la pub récompensée
            if (window.GD_OPTIONS && window.GD_OPTIONS.onEvent) {
                window.GD_OPTIONS.onEvent({ name: "SDK_REWARDED_WATCH_COMPLETE" });
            }
            return Promise.resolve();
        },
        preloadAd: function () {
            console.log("Stub: preloadAd()");
            return Promise.resolve();
        },
        destroyAd: function () {
            console.log("Stub: destroyAd()");
            return Promise.resolve();
        }
    };

    // Envoie automatiquement les événements principaux du SDK
    setTimeout(() => {
        if (window.GD_OPTIONS && window.GD_OPTIONS.onEvent) {
            console.log("Stub: triggering SDK_GAME_START");
            window.GD_OPTIONS.onEvent({ name: "SDK_GAME_START" });
        }
    }, 500);

    // Ajoute aussi un faux "pause" au cas où le jeu le demande
    setTimeout(() => {
        if (window.GD_OPTIONS && window.GD_OPTIONS.onEvent) {
            console.log("Stub: triggering SDK_GAME_PAUSE");
            window.GD_OPTIONS.onEvent({ name: "SDK_GAME_PAUSE" });
        }
    }, 2000);

})();
