import type { Configuration } from "electron-builder";

export default (): Configuration => ({
  appId: "me.matthewvance.pdf-generator-prototype",
  productName: "PDF Generator Prototype",
  directories: {
    output: "release/${version}",
  },
  files: ["dist", "dist-electron"],
  mac: {
    artifactName: "${name}_${version}_${os}_${arch}.${ext}",
    icon: "icons/mac/icon.icns",
    target: [
      {
        target: "default",
        arch: ["x64", "arm64"],
      },
    ],
    identity: null,
  },
});
