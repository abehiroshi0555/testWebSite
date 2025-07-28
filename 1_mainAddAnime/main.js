// タイルごとの詳細データ
const detailData = {
  A: { title: "Aの詳細", detail: "Aの詳細内容。" },
  B: { title: "Bの詳細", detail: "Bの詳細内容。" },
  C: { title: "Cの詳細", detail: "Cの詳細内容。" },
  D: { title: "Dの詳細", detail: "Dの詳細内容。" },
  E: { title: "Eの詳細", detail: "Eの詳細内容。" },
  F: { title: "Fの詳細", detail: "Fの詳細内容。" }
};

function openModal(key) {
  document.getElementById('modalTitle').innerText = detailData[key].title;
  document.getElementById('modalDetail').innerText = detailData[key].detail;
  document.getElementById('modal').classList.add('active');
}
function closeModal(event) {
  document.getElementById('modal').classList.remove('active');
}
// Escキーでも閉じる
window.addEventListener('keydown', function(e){
  if(e.key === "Escape") closeModal();
});
