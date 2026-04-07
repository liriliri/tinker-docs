# tinker-http-request

An HTTP request testing plugin for [TINKER](https://github.com/liriliri/tinker), similar to Postman, for sending and inspecting HTTP requests.

![Screenshot](/http_request.png)

## Features

- **Multiple HTTP methods** — support for GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS
- **Request parameters** — edit query parameters with a key-value editor, auto-synced with the URL
- **Custom headers** — add and manage request headers
- **Request body** — support for JSON, URL-encoded form data, and plain text body types
- **Authentication** — built-in support for Basic Auth and Bearer Token
- **Response viewer** — view response body in text or hex mode, with status code, duration, and size
- **Response headers** — inspect response headers in a table view
- **Collections** — organize requests into collections and folders for easy management
- **Auto save** — changes to collection requests are automatically saved when switching

## Usage

1. Select an HTTP method from the dropdown (GET, POST, etc.)
2. Enter the request URL in the address bar
3. Optionally configure parameters, headers, body, or authentication in the request panel tabs
4. Click the **Send** button or press **Enter** to send the request
5. View the response body, status code, duration, and headers in the response panel

### Collections

1. Click **New Collection** in the sidebar to create a collection
2. Right-click a collection or folder to add requests or sub-folders
3. Click a saved request to load it into the editor
4. Changes are auto-saved when switching between requests
