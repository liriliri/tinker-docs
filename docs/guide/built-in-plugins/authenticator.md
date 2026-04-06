# tinker-authenticator

A 2FA authenticator plugin for [TINKER](https://github.com/liriliri/tinker), supporting TOTP code generation with password protection and QR code scanning.

![Screenshot](/authenticator.png)

## Features

- **TOTP code generation** — supports SHA1, SHA256, SHA512 algorithms with 6 or 8 digit codes
- **Password protection** — encrypt account secrets with AES-GCM, lock/unlock vault
- **QR code support** — scan QR codes from screenshots or images, display QR for sharing
- **Import accounts** — import via `otpauth://` URI
- **Search** — quickly filter accounts by issuer or account name
- **Auto-refresh** — codes refresh automatically on period boundaries with countdown indicator

## Usage

1. Click the **+** button to add an account manually, scan a QR code, or import via URI
2. TOTP codes are generated and refreshed automatically
3. Click a code to copy it to the clipboard
4. Optionally set a password to encrypt your account secrets
