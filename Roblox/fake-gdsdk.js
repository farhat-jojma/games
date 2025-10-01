// fake-gdsdk.js
(function () {
  // Ne pas écraser si déjà présent
  window.gdsdk = window.gdsdk || {};

  // Méthodes courantes utilisées par les jeux GameDistribution
  window.gdsdk.showAd = function (adType) {
    console.log("[fake-gdsdk] showAd called:", adType);
    // Simuler le comportement asynchrone du SDK (retourne une Promise)
    return Promise.resolve({ result: "no-ad", adType: adType });
  };

  window.gdsdk.preloadAd = function (adType) {
    console.log("[fake-gdsdk] preloadAd called:", adType);
    return Promise.resolve({ result: "preloaded-fake", adType: adType });
  };

  window.gdsdk.sendEvent = function (obj) {
    console.log("[fake-gdsdk] sendEvent:", obj);
    // pas de return nécessaire
  };

  // gestion des écouteurs si le jeu enregistre des callbacks
  const handlers = {};
  window.gdsdk.on = function (eventName, cb) {
    handlers[eventName] = handlers[eventName] || [];
    handlers[eventName].push(cb);
  };
  window.gdsdk.off = function (eventName, cb) {
    if (!handlers[eventName]) return;
    if (!cb) { handlers[eventName] = []; return; }
    handlers[eventName] = handlers[eventName].filter(h => h !== cb);
  };
  window.gdsdk._emit = function (eventName, data) {
    (handlers[eventName] || []).forEach(cb => {
      try { cb(data); } catch (e) { console.error(e); }
    });
  };

  // propriétés utiles (simuler)
  window.gdsdk.isInitialized = true;
  window.gdsdk.platform = "fake";

  console.log("[fake-gdsdk] initialized");
})();
