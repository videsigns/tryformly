// Function to load the npm-hosted script
function loadNpmScript() {
  var script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/vds-formly@latest/main.js";
  script.type = "text/javascript";
  document.head.appendChild(script);
}

// Load the npm script when the GitHub script is executed
loadNpmScript();
