/*
  ========================================
  Jiwa & Interaktivitas (script.js)
  Pusaka Digital: Tuan Astral
  ========================================
*/

// Menunggu hingga seluruh raga (DOM) terbentuk sempurna sebelum mengalirkan energi
document.addEventListener("DOMContentLoaded", () => {
    
    /* 
      --------------------------------------------------
      1. JURUS DIMENSI (Dark Mode & Local Storage)
      --------------------------------------------------
    */
    const themeToggleBtn = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const htmlElement = document.documentElement;

    // Memeriksa 'Cincin Penyimpanan' (Local Storage) untuk melihat memori tema sebelumnya
    const savedTheme = localStorage.getItem("theme");

    // Fungsi untuk mengubah ikon berdasarkan tema
    const updateIcon = (isDark) => {
        if (isDark) {
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");
            themeIcon.classList.replace("text-gray-800", "text-yellow-400"); // Aksen warna sun
        } else {
            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");
            themeIcon.classList.replace("text-yellow-400", "text-gray-800"); // Aksen warna moon
        }
    };

    // Jika ada memori tema gelap, langsung aktifkan
    if (savedTheme === "dark") {
        htmlElement.classList.add("dark");
        updateIcon(true);
    } else {
        updateIcon(false);
    }

    // Mendengarkan pemicu saat Tuan menekan tombol pergantian dimensi
    themeToggleBtn.addEventListener("click", () => {
        // Toggle class 'dark' pada elemen HTML
        htmlElement.classList.toggle("dark");
        
        // Memeriksa apakah sekarang berada di dimensi gelap
        const isDarkNow = htmlElement.classList.contains("dark");
        
        // Menyimpan status dimensi baru ke dalam Local Storage
        localStorage.setItem("theme", isDarkNow ? "dark" : "light");
        
        // Memperbarui wujud ikon
        updateIcon(isDarkNow);
    });


    /* 
      --------------------------------------------------
      2. JURUS NADA SPIRITUAL (Music Player)
      --------------------------------------------------
    */
    const musicWidget = document.getElementById("music-widget");
    const bgMusic = document.getElementById("bg-music");
    const playIcon = document.getElementById("play-icon");
    const musicStatus = document.getElementById("music-status");

    let isPlaying = false;

    // Menurunkan volume agar tidak mengagetkan batin pengunjung (30% volume)
    bgMusic.volume = 0.3;

    // Mendengarkan pemicu saat widget musik ditekan
    musicWidget.addEventListener("click", () => {
        if (isPlaying) {
            // Jika sedang bernyanyi, hentikan
            bgMusic.pause();
            playIcon.classList.remove("fa-pause");
            playIcon.classList.add("fa-play");
            musicStatus.textContent = "Sedang Berhenti";
            musicStatus.classList.remove("text-ghibli-accent", "dark:text-astral-accent");
        } else {
            // Jika sedang diam, alirkan nada
            bgMusic.play();
            playIcon.classList.remove("fa-play");
            playIcon.classList.add("fa-pause");
            musicStatus.textContent = "Sedang Mengalun...";
            musicStatus.classList.add("text-ghibli-accent", "dark:text-astral-accent", "font-semibold");
        }
        
        // Membalikkan status
        isPlaying = !isPlaying;
    });

    /* 
      --------------------------------------------------
      4. JURUS UTUSAN BAYANGAN (Pengiriman Pesan Gaib)
      --------------------------------------------------
    */
    const contactForm = document.getElementById("contact-form");
    // Memastikan Tuan telah menambahkan id="submit-btn" pada tombol submit
    const submitBtn = document.getElementById("submit-btn"); 

    if (contactForm) {
        contactForm.addEventListener("submit", async function (e) {
            // Menahan browser agar tidak berpindah dimensi (refresh/redirect)
            e.preventDefault();

            // Menyimpan wujud asli tombol
            const originalBtnText = submitBtn.innerHTML;
            
            // Mengubah aura tombol menjadi mode pengiriman
            submitBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Mengirim Energi...';
            submitBtn.disabled = true;
            submitBtn.classList.add("opacity-70", "cursor-not-allowed");

            try {
                // Mengumpulkan data energi dari wadah formulir
                const formData = new FormData(contactForm);

                // Melepaskan utusan bayangan (Fetch API) secara diam-diam
                const response = await fetch(contactForm.action, {
                    method: contactForm.method,
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Jika utusan berhasil menembus dimensi dan mengantarkan pesan
                    submitBtn.innerHTML = '<i class="fas fa-check"></i> Pesan Terkirim!';
                    submitBtn.classList.remove("bg-ghibli-accent", "dark:bg-astral-accent");
                    submitBtn.classList.add("bg-green-500", "text-white");
                    
                    // Menyucikan wadah (mengosongkan form)
                    contactForm.reset();
                } else {
                    // Jika formasi Formspree menolak energi tersebut
                    submitBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Segel Ditolak';
                    submitBtn.classList.remove("bg-ghibli-accent", "dark:bg-astral-accent");
                    submitBtn.classList.add("bg-red-500", "text-white");
                }
            } catch (error) {
                // Jika jalur qi (koneksi internet) terputus
                submitBtn.innerHTML = '<i class="fas fa-times"></i> Gangguan Dimensi';
            }

            // Mengembalikan wujud dan aura tombol ke kondisi semula setelah 4 detik
            setTimeout(() => {
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                submitBtn.classList.remove("opacity-70", "cursor-not-allowed", "bg-green-500", "bg-red-500");
                submitBtn.classList.add("bg-ghibli-accent", "dark:bg-astral-accent");
            }, 4000);
        });
    }
    /* 
      --------------------------------------------------
      3. PENGHALUSAN TRANSAKSI (Mencegah Kilatan Energi)
      --------------------------------------------------
      Menghapus class preload jika ada, agar animasi transisi css 
      baru berjalan setelah halaman termuat sempurna.
    */
    document.body.classList.remove("preload-transitions");

});