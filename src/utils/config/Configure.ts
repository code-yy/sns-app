export class Configure<T extends object> {
  private readonly config: T;

  public constructor(config: T) {
    this.config = Object.freeze(config);
  }

  public get<K extends keyof T>(key: K): T[K] {
    return this.config[key];
  }
}
