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
  { title: "60 Seconds!", genre: "supervivencia", image: "https://i.postimg.cc/FzfwWhf4/67df3b78bccf83558d922e28e66e3f4a.jpg", download: "https://www.mediafire.com/file/drbucjhchyro239" },
  { title: "7 Days to Die", genre: "supervivencia", image: "https://i.postimg.cc/8Pqm99Pc/7-days-to-die-cover-rn2.webp", download: "https://gofile.io/d/ZtB9Gz" },
  { title: "A Way Out", genre: "aventura", image: "https://i.postimg.cc/JhLDRnM8/b4049e3fde920ab9e5af9f47b292a6c5.jpg", download: "https://gofile.io/d/FdT2mL" },
  { title: "Age of Empires II", genre: "estrategia", image: "https://i.postimg.cc/jq1kZWzm/f84a77a375f45765a2857d2a1bc4cb9e.jpg", download: "https://www.mediafire.com/file/yyt6ko73gzq2bkx" },
  { title: "Alien: Rogue Incursion", genre: "terror", image: "https://i.postimg.cc/g02wx7Xw/4b38e066b2a6408efeecc24101b5226e.jpg", download: "https://gofile.io/d/8GPzvI" },
  { title: "Aliens vs Predator", genre: "acción", image: "https://i.postimg.cc/3xgNfTpC/3bafbdfff60c0b7100d96e5a6d51a380.png", download: "https://gofile.io/d/mI9z8a" },
  { title: "American Theft 80s", genre: "simulación", image: "https://i.postimg.cc/br9mpR6C/8afa350a13f6422a7d8358ada7ede90b.jpg", download: "https://megadb.net/4dtoefcr5h0w" },
  { title: "American Truck Simulator", genre: "simulación", image: "https://i.postimg.cc/s2Hrw6nb/e2a3b92dff9d63f307a96268dbb4dc2d.jpg", download: "https://www.mediafire.com/file/gduwnc7z34ziynw" },
  { title: "Arcade Paradise", genre: "simulación", image: "https://i.postimg.cc/VL95DwXW/9be861dd990b06373a1c103fed5d0e4e.jpg", download: "https://megadb.net/lnzijssp10n6" },
  { title: "Arma 3", genre: "shooter táctico", image: "https://i.postimg.cc/MZNGWTmL/930115bcc4ac4aa36f6efd7a90257f0e.jpg", download: "https://gofile.io/d/ZY4BmS" },
  { title: "Assassin's Creed 1", genre: "acción/aventura", image: "https://i.postimg.cc/Vkspp90R/3d23d15e2e861d31a4f265dc815a6047.jpg", download: "https://www.mediafire.com/file/dugicpgzjuy4r19" },
  { title: "Assassin's Creed 2", genre: "acción/aventura", image: "https://i.postimg.cc/ZqGfb6nG/105fb0578a9e90c458f69bad63c38709.png", download: "https://www.mediafire.com/file/m1g8szu7esxxbo0" },
  { title: "Assassin's Creed 5", genre: "acción/aventura", image: "https://i.postimg.cc/pL9Ymywx/2947007280adf8859edffdaf48e6e558.jpg", download: "https://gofile.io/d/gOLwyT" },
  { title: "Assassin's Creed Brotherhood", genre: "acción/aventura", image: "https://i.postimg.cc/gjS8JP4v/fc535d4ae8496bf8ed9e3cd8895f5b71.jpg", download: "https://www.mediafire.com/file/qyo2wq89qkswy9q/Assassins+Creed+Brotherhood+Opti.7z/file" },
  { title: "Assassin's Creed III", genre: "acción/aventura", image: "https://i.postimg.cc/CLcmZ3dN/6671bdaf5fb27173b2e89edfc25bfd65.jpg", download: "https://www.mediafire.com/file/3alqt621rqsrjpr" },
  { title: "Assetto Corsa", genre: "carreras", image: "https://i.postimg.cc/XJnCkvzx/542c851650c2c1962d8c852785477ae4.jpg", download: "https://www.mediafire.com/file/sqyzsm5sdcz17hq" },
  { title: "Astroneer", genre: "aventura", image: "https://i.postimg.cc/zBMqXtKT/73cd0a233c1225a9eaa8761df776d695.jpg", download: "https://megadb.net/ccovsvb11hj6" },
  { title: "Balatro", genre: "cartas/roguelike", image: "https://i.postimg.cc/R0kbvhTg/704f72562168940fbfa7e9f01e0f84aa.jpg", download: "https://www.mediafire.com/file/qj1vuz1rrvu2xdq" },
  { title: "Batman Arkham Asylum", genre: "acción/aventura", image: "https://i.postimg.cc/KjMGR1XL/Batman-Arkham-Asylum-Videogame-Cover.jpg", download: "https://www.mediafire.com/file/7gxqe1zr30igmop" },
  { title: "Batman Arkham Origins", genre: "acción/aventura", image: "https://i.postimg.cc/wM8v5XQ2/MV5-BOTMw-NWRl-YTMt-MDli-Yy00-NDlh-LTgx-MGMt-N2-E1-Nj-Q0-MTZh-NWI3-Xk-Ey-Xk-Fqc-Gc-V1.jpg", download: "https://www.mediafire.com/file/tkd94t6fuatq1y1" },
  { title: "Battlefield 1942", genre: "shooter", image: "https://i.postimg.cc/vBLRj5dP/0d322cf4e021626d7b13dedbb7a164d8.jpg", download: "https://www.mediafire.com/file/u73sj4h8zfq09x7" },
  { title: "Battlefield 2", genre: "shooter", image: "https://cdn2.steamgriddb.com/thumb/3345581248da49c7be54266867fd1be5.jpg", download: "https://www.mediafire.com/file/hvu5cgyvf5vd1k3" },
  { title: "Battlefield Bad Company", genre: "shooter", image: "https://cdn2.steamgriddb.com/thumb/c9fd7a90e9a62c6fb2ec4ad91fa9dc1c.jpg", download: "https://1fichier.com/?su3ogyfuk49m2uakmg5d" },
  { title: "Bioshock", genre: "shooter/aventura", image: "https://i.postimg.cc/pVZk6q3G/e2a6b4560a2004ec7d1e9f4f407734ef.jpg", download: "https://gofile.io/d/vA3YSr" },
  { title: "Black Mesa", genre: "shooter", image: "https://i.postimg.cc/d1L7qQ4X/38ad11d2dd79838946f13e8b024720bd.jpg", download: "https://gofile.io/d/xak7Tp" },
  { title: "Borderlands 2", genre: "shooter/rpg", image: "https://cdn2.steamgriddb.com/thumb/9dd3759c9ab81b8e84def142a991a412.jpg", download: "https://www.mediafire.com/file/kvkc0rzm64jphvo" },
  { title: "Borderlands GOTY", genre: "shooter/rpg", image: "https://cdn2.steamgriddb.com/thumb/80fd4c6a571eafc1f1663d245068e188.jpg", download: "https://www.mediafire.com/file/q99owxi1oqlkphd" },
  { title: "Bully", genre: "acción/aventura", image: "https://cdn2.steamgriddb.com/thumb/7ade52071e3d6841a7647a33ad49bf58.jpg", download: "https://www.mediafire.com/file/7z01cc75r63sj27" },
  { title: "Call of Duty", genre: "shooter", image: "https://cdn2.steamgriddb.com/thumb/d50024a382b0bbae0ba02d1ef479b927.jpg", download: "https://www.mediafire.com/file/2roqgpqcv8mpe0q" },
  { title: "Call of Duty 2", genre: "shooter", image: "https://cdn2.steamgriddb.com/thumb/34f37c5fa2c142604f077d13f75523b9.jpg", download: "https://www.mediafire.com/file/y0rjelv12yvslw6" },
  { title: "Call of Duty Black Ops", genre: "shooter", image: "https://cdn2.steamgriddb.com/thumb/dccbb658940073350a2b363602750d98.jpg", download: "https://www.mediafire.com/file/f9w84e2k47btwc3/Call+Of+Duty+Black+Ops+1+Optimized.7z/file" },
  { title: "Call of Duty Black Ops 2", genre: "shooter", image: "https://cdn2.steamgriddb.com/thumb/edfd409558e3265d51f645c8623bf601.jpg", download: "https://gofile.io/d/7wdahg" },
  { title: "Call of Duty Ghosts", genre: "shooter", image: "https://cdn2.steamgriddb.com/thumb/93d8480605545dac638eb7ee47cd82ab.jpg", download: "https://gofile.io/d/7NQ0YV" },
  { title: "Call of Duty Modern Warfare", genre: "shooter", image: "https://cdn2.steamgriddb.com/thumb/0bc22e1c47f26addd1907b4931e507b1.jpg", download: "https://gofile.io/d/KuPsVO" },
  { title: "Call of Duty Modern Warfare 2", genre: "shooter", image: "https://cdn2.steamgriddb.com/thumb/cc96d0754de7d47e9a9a709eb2cd451f.jpg", download: "https://www.mediafire.com/file/775mc67lyml3101" },
  { title: "Call of Duty Modern Warfare 3", genre: "shooter", image: "https://cdn2.steamgriddb.com/thumb/0966a2a1d72914b40a6c29a88b44e104.jpg", download: "https://gofile.io/d/fWunW0" },
  { title: "Call of Duty Modern Warfare 4", genre: "shooter", image: "https://cdn2.steamgriddb.com/thumb/2f95f35bde73b295600e1089774c962f.jpg", download: "https://gofile.io/d/O8Bhrs" },
  { title: "Call of Duty World at War", genre: "shooter", image: "https://cdn2.steamgriddb.com/thumb/74382b603df4a14cc8dc4ea375ddbc64.jpg", download: "https://www.mediafire.com/file/fd1n5f2sx14jr9p" },
  { title: "Celeste", genre: "plataformas", image: "https://cdn2.steamgriddb.com/thumb/0d6728955057895546f6b7c31404c138.jpg", download: "https://www.mediafire.com/file/unzyvtejhq9k059" },
  { title: "Content Warning", genre: "terror/coop", image: "https://cdn2.steamgriddb.com/thumb/f8aba25c0d98aec777331af10b69a36e.jpg", download: "https://gofile.io/d/tixeh1" },
  { title: "Counter-Strike 1.6", genre: "shooter", image: "https://i.postimg.cc/3RJgHBHg/9e63bf4c221fde71b7a71661cc5816e1.jpg", download: "https://www.mediafire.com/file/ag28b7eumf10go2" },
  { title: "Counter-Strike Condition Zero", genre: "shooter", image: "https://i.postimg.cc/vH65MTC9/25c3d97a091af0b0c762b57b61a4bdaf.jpg", download: "https://www.mediafire.com/file/xuyob25pqpz8r5d" },
  { title: "Counter-Strike Global Offensive", genre: "shooter", image: "https://i.postimg.cc/76fn2VQy/c6a8488de86eddf87c84edf4136a1126.jpg", download: "https://gofile.io/d/RsTE3u" },
  { title: "Counter-Strike Source", genre: "shooter", image: "https://i.postimg.cc/5t93x1B8/8eb67545f410b50b77222173a4703ff5.jpg", download: "https://www.mediafire.com/file/t3fgd0iaf9p0ylw" },
  { title: "Counter-Strike Source Offensive", genre: "shooter", image: "https://i.postimg.cc/t4jkMF7t/116b3672ce07ac02d3343040267dd5ed.png", download: "https://www.mediafire.com/file/wb3nacwfrthfdns" },
  { title: "Cuphead", genre: "plataformas", image: "https://cdn2.steamgriddb.com/thumb/25dcf1554f13c36b512dfe907acc77d3.jpg", download: "https://www.mediafire.com/file/n023i97wiob8jih" },
  { title: "Cyberpunk 2077", genre: "rpg/acción", image: "https://i.postimg.cc/L5t4Ckg9/4030e2eebb977639f8836aa25a293e40.jpg", download: "https://gofile.io/d/2x3fiN" },
  { title: "Day of Defeat", genre: "shooter", image: "https://i.postimg.cc/KctgswL2/6c8e77ce4ad843eafd2b7df8cf115b34.jpg", download: "https://mega.nz/file/mEBnRK5Y#d3LqMDIPKrJkxrYbtDQM8OmfHb3b6fvNs-QkQedYTc4" },
  { title: "Day of Defeat Source", genre: "shooter", image: "https://i.postimg.cc/jS3W7bVH/703bcfbed6b6d8884fd63829d18148ea.jpg", download: "https://www.mediafire.com/file/bp3ozpp4vyw4suh/DODSPG.GamezFull.com.rar" },
  { title: "DEVOUR", genre: "terror/coop", image: "https://cdn2.steamgriddb.com/thumb/c07597c609e233d47fa8cef53c0ff45b.png", download: "https://buzzheavier.com/7hq5w82bzq9k" },
  { title: "DOOM (2016)", genre: "shooter", image: "https://i.postimg.cc/8zX2QyvB/e6b2e5d385c1503fbd55b97ba5dc4b77.jpg", download: "https://gofile.io/d/x2kBQ2" },
  { title: "DOOM 1 & 2", genre: "shooter", image: "https://i.postimg.cc/vDRJjD6Q/5d6f22980a61baf6720097c54e665565.jpg", download: "https://www.mediafire.com/file/g3c0j88i26hidw6" },
  { title: "DOOM 3", genre: "shooter", image: "https://i.postimg.cc/qMVBW7rK/22820cf96fe0c4e7154ecc4be949a746.jpg", download: "https://www.mediafire.com/file/cb2srwi84d37df3" },
  { title: "DOOM 64", genre: "shooter", image: "https://i.postimg.cc/vZ8ydgNx/7ff70c76c053d85176b96033e126b63a.jpg", download: "https://www.mediafire.com/file/7bn3tw0w98klyf9" },
  { title: "Dragon Ball FighterZ", genre: "lucha", image: "https://cdn2.steamgriddb.com/thumb/b5915f4f81b58d9994e21d596c6d8cf5.jpg", download: "https://www.mediafire.com/file/nft5udazaskbwmt/Dragon+Ball+FighterZ+Opti+V2.7z/file" },
  { title: "Dragon Ball Z: Budokai Tenkaichi 3", genre: "lucha", image: "https://cdn2.steamgriddb.com/thumb/2fcd824d9156e24ad1f7344c8723ab5f.jpg", download: "https://gofile.io/d/FSFgPh" },
  { title: "Dragon Ball Z: Kakarot", genre: "rpg/acción", image: "https://cdn2.steamgriddb.com/thumb/b384cf1e04c25c0cd4c0194e16117be2.jpg", download: "https://gofile.io/d/7lAyLV" },
  { title: "Dragon Ball: Sparking! Zero", genre: "lucha", image: "https://cdn2.steamgriddb.com/thumb/b5915f4f81b58d9994e21d596c6d8cf5.jpg", download: "https://gofile.io/d/vXn1Yr" },
  { title: "Dragon Ball: Xenoverse", genre: "lucha/rpg", image: "https://cdn2.steamgriddb.com/thumb/59867335179a10a3007e594ec8de5dea.jpg", download: "https://www.mediafire.com/file/wwq4806ffsvv15f/Dragonball+XV.7z/file" },
  { title: "Dragon Ball: Xenoverse 2", genre: "lucha/rpg", image: "https://cdn2.steamgriddb.com/thumb/6194cc9700fea83e075b89f677d3559d.jpg", download: "https://gofile.io/d/rICiCM" },
  { title: "Euro Truck Simulator 2", genre: "simulación", image: "https://i.postimg.cc/nVKxXbg3/ee9ea1ca595cff82adf00ae3996ae433.jpg", download: "https://www.mediafire.com/file/h1a7szc5qrzl53j" },
  { title: "Factorio", genre: "estrategia", image: "https://cdn2.steamgriddb.com/thumb/adc6076d3c42ca9994c2d251516936f2.jpg", download: "https://www.mediafire.com/file/xib2bgwvc98fx7o" },
  { title: "Fallout 2", genre: "rpg", image: "https://cdn2.steamgriddb.com/thumb/cd7c0dfc3f4b6ef663c6b9f371e7ff37.jpg", download: "https://megadb.net/1wl1srwg981f" },
  { title: "Fallout 3", genre: "rpg", image: "https://cdn2.steamgriddb.com/thumb/158744afcaaa2f161752ef3a435888c1.jpg", download: "https://www.mediafire.com/file/7wjquravn87tqq8" },
  { title: "Fallout 4", genre: "rpg", image: "https://cdn2.steamgriddb.com/thumb/326f943aa3d93ba49df3e93d7d538965.jpg", download: "https://gofile.io/d/vJovvv" },
  { title: "Fallout New Vegas", genre: "rpg", image: "https://cdn2.steamgriddb.com/thumb/4f18b49b993ff5f276a692742de01467.jpg", download: "https://www.mediafire.com/file/jri4y8qvwvakbfo" },
  { title: "Fallout: A Post Nuclear Role Playing Game", genre: "rpg", image: "https://cdn2.steamgriddb.com/thumb/dd2087cb0a1847a79e93fd58ddfb8cce.jpg", download: "https://buzzheavier.com/s6bbjm19wck5" },
  { title: "FIFA 16", genre: "deportes", image: "https://cdn2.steamgriddb.com/thumb/6297e676ec2b9237375eabef51ec3080.jpg", download: "https://www.mediafire.com/file/2rhekj4qtizascw" },
  { title: "FIFA 23", genre: "deportes", image: "https://cdn2.steamgriddb.com/thumb/5b02838f8ddad123f8cb5a24bcb5883f.png", download: "https://gofile.io/d/t94dji" },
  { title: "Garry's Mod", genre: "sandbox", image: "https://i.postimg.cc/433y5NkB/c7a50e20a30ee52bc64a85a283a3c493.jpg", download: "https://www.mediafire.com/file/7ymehk6r5a7my44" },
  { title: "God of War (2018)", genre: "acción/aventura", image: "https://i.postimg.cc/XYkRHjNb/5855660034a74cfe0e5fc8d57d17f4ac.jpg", download: "https://gofile.io/d/JmySlU" },
  { title: "GTA 3", genre: "acción/aventura", image: "https://i.postimg.cc/jSDxBn92/7856a3a5b530f10a69bec1c57d90330e.jpg", download: "https://www.mediafire.com/file/l1j15jhed10gp9s" },
  { title: "GTA 4", genre: "acción/aventura", image: "https://i.postimg.cc/yxfKb7yJ/a32bc8141e168ff20fdfe3f0fbc72155.jpg", download: "https://www.mediafire.com/file/2j61t7botkz0tfu" },
  { title: "GTA 5", genre: "acción/aventura", image: "https://i.postimg.cc/tg0jfSWt/af0a25e27510f77d97634a6bbe653b13.jpg", download: "https://buzzheavier.com/ouvyovqmuez0" },
  { title: "GTA Vice City", genre: "acción/aventura", image: "https://i.postimg.cc/jjNsS0tF/4eb6720c6cd70ee9e67ca6e4dc12e3df.jpg", download: "https://www.mediafire.com/file/r0x4wcpf0tqiy7v" },
  { title: "Half-Life 1", genre: "shooter", image: "https://i.postimg.cc/X7wcdXxG/79c9b8bb1e04c2b1aaa4e28092959b6a.png", download: "https://www.mediafire.com/file/2y1tl2cg7ugn3y4" },
  { title: "Half-Life 2", genre: "shooter", image: "https://i.postimg.cc/tCHFqpbw/58df6629cddf7595b29c6069414583a1.jpg", download: "https://www.mediafire.com/file/avynve7i22gxntp" },
  { title: "Half-Life Alyx", genre: "shooter/vr", image: "https://i.postimg.cc/7Lb2sL1z/980c9d1c2752a29a8cdc5669b9e22e6f.jpg", download: "https://gofile.io/d/NLPBdt" },
  { title: "Half-Life Source", genre: "shooter", image: "https://i.postimg.cc/Y95YmwWC/610ca521599e8234d165d031d478544b.jpg", download: "https://buzzheavier.com/tmlymjbqv6bj" },
  { title: "Halo: Combat Evolved", genre: "shooter", image: "https://i.postimg.cc/8kFBtZkd/477aaa93492109be31a9c22df598c952.jpg", download: "https://www.mediafire.com/file/h2ens2ylfk0x23a" },
  { title: "Halo: The Master Chief Collection", genre: "shooter", image: "https://i.postimg.cc/yYQQkDNY/92aacd8c97fcb441b2db38659f8bbde0.jpg", download: "https://gofile.io/d/dU3uoy" },
  { title: "Hollow Knight", genre: "metroidvania", image: "https://i.postimg.cc/8P04Txyy/d18c832e8c956b4ef8b92862e6bf470d.jpg", download: "https://www.mediafire.com/file/e5mm2clivttvxgk" },
  { title: "Hollow Knight: Silksong", genre: "metroidvania", image: "https://i.postimg.cc/2SWQryb0/352b19056ce934568b956d68cbcde3b5.jpg", download: "https://www.mediafire.com/file/7duqlgl7a8i0xn4" },
  { title: "Hotline Miami", genre: "acción/indie", image: "https://i.postimg.cc/MHhnF0Dd/9fad6725914cafe948673da493a02c5b.jpg", download: "https://www.mediafire.com/file/6b2kk83hcfbl2vb" },
  { title: "Hotline Miami 2", genre: "acción/indie", image: "https://i.postimg.cc/BvqXknxT/690fa493463e42a845ab4d7103309f72.jpg", download: "https://www.mediafire.com/file/zvtuvj2dgte252a" },
  { title: "Left 4 Dead", genre: "shooter/coop", image: "https://i.postimg.cc/26RSQj08/374d0ee164c2197c4976ebe31b9f6269.jpg", download: "https://www.mediafire.com/file/sc2p8zytkbh49jh" },
  { title: "Left 4 Dead 2", genre: "shooter/coop", image: "https://i.postimg.cc/66hpZXRm/248fc45afe6980b6b520b592ff9de696.jpg", download: "https://www.mediafire.com/file/tllwfv1w0wr2dvi" },
  { title: "Lethal Company", genre: "terror/coop", image: "https://i.postimg.cc/Qt9pfqGQ/Lethal-Company-pc-full-descargar.jpg", download: "https://www.mediafire.com/file/1qshm7ufackzoby" },
  { title: "Need for Speed Carbon", genre: "carreras", image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Need_for_Speed_Carbon_Game_Cover.jpg/250px-Need_for_Speed_Carbon_Game_Cover.jpg", download: "https://www.mediafire.com/file/3x0a2ee6k6k36l2" },
  { title: "Need For Speed Heat", genre: "carreras", image: "https://m.media-amazon.com/images/M/MV5BMWUzM2ZiYTUtYWMyZS00OGJkLTg3NjctOGY5MTQwNjI3YzBmXkEyXkFqcGc@.V1.jpg", download: "https://gofile.io/d/ZaUpcL" },
  { title: "Need for Speed Hot Pursuit", genre: "carreras", image: "https://cdn2.steamgriddb.com/thumb/de7ad526e049a3ca1ec1d90118227a7c.webm", download: "https://www.mediafire.com/file/q489gezhdz9nh1q" },
  { title: "Need for Speed Most Wanted", genre: "carreras", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz60TKGWilQZgVd2V33msEqmYQLyabzd44BQ&s", download: "https://www.mediafire.com/file/m6frhu8rauckr7j" },
  { title: "Need for Speed Shift", genre: "carreras", image: "https://cdn2.steamgriddb.com/thumb/c5116a04beebe9732a79db3192fe3ccd.jpg", download: "https://1fichier.com/?pjegwvp1y8gobaeprtmt" },
  { title: "Need for Speed Underground", genre: "carreras", image: "https://media.vandal.net/ivandal/12/63/1200x630/19/1963/20031230423_1.jpg", download: "https://www.mediafire.com/file/fbqz0tqosgljqg1" },
  { title: "Need for Speed Underground 2", genre: "carreras", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuQGwhKwVj8vSRyh8LhwLICIsBZXSnuq2Cug&s", download: "https://1fichier.com/?3ft9lowroxmjbo5hkrk2" },
  { title: "Paranormal Activity: The Lost Soul", genre: "terror", image: "https://cdn2.steamgriddb.com/thumb/35dbe71b7ff5e11c7d2bdd79c02ee1de.jpg", download: "https://filecrypt.cc/Container/0E5EEAAA9D.html" },
  { title: "Portal 1", genre: "puzzle", image: "https://i.postimg.cc/GtR9C3DN/60d58eafbef6da2e2bd56b40cd8835ed.jpg", download: "https://www.mediafire.com/file/v7gzqg5mlm6cml5" },
  { title: "Portal 2", genre: "puzzle", image: "https://i.postimg.cc/dt43bYV7/f27159c8f16ed644c45ba8598d7dd975.jpg", download: "https://www.mediafire.com/file/0ecatjommz9rtza" },
  { title: "Postal", genre: "acción", image: "https://cdn2.steamgriddb.com/thumb/05b5f43841bf592510e90dffa4bf2177.jpg", download: "https://drive.google.com/file/d/1hKoDNMDSxDuyzMIK6KuLTJ6cn6KE7fyF/view" },
  { title: "Postal 2", genre: "acción", image: "https://cdn2.steamgriddb.com/thumb/c5f1ae9e1dd686b68d6742d282dffe55.jpg", download: "https://www.mediafire.com/file/r7uty46mp9za3a4" },
  { title: "Postal 3", genre: "acción", image: "https://cdn2.steamgriddb.com/thumb/5425752f8adde825c324600212a85296.png", download: "https://gofile.io/d/N8kSTb" },
  { title: "Postal 4: No Regerts", genre: "acción", image: "https://cdn2.steamgriddb.com/thumb/6df40b25ac1d572cf6900484a4dae9ed.jpg", download: "https://gofile.io/d/9psRQh" },
  { title: "Postal Redux", genre: "acción", image: "https://cdn2.steamgriddb.com/thumb/43c591d089f04b624e39290f8b7fb645.jpg", download: "https://buzzheavier.com/06n9yl1draq6" },
  { title: "POSTAL: Brain Damaged", genre: "shooter", image: "https://cdn2.steamgriddb.com/thumb/a857ff5359cbc948ae2b81468839d718.jpg", download: "https://gofile.io/d/6Z3r42" },
  { title: "Project Zomboid", genre: "supervivencia", image: "https://i.postimg.cc/DZHchMdj/image.jpg", download: "https://gofile.io/d/kBvRNR" },
  { title: "Quake II", genre: "shooter", image: "https://i.postimg.cc/hPWxMg5g/5e26badb3867ac7f26d3624ca39a9df4.jpg", download: "https://megadb.net/so685fnxvzak" },
  { title: "R.E.P.O", genre: "terror/coop", image: "https://i.postimg.cc/DzHDM8Gm/9ca4292f040b141fd182d5028f27e503.jpg", download: "https://www.mediafire.com/file/dfije4lisbobo2n" },
  { title: "Red Dead Redemption", genre: "acción/aventura", image: "https://i.postimg.cc/j5sG0G56/45d78d4521ce4fb03e1f3ca8ad8b3e4e.jpg", download: "https://www.mediafire.com/file/mvfrclpp3yzxsit" },
  { title: "Red Dead Redemption 2", genre: "acción/aventura", image: "https://i.postimg.cc/L4QGwQM6/3940304b536796dcc176aa83203a3955.jpg", download: "https://gofile.io/d/5GYOmi" },
  { title: "Ricochet", genre: "acción", image: "https://i.postimg.cc/7ZR6Ln7H/18482e8eccd3978e1e99c57ecdc4fd2f.png", download: "https://www.mediafire.com/download/wo2bmst95xrb2nu/Ricochet_NoSteam_%2B_Bots_-_Catman766.rar" },
  { title: "Silent Hill 2", genre: "terror", image: "https://cdn2.steamgriddb.com/grid/b9c7994af9dd5f0684c53371e91444a8.png", download: "https://www.mediafire.com/file/6oer4zphtkednyw" },
  { title: "Silent Hill 4", genre: "terror", image: "https://cdn2.steamgriddb.com/grid/1ad89ae52344fad4251c73175f044c58.png", download: "https://www.mediafire.com/file/bo3dvduzivk78ge" },
  { title: "Spore", genre: "simulación", image: "https://i.postimg.cc/c4jsfM1C/b3e6fdc36d0f16ef605f73a6ad7f89fb.jpg", download: "https://www.mediafire.com/file/v0mjsu9hxnr18wk" },
  { title: "Stardew Valley", genre: "simulación/rpg", image: "https://i.postimg.cc/qRZFWw5n/cf30b40a1573a32248fcd0ba94e67652.jpg", download: "https://www.mediafire.com/file/h59u1mscds6lk0a" },
  { title: "Subnautica", genre: "supervivencia", image: "https://i.postimg.cc/yYrNvCjV/50896c8a37922749110dae272e7a345b.jpg", download: "https://www.mediafire.com/file/b5hvooqn6nh7r0i/Subnautica+Opti+V2.7z/file" },
  { title: "SWAT 4", genre: "shooter táctico", image: "https://cdn2.steamgriddb.com/thumb/0d74586badbef2905ed11b65c6dd6199.jpg", download: "https://www.mediafire.com/file/wmcnh5xccjr9dt4" },
  { title: "Terraria", genre: "sandbox", image: "https://i.postimg.cc/7hhk2bpj/9bc661e8362657d8cbbe4bb41d17c7f3.jpg", download: "https://www.mediafire.com/file/umcmdzestj6bthp" },
  { title: "The Witcher 3", genre: "rpg", image: "https://cdn2.steamgriddb.com/thumb/81d7c3d7086dd2365d06792a2f732ba6.webm", download: "https://gofile.io/d/c9Ca1I" },
  { title: "ULTRAKILL", genre: "shooter", image: "https://i.postimg.cc/7P0vjMmx/243106c2c200cce96781d8d5ef55bace.jpg", download: "https://www.mediafire.com/file/9o5kein19m0vbwv" },
  { title: "Watch Dogs", genre: "acción/aventura", image: "https://i.postimg.cc/7ZxpG50N/df827da31d664707840bc6c221f22d72.jpg", download: "https://www.mediafire.com/file/b00xo5isywrcw8f" },
  { title: "Watch Dogs 2", genre: "acción/aventura", image: "https://i.postimg.cc/BZHymTCK/991d70959133735c15f5ae628fa08d55.jpg", download: "https://buzzheavier.com/2u96bsppi26y" },
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
