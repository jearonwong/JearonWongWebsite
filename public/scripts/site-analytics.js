/* global Blob, Element, HTMLFormElement, IntersectionObserver, URL, document, fetch, navigator, window */
(() => {
  const script = document.currentScript;
  const analyticsEndpoint = script?.getAttribute("data-analytics-endpoint") ?? "";
  const sentEvents = new Set();

  const sourceOrigin = (() => {
    try {
      return document.referrer ? new URL(document.referrer).origin : "direct";
    } catch {
      return "unknown";
    }
  })();

  const sendAnalyticsEvent = (eventName, element, extra = {}) => {
    if (!analyticsEndpoint || !eventName) return;
    const payload = JSON.stringify({
      event: eventName,
      path: window.location.pathname,
      target: element?.tagName?.toLowerCase() ?? "unknown",
      source: sourceOrigin,
      ...extra
    });
    if (navigator.sendBeacon) {
      navigator.sendBeacon(analyticsEndpoint, new Blob([payload], { type: "application/json" }));
    } else {
      fetch(analyticsEndpoint, {
        method: "POST",
        body: payload,
        headers: { "content-type": "application/json" },
        keepalive: true
      }).catch(() => {});
    }
  };

  document.addEventListener("click", (event) => {
    const element = event.target instanceof Element
      ? event.target.closest("[data-analytics-event]")
      : null;
    if (element) sendAnalyticsEvent(element.getAttribute("data-analytics-event"), element);
  });

  document.addEventListener("submit", (event) => {
    const form = event.target instanceof HTMLFormElement ? event.target : null;
    if (form) sendAnalyticsEvent(form.getAttribute("data-analytics-event"), form);
  });

  const readTargets = document.querySelectorAll("[data-analytics-read]");
  if ("IntersectionObserver" in window && readTargets.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target;
        const eventName = target.getAttribute("data-analytics-read");
        if (entry.isIntersecting && eventName && !sentEvents.has(eventName)) {
          sentEvents.add(eventName);
          sendAnalyticsEvent(`${eventName}_read_complete`, target, { completion: 0.7 });
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.7 });
    readTargets.forEach((target) => observer.observe(target));
  }

  sendAnalyticsEvent("page_view", document.body, { source_attribution: sourceOrigin });
})();
