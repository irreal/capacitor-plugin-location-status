declare module '@capacitor/core' {
  interface PluginRegistry {
    LocationStatus: LocationStatusPlugin;
  }
}

export interface LocationStatusPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
