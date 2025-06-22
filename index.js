 const images = [
      {
        url: "https://picsum.photos/id/1041/600/400",
        desc: "Waves crashing in the ocean."
      },
      {
         url: "https://picsum.photos/id/1025/600/400",
         desc: "Dog wrapped in a blanket."
      },
      {
        url: "https://picsum.photos/id/1020/600/400",
        desc: "A mother bear walking with her cubs on a rocky path near a lake."
      },
      {
        url: "https://picsum.photos/id/1011/600/400",
        desc: "Girl in a canoe on a turquoise lake."
      },
      {
        url: "https://picsum.photos/id/1015/600/400",
        desc: "Stunning rocky cliffs above a blue flord."
      }
    ];

    let current = 0;
    let interval;

    const mainImg = document.getElementById('mainImage');
    const imageDesc = document.getElementById('imageDesc');
    const thumbnailContainer = document.getElementById('thumbnailContainer');

    function showImage(index) {
      current = index;
      mainImg.src = images[index].url;
      imageDesc.textContent = images[index].desc;
    }

    function nextImage() {
      current = (current + 1) % images.length;
      showImage(current);
    }

    function prevImage() {
      current = (current - 1 + images.length) % images.length;
      showImage(current);
    }

    function playPause() {
      const btn = document.getElementById('playBtn');
      if (interval) {
        clearInterval(interval);
        interval = null;
        btn.textContent = 'Play';
      } else {
        interval = setInterval(nextImage, 1500);
        btn.textContent = 'Pause';
      }
    }

    // Load thumbnails
    images.forEach((img, index) => {
      const thumb = document.createElement('img');
      thumb.src = img.url;
      thumb.alt = "Thumb";
      thumb.onclick = () => showImage(index);
      thumbnailContainer.appendChild(thumb);
    });

    // Initial load
    showImage(current);