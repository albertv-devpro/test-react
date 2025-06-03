/* src/styles.css */

:root {
  --primary-color: #eb001b; /* Mastercard Red */
  --primary-hover: #f79e1b; /* Mastercard Orange */
  --background-color: #f2f2f2;
  --header-bg: #000000;
  --footer-bg: #f8f8f8;
  --text-color: #222;
  --white: #ffffff;
  --border-radius: 6px;
  --font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: var(--font-family);
  background-color: var(--background-color);
  color: var(--text-color);
  line-height: 1.6;
}

/* Header */
header,
.main-header {
  padding: 1rem 3rem;
  background-color: var(--header-bg);
  color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 600;
  border-bottom: 1px solid #333;
}

header .logo,
.main-header .logo {
  height: 36px;
  width: auto;
}

.main-header nav,
header nav {
  display: flex;
  gap: 1.5rem;
}

nav a {
  color: var(--white);
  text-decoration: none;
  font-weight: 400;
  font-size: 1rem;
  transition: color 0.2s ease-in-out;
}

nav a:hover {
  color: var(--primary-hover);
  text-decoration: underline;
}

/* Mastercard Logo */
.logo {
  width: 100px;
  margin-bottom: 1rem;
}

/* Footer */
footer,
.site-footer {
  background-color: var(--footer-bg);
  color: #666;
  text-align: center;
  padding: 2rem 3rem;
  font-size: 0.9rem;
  border-top: 1px solid #ddd;
}

.site-footer a {
  color: #666;
  text-decoration: none;
  margin: 0 0.75rem;
}

.site-footer a:hover {
  text-decoration: underline;
}

/* Content Container */
.container {
  padding: 2rem;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  background: var(--white);
  border-radius: var(--border-radius);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

@media (max-width: 600px) {
  .container {
    padding: 1rem;
  }
}

/* Form Styling */
form {
  max-width: 420px;
  margin: 2rem auto;
  background: #fff;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

input,
button {
  display: block;
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: var(--border-radius);
  font-size: 1rem;
  box-sizing: border-box;
}

input {
  border: 1px solid #ccc;
  background-color: #fff;
  transition: border-color 0.3s;
}

input:focus {
  border-color: var(--primary-color);
  outline: none;
}

/* Buttons */
button {
  background: linear-gradient(
    to right,
    var(--primary-color),
    var(--primary-hover)
  );
  color: var(--white);
  border: none;
  font-weight: 600;
  transition: background-color 0.3s;
  cursor: pointer;
  user-select: none;
}

button:hover,
button:focus {
  opacity: 0.9;
  outline: none;
}

button:disabled {
  background-color: #888;
  cursor: not-allowed;
}

.btn-link {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(
    to right,
    var(--primary-color),
    var(--primary-hover)
  );
  color: var(--white);
  text-decoration: none;
  border-radius: var(--border-radius);
  font-weight: 600;
  transition: background-color 0.3s;
}

.btn-link:hover {
  opacity: 0.9;
}

.page-title {
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  color: var(--header-bg);
}

.page-subtitle {
  font-size: 1.125rem;
  margin-bottom: 1rem;
  color: var(--text-color);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.success-message {
  margin-top: 1rem;
  color: green;
  font-weight: 600;
  font-size: 1rem;
  border: 1px solid green;
  padding: 0.75rem 1rem;
  border-radius: var(--border-radius);
  background-color: #e6f4ea;
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.success-box {
  background: #ffffff;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  text-align: center;
  max-width: 500px;
  margin: 2rem auto;
}

.error-message {
  color: #cc0000;
  margin-top: 0.5rem;
  font-weight: 600;
}

h1,
h2,
h3 {
  line-height: 1.2;
  word-break: break-word;
}

@media (max-width: 599px) {
  .container {
    padding: 1rem;
  }

  form {
    padding: 1rem;
  }

  input,
  button {
    font-size: 0.95rem;
    padding: 0.65rem;
  }

  .page-title {
    font-size: 1.5rem;
  }

  .page-subtitle {
    font-size: 1rem;
  }
}

@media (min-width: 600px) and (max-width: 899px) {
  .container {
    padding: 1.5rem;
  }

  .page-title {
    font-size: 1.75rem;
  }
}

@media (min-width: 900px) {
  .container {
    padding: 2rem;
  }

  .page-title {
    font-size: 2rem;
  }
}
