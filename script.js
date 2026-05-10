// ===== LOGICA DEL CHAT (SUPABASE) =====
const SUPABASE_URL = 'https://emykbpwsvhbbftvvcfeg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVteWticHdzdmhiYmZ0dnZjZmVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgzNzAyNjMsImV4cCI6MjA5Mzk0NjI2M30.CEtXKLN5Ltwyu0b-apUmugVG-cWd_Bx80kt5HISdYWw';
const API_URL = SUPABASE_URL + '/functions/v1/peticiones';
const API_HEADERS = { 'Authorization': 'Bearer ' + SUPABASE_ANON_KEY, 'Content-Type': 'application/json' };

const peticionesList = document.getElementById('peticionesList');

async function fetchPeticiones() {
    try {
        const res = await fetch(API_URL, { headers: API_HEADERS });
        const data = await res.json();
        peticionesList.innerHTML = data.reverse().map(p => `
            <div class="pet-item">
                <b>${p.username} pidió:</b>
                <span>${p.game}</span>
            </div>
        `).join('');
        peticionesList.scrollTop = peticionesList.scrollHeight;
    } catch (e) {}
}

document.getElementById('peticionesForm').onsubmit = async (e) => {
    e.preventDefault();
    const username = document.getElementById('petUsername').value;
    const game = document.getElementById('petGame').value;
    try {
        await fetch(API_URL, { 
            method: 'POST', 
            headers: API_HEADERS, 
            body: JSON.stringify({ username, game }) 
        });
        document.getElementById('petGame').value = "";
        fetchPeticiones();
    } catch (e) {}
};

// Refresco automático de peticiones cada 10 segundos
setInterval(fetchPeticiones, 10000);
fetchPeticiones();

