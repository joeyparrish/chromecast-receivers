/* A receiver context must be started, or the app will get shut down by the
   device after some timeout. */
window.addEventListener('DOMContentLoaded', () => {
  const context = cast.framework.CastReceiverContext.getInstance();
  context.start({
    disableIdleTimeout: true,
  });
});
