class GitHubPageLoader extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // Create an iframe element
        const iframe = document.createElement('iframe');
        iframe.src = 'https://glencorahaskins.github.io/metro-miscellaneous/zswarenski-urban-rural.html';
        iframe.style.width = '100%';
        iframe.style.height = '800px';  // Set fixed height
        iframe.style.border = 'none';

        // Append the iframe to the shadow DOM
        shadow.appendChild(iframe);
    }
}

// Define the custom element
customElements.define('github-page-loader', GitHubPageLoader);
