import type { Configuration } from "electron-builder";

export default (): Configuration => ({
  appId: "me.matthewvance.pdf-generator-prototype",
  productName: "PDF Generator Prototype",
  artifactName: "${name}_${version}_${os}_${arch}.${ext}",
  directories: {
    output: "release/${version}",
  },
  files: ["dist", "dist-electron"],
  mac: {
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
