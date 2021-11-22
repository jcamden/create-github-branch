const snapshotResolver = {
  testPathForConsistencyCheck: "../src/utils/add/add.test.ts",

  resolveSnapshotPath: (testPath: string, snapshotExtension: any) =>
    testPath.replace(/\.test\.([tj]sx?)/, `.test.$1${snapshotExtension}`),

  resolveTestPath: (snapshotFilePath: string, snapshotExtension: any) =>
    snapshotFilePath.replace(snapshotExtension, ""),
};

export default snapshotResolver;
