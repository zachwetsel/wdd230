
const currentYear = new Date().getFullYear();

const lastModifiedDate = document.lastModified;

const copyrightYearElement = document.querySelector("footer p:first-of-type");
copyrightYearElement.textContent = `©${currentYear} - Zach Wetsel - Idaho`;

const lastModifiedElement = document.querySelector("footer p:nth-of-type(2)");
lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;