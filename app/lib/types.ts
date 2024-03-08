export interface SQL {
  <T>(
    arg0: TemplateStringsArray,
    ...rest: ReadonlyArray<string | number>
  ): Promise<ReadonlyArray<T>>;
}
