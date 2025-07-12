const profileBlock = document.getElementById('profile');
const shareBlock = document.getElementById('share');
const shareDesktopBlock = document.getElementById('share-desktop');

const profileBtn = document.getElementById('profile-btn');
const shareBtn = document.getElementById('share-btn');

profileBtn.addEventListener('click', () => {
  if (window.innerWidth >= 910) {
    shareDesktopBlock.classList.toggle('hidden');
  } else {
    profileBlock.classList.toggle('hidden');
    shareBlock.classList.toggle('hidden');
    shareDesktopBlock.classList.add('hidden');
  }
});
shareBtn.addEventListener('click', () => {
  profileBlock.classList.toggle('hidden');
  shareBlock.classList.toggle('hidden');
});
