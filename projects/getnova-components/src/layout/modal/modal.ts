export abstract class Modal {

  private close0: (() => void) | undefined;

  get close(): () => void {
    if (!this.close0) {
      throw new Error('Close function is not set.');
    }

    return this.close0;
  }

  set close(fn: () => void) {
    if (this.close0) {
      throw new Error('Close function is already set.');
    }

    if (fn) {
      this.close0 = fn;
    }
  }
}
