function playVideo(videoPath, title, description, element) {
    const mainVideo = document.getElementById('mainVideo');
    const videoSource = document.getElementById('videoSource');
    const videoTitle = document.getElementById('videoTitle');
    const videoDesc = document.getElementById('videoDesc');

    // වීඩියෝ Path එක මාරු කිරීම
    videoSource.src = videoPath;
    mainVideo.load();
    mainVideo.play();

    // විස්තර වෙනස් කිරීම
    videoTitle.textContent = title;
    videoDesc.textContent = description;

    // Active Highlight එක වෙනස් කිරීම
    const cards = document.querySelectorAll('.video-card');
    cards.forEach(card => card.classList.remove('active'));
    element.classList.add('active');
}
