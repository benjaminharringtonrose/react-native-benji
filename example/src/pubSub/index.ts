type TEventHandler = (...args: any[]) => void;

class PubSub {
  private events: Record<string, TEventHandler[]> = {};

  public subscribe = (event: string, handler: TEventHandler) => {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(handler);
    return () => {
      if (!this.events[event]) {
        return;
      }
      this.events[event] = this.events[event].filter(
        (eventHandler) => eventHandler !== handler
      );
    };
  };

  public publish = (event: string, ...args: any[]) => {
    if (!this.events[event]) {
      return;
    }
    this.events[event].forEach((handler) => handler(...args));
  };
}

export const pubSub = new PubSub();
