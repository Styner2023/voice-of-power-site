<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Voice of Power</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" crossorigin="anonymous">
</head>
<body>
<div class="left-panel">
    <img src="Voice_of_Power_logo_128x128_corrected.png" alt="Voice of Power Logo" class="logo">
    <h1>Voice of Power</h1>
    <div class="colorful-underline"></div>

    <input type="file" id="uploadBook" accept="application/pdf">
    <select id="voiceSelection">
        <option value="wataniVoice">Watani Stiner - Voice of Power (English)</option>
        <option value="wataniVoiceSpanish">Watani Stiner - Voice of Power (Spanish)</option>
        <option value="wataniVoiceFrench">Watani Stiner - Voice of Power (French)</option>
        <option value="wataniVoiceGerman">Watani Stiner - Voice of Power (German)</option>
        <option value="default">Default Voice</option>
        <option value="voice1">Voice 1</option>
        <option value="voice2">Voice 2</option>
    </select>
    <select id="languageSelection">
        <!-- Add language options here -->
    </select>
    <select id="voiceSpeed">
        <option value="normal">Normal Speed</option>
        <option value="slow">Slow Speed</option>
        <option value="fast">Fast Speed</option>
    </select>
    <button id="createAccount">Create Account</button>
    <div class="control-buttons">
        <button id="playButton"><i class="fas fa-play"></i> Play</button>
        <button id="pauseButton"><i class="fas fa-pause"></i> Pause</button>
    </div>

    <div class="form-section">
        <form id="loginForm">
            <input type="text" id="loginUsername" placeholder="Username" class="small">
            <input type="password" id="loginPassword" placeholder="Password" class="small">
            <button type="button" id="loginButton" class="small">Login</button>
        </form>
    </div>
</div>
<div class="right-panel">
    <div class="book-view" id="bookView">
        <iframe id="pdfViewer" style="width: 100%; height: 100%;" frameborder="0"></iframe>
    </div>
</div>
<script>
    document.getElementById('createAccount').addEventListener('click', function () {
        alert('Account creation feature coming soon!');
    });

    document.getElementById('playButton').addEventListener('click', function () {
        // Play functionality here
    });

    document.getElementById('pauseButton').addEventListener('click', function () {
        // Pause functionality here
    });

    document.getElementById('loginButton').addEventListener('click', function () {
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `username=${username}&password=${password}`
        }).then(response => response.json()).then(data => {
            if (data.success) {
                alert('Login successful');
            } else {
                alert('Login failed');
            }
        });
    });

    // File upload
    document.getElementById('uploadBook').addEventListener('change', function () {
        const fileInput = this;
        const file = fileInput.files[0];

        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            fetch('/upload', {
                method: 'POST',
                body: formData
            }).then(response => response.json()).then(data => {
                if (data.pdfUrl) {
                    const pdfViewer = document.getElementById('pdfViewer');
                    pdfViewer.src = data.pdfUrl;
                    pdfViewer.hidden = false;
                } else {
                    alert('File upload failed.');
                }
            }).catch(error => {
                console.error(error);
                alert('File upload failed. Please check your server and CORS configuration.');
            });
        }
    });
</script>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
</body>
</html>
