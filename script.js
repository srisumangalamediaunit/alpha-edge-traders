function playVideo(youtubeId, title, description, element) {
    const mainVideo = document.getElementById('mainVideo');
    const videoTitle = document.getElementById('videoTitle');
    const videoDesc = document.getElementById('videoDesc');

    // YouTube Embed URL එක Auto Play වන පරිදි සකස් කිරීම
    mainVideo.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;

    // Title සහ Description වෙනස් කිරීම
    videoTitle.textContent = title;
    videoDesc.textContent = description;

    // Active Highlight එක මාරු කිරීම
    const cards = document.querySelectorAll('.video-card');
    cards.forEach(card => card.classList.remove('active'));
    element.classList.add('active');
}
