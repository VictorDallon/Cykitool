fetch('tools-list-crypto.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('tools-list-container-crypto').innerHTML = data;
    });

fetch('tools-list-forensics.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('tools-list-container-forensics').innerHTML = data;
    });

fetch('tools-list-network.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('tools-list-container-network').innerHTML = data;
    });

fetch('tools-list-web.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('tools-list-container-web').innerHTML = data;
    });

fetch('tools-list-stegano.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('tools-list-container-stegano').innerHTML = data;
    });