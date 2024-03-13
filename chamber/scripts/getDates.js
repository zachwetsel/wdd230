
const currentYear = new Date().getFullYear();

const lastModifiedDate = document.lastModified;

const copyrightYearElement = document.querySelector("footer p:first-of-type");
copyrightYearElement.textContent = `©${currentYear} - Zach Wetsel - Project for WDD230`;

const lastModifiedElement = document.querySelector("footer p:nth-of-type(2)");
lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;