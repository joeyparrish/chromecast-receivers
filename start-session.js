/* A receiver context must be started, or the app will get shut down by the
   device after some timeout. */
window.addEventListener('DOMContentLoaded', () => {
  if (window.cast && cast.__platform__) {
    console.log('Starting Cast receiver session.');
    const context = cast.framework.CastReceiverContext.getInstance();

    context.start({
      // Keep the app on screen.
      disableIdleTimeout: true,

      // Receive keyboard events for HDMI-CEC.
      uiConfig: {
        touchScreenOptimizedApp: true,
      },
    });
  }
});
