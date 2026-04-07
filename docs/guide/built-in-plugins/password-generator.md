# tinker-password-generator

A deterministic password generator plugin for [TINKER](https://github.com/liriliri/tinker), generating unique passwords from a passphrase and service name combination.

![Screenshot](/password_generator.png)

## Features

- **Deterministic generation** — generate the same password from the same passphrase and service name, no storage needed
- **Character type control** — set each character type (lowercase, uppercase, numbers, symbols, dash/underscore, space) to required, allowed, or forbidden
- **Password length** — configure the desired password length
- **Max repetition** — limit the maximum number of repeated characters
- **Passphrase visibility** — toggle passphrase visibility with show/hide
- **Copy to clipboard** — one-click copy the generated password

## Usage

1. Enter a **passphrase** (your master secret phrase)
2. Enter a **service name** (e.g. "twitter", "gmail")
3. Adjust **password length** and **max repetition** as needed
4. Configure character types by toggling each between **Required**, **Allowed**, or **Forbidden**
5. The password is generated automatically based on your inputs
6. Click the **Copy** button to copy the generated password to clipboard
