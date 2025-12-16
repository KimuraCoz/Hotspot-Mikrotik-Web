# Yukari Hotspot Template

Yukari Hotspot is a modern login page template for MikroTik RouterOS featuring a Glassmorphism design. This template is designed to be aesthetic, clean, and fully responsive across various devices (Smartphones, Tablets, and Laptops).

## Key Features

* **Glassmorphism Design:** Features a transparent look with blur effects and modern gradient backgrounds.
* **Fully Responsive:** The layout automatically adapts to screen sizes, from small mobile devices (mobile-first) to desktop screens.
* **Lightweight & Fast:** Built using HTML5, pure CSS3, and Vanilla JS without heavy frameworks.
* **Complete Page Support:**
    * Login Page (login.html)
    * Status Page (status.html)
    * Logout Page (logout.html)
    * Error Handling (error.html & errors.txt)
    * Redirect & Ads (redirect.html & radvert.html)
* **Localization:** Interface and error messages are customized for Indonesian users.

## File Structure

This repository includes the following essential files:

* login.html: The main page for entering vouchers or member credentials.
* status.html: The page displaying user quota and time session information.
* radvert.html: The advertisement popup feature.
* css/style.css: The main stylesheet with easily editable color variables.
* img/: The folder containing image assets and icons.

## Installation Guide

1.  Download this repository (ZIP).
2.  Extract the folder.
3.  Open your MikroTik WinBox.
4.  Navigate to the **Files** menu.
5.  Drag and drop the contents of the extracted folder into the `hotspot` directory in your MikroTik File List.
6.  Ensure the `HTML Directory` in **IP > Hotspot > Server Profile** points to the correct folder.

## Customization

You can change the theme colors by editing the `css/style.css` file under the `:root` section:

```css
:root {
    --accent: #ff6fa3; /* Main accent color */
    --glass-bg: rgba(255, 255, 255, 0.08); /* Background transparency level */
    /* ... */
}
