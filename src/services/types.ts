export type QueryOpts = {
  enabled?: boolean
}

export type ExcludeQueryOpts<T> = Omit<T, keyof QueryOpts>
