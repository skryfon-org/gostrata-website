export const VERSION = ''
export const REPO = 'https://github.com/skryfon-org/gostrata'
export const PKG = 'https://pkg.go.dev/github.com/skryfon-org/gostrata'
export const INSTALL_CMD = 'go install github.com/skryfon-org/gostrata@latest'
export const INSTALL_SH = 'curl -fsSL https://raw.githubusercontent.com/skryfon-org/gostrata/main/install.sh | sh'
export const INSTALL_PS = 'irm https://raw.githubusercontent.com/skryfon-org/gostrata/main/install.ps1 | iex'
export const SETUP_REPO = 'https://github.com/skryfon-org/gostrata-installer'
const SETUP = `${SETUP_REPO}/releases/latest/download`
export const SETUP_FILES = {
  linux: `${SETUP}/gostrata-setup-linux.AppImage`,
  windows: `${SETUP}/gostrata-setup-windows.exe`,
  darwin: `${SETUP}/gostrata-setup-macos.dmg`,
} as const
export const SITE_URL = 'https://www.goclean.cloud'
