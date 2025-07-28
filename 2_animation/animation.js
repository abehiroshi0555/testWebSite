const videos = [
  {
    title: '『劇場版「鬼滅の刃」無限城編』特報',
    url: 'https://youtu.be/zSm6t7NzTxk?si=Teg503IbrZDBgWt-',
    id: 'zSm6t7NzTxk'
  },
  {
    title: '『劇場版「鬼滅の刃」無限城編 第一章 猗窩座再来』本予告',
    url: 'https://youtu.be/ZfIXXgqxVn8?si=VUe2_AdkcMPt4TGn',
    id: 'ZfIXXgqxVn8'
  },
  {
    title: '『劇場版「鬼滅の刃」無限城編 第一章 猗窩座再来』公開中CM（Aimer『太陽が昇らない世界』ver）',
    url: 'https://youtu.be/pFL_sFZ1UZE?si=au18M8DIZH3TG2qQ',
    id: 'pFL_sFZ1UZE'
  },
  {
    title: '『劇場版「鬼滅の刃」無限城編』特報第2弾',
    url: 'https://youtu.be/rzXxaJ4fOcc?si=MjJ7f5vDjwtk8BWO',
    id: 'rzXxaJ4fOcc'
  },
  {
    title: '『劇場版「鬼滅の刃」無限城編 第一章 猗窩座再来』第3弾キービジュアル解禁PV',
    url: 'https://youtu.be/dqNj1XnS9r8?si=HDyssTMk8QsUVe13',
    id: 'dqNj1XnS9r8'
  }
];

const gallery = document.getElementById('video-gallery');
const modal = document.getElementById('modal');
const modalVideo = document.getElementById('modal-video');
const closeModal = document.getElementById('close-modal');

videos.forEach(video => {
  // YouTubeサムネイルURL
  const thumbUrl = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;

  const div = document.createElement('div');
  div.className = 'video-thumb';
  div.onclick = () => openModal(video.id);

  div.innerHTML = `
    <img src="${thumbUrl}" alt="${video.title}">
    <div class="video-title">${video.title}</div>
  `;
  gallery.appendChild(div);
});

// モーダルを開く
function openModal(videoId) {
  modal.classList.add('active');
  // 埋め込み用のiframeをセット
  modalVideo.innerHTML = `
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
      frameborder="0" allowfullscreen allow="autoplay"></iframe>
  `;
}

// モーダルを閉じる
function closeModalFunc() {
  modal.classList.remove('active');
  modalVideo.innerHTML = ""; // 再生を停止
}
closeModal.onclick = closeModalFunc;

// モーダル背景クリックで閉じる
modal.onclick = function(e) {
  if (e.target === modal) closeModalFunc();
};

// ESCキーでも閉じる
document.addEventListener('keydown', function(e) {
  if (e.key === "Escape") closeModalFunc();
});