// ===== TODOS LOS JUEGOS =====
const games = [
    { title: "60 Seconds!", genre: "acción", image: "https://i.postimg.cc/FzfwWhf4/67df3b78bccf83558d922e28e66e3f4a.jpg", download: "https://www.mediafire.com/file/drbucjhchyro239" },
    { title: "7 Days to Die", genre: "zombies", image: "https://i.postimg.cc/8Pqm99Pc/7-days-to-die-cover-rn2.webp", download: "https://gofile.io/d/ZtB9Gz" },
    { title: "A Way Out", genre: "aventura", image: "https://i.postimg.cc/JhLDRnM8/b4049e3fde920ab9e5af9f47b292a6c5.jpg", download: "https://gofile.io/d/FdT2mL" },
    { title: "Age of Empires II", genre: "estrategia", image: "https://i.postimg.cc/jq1kZWzm/f84a77a375f45765a2857d2a1bc4cb9e.jpg", download: "https://www.mediafire.com/file/yyt6ko73gzq2bkx" },
    { title: "Alien: Rogue Incursion", genre: "terror", image: "https://i.postimg.cc/g02wx7Xw/4b38e066b2a6408efeecc24101b5226e.jpg", download: "https://gofile.io/d/8GPzvI" },
    { title: "Aliens vs Predator", genre: "shooter", image: "https://i.postimg.cc/3xgNfTpC/3bafbdfff60c0b7100d96e5a6d51a380.png", download: "https://gofile.io/d/mI9z8a" },
    { title: "American Theft 80s", genre: "sigilo", image: "https://i.postimg.cc/br9mpR6C/8afa350a13f6422a7d8358ada7ede90b.jpg", download: "https://megadb.net/4dtoefcr5h0w" },
    { title: "American Truck Sim", genre: "simulacion", image: "https://i.postimg.cc/s2Hrw6nb/e2a3b92dff9d63f307a96268dbb4dc2d.jpg", download: "https://www.mediafire.com/file/gduwnc7z34ziynw" },
    { title: "Arcade Paradise", genre: "arcade", image: "https://i.postimg.cc/VL95DwXW/9be861dd990b06373a1c103fed5d0e4e.jpg", download: "https://megadb.net/lnzijssp10n6" },
    { title: "Arma 3", genre: "militar", image: "https://i.postimg.cc/MZNGWTmL/930115bcc4ac4aa36f6efd7a90257f0e.jpg", download: "https://gofile.io/d/ZY4BmS" },
    { title: "Assassin's Creed 1", genre: "aventura", image: "https://i.postimg.cc/Vkspp90R/3d23d15e2e861d31a4f265dc815a6047.jpg", download: "https://www.mediafire.com/file/dugicpgzjuy4r19" },
    { title: "Assassin's Creed 2", genre: "aventura", image: "https://i.postimg.cc/ZqGfb6nG/105fb0578a9e90c458f69bad63c38709.png", download: "https://www.mediafire.com/file/m1g8szu7esxxbo0" },
    { title: "Assetto Corsa", genre: "carreras", image: "https://i.postimg.cc/XJnCkvzx/542c851650c2c1962d8c852785477ae4.jpg", download: "https://www.mediafire.com/file/sqyzsm5sdcz17hq" },
    { title: "Balatro", genre: "cartas", image: "https://i.postimg.cc/R0kbvhTg/704f72562168940fbfa7e9f01e0f84aa.jpg", download: "https://www.mediafire.com/file/qj1vuz1rrvu2xdq" },
    { title: "Batman Arkham series", genre: "accion", image: "https://i.postimg.cc/KjMGR1XL/Batman-Arkham-Asylum-Videogame-Cover.jpg", download: "https://www.mediafire.com/file/7gxqe1zr30igmop" },
    { title: "Bioshock", genre: "shooter", image: "https://i.postimg.cc/pVZk6q3G/e2a6b4560a2004ec7d1e9f4f407734ef.jpg", download: "https://gofile.io/d/vA3YSr" },
    { title: "Borderlands 2", genre: "fps", image: "https://cdn2.steamgriddb.com/thumb/9dd3759c9ab81b8e84def142a991a412.jpg", download: "https://www.mediafire.com/file/kvkc0rzm64jphvo" },
    { title: "Bully", genre: "aventura", image: "https://cdn2.steamgriddb.com/thumb/7ade52071e3d6841a7647a33ad49bf58.jpg", download: "https://www.mediafire.com/file/7z01cc75r63sj27" },
    { title: "COD Black Ops", genre: "shooter", image: "https://cdn2.steamgriddb.com/thumb/dccbb658940073350a2b363602750d98.jpg", download: "https://www.mediafire.com/file/f9w84e2k47btwc3/Call+Of+Duty+Black+Ops+1+Optimized.7z/file" },
    { title: "Cyberpunk 2077", genre: "rol", image: "https://i.postimg.cc/L5t4Ckg9/4030e2eebb977639f8836aa25a293e40.jpg", download: "https://gofile.io/d/2x3fiN" },
    { title: "GTA 5", genre: "accion", image: "https://i.postimg.cc/tg0jfSWt/af0a25e27510f77d97634a6bbe653b13.jpg", download: "https://buzzheavier.com/ouvyovqmuez0" },
    { title: "Half-Life 2", genre: "fps", image: "https://i.postimg.cc/tCHFqpbw/58df6629cddf7595b29c6069414583a1.jpg", download: "https://www.mediafire.com/file/avynve7i22gxntp" },
    { title: "Hollow Knight", genre: "indie", image: "https://i.postimg.cc/8P04Txyy/d18c832e8c956b4ef8b92862e6bf470d.jpg", download: "https://www.mediafire.com/file/e5mm2clivttvxgk" },
    { title: "Lethal Company", genre: "terror", image: "https://i.postimg.cc/Qt9pfqGQ/Lethal-Company-pc-full-descargar.jpg", download: "https://www.mediafire.com/file/1qshm7ufackzoby" },
    { title: "Project Zomboid", genre: "zombies", image: "https://i.postimg.cc/DZHchMdj/image.jpg", download: "https://gofile.io/d/kBvRNR" },
    { title: "Red Dead Redemp 2", genre: "accion", image: "https://i.postimg.cc/L4QGwQM6/3940304b536796dcc176aa83203a3955.jpg", download: "https://gofile.io/d/5GYOmi" },
    { title: "Stardew Valley", genre: "granjas", image: "https://i.postimg.cc/qRZFWw5n/cf30b40a1573a32248fcd0ba94e67652.jpg", download: "https://www.mediafire.com/file/h59u1mscds6lk0a" },
    { title: "ULTRAKILL", genre: "shooter", image: "https://i.postimg.cc/7P0vjMmx/243106c2c200cce96781d8d5ef55bace.jpg", download: "https://www.mediafire.com/file/9o5kein19m0vbwv" },
    { title: "Watch Dogs 2", genre: "accion", image: "https://i.postimg.cc/BZHymTCK/991d70959133735c15f5ae628fa08d55.jpg", download: "https://buzzheavier.com/2u96bsppi26y" }
];

const grid = document.getElementById('gameGrid');
const searchInput = document.getElementById('searchInput');

function renderGames() {
    const q = searchInput.value.toLowerCase();
    grid.innerHTML = '';
    games.filter(g => g.title.toLowerCase().includes(q)).forEach(game => {
        grid.innerHTML += `
            <div class="game-card">
                <span class="tag">${game.genre}</span>
                <img class="game-card-img" src="${game.image}" alt="${game.title}" loading="lazy" />
                <div class="game-card-body">
                    <h3 class="game-card-title">${game.title}</h3>
                    <a class="game-card-dl" href="${game.download}" target="_blank">descargar</a>
                </div>
            </div>`;
    });
}

searchInput.addEventListener('input', renderGames);
renderGames();