function App() {
  return (
    <>
      {/* header */}
      <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
            <li><a href="#" className="nav-link px-2 text-white">Product</a></li>
            <li><a href="#" className="nav-link px-2 text-white">Team</a></li>
            <li><a href="#" className="nav-link px-2 text-white">Contact</a></li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
              type="search"
              className="form-control form-control-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">Login</button>
            <button type="button" className="btn btn-warning">Sign-up</button>
          </div>
        </div>
      </div>
    </header>
{/*batas header */}


        {/* heroes */ }  {/* Home Content */}
        <div id="Home" className="container my-5">
  <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
    <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
    <i className="bi bi-mortarboard-fill"></i> XannPedia:
</h1>

      <p className="lead">
      Hai, Selamat datang di Xannpedia! Yuk, jelajahi ribuan buku, pengetahuan, dan cerita seru yang siap menemani harimu
      </p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Beli?</button>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Minjem</button>
      </div>
    </div>
    <div className="col-lg-4 offset-lg-1">
  <div className="border border-primary rounded-4 shadow-lg bg-white" style={{ padding: '10px' }}>
    <img
      className="rounded-3"
      src="https://picsum.photos/600/400?random=4"
      alt="Bootstrap Docs"
      style={{ display: 'block', width: '100%', height: 'auto' }}
    />
  </div>
</div>

  </div>
</div>

              {/* Bagian Card Kategori Buku */}
<div className="container px-4 py-5" id="custom-cards">
  <h2 className="pb-2 border-bottom">Book Categories</h2>

  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 py-4">
    {/* Card 1 */}
    <div className="col">
      <div className="card h-100 text-white bg-dark shadow-sm">
        <img src="https://picsum.photos/600/400?random=1" className="card-img-top" alt="Fiksi" />
        <div className="card-body">
          <h5 className="card-title">Fiksi</h5>
          <p className="card-text">Buku yang berisi cerita imajinatif seperti novel, cerpen, fantasi, hingga drama romantis.</p>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="col">
      <div className="card h-100 text-white bg-dark shadow-sm">
        <img src="https://picsum.photos/600/400?random=2" className="card-img-top" alt="Non Fiksi" />
        <div className="card-body">
          <h5 className="card-title">Non Fiksi</h5>
          <p className="card-text">Kategori buku berdasarkan fakta dan realita seperti biografi, sejarah, dan sains populer.</p>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="col">
      <div className="card h-100 text-white bg-dark shadow-sm">
        <img src="https://picsum.photos/600/400?random=3" className="card-img-top" alt="Teknologi" />
        <div className="card-body">
          <h5 className="card-title">Teknologi</h5>
          <p className="card-text">Buku tentang perkembangan teknologi, komputer, pemrograman, dan dunia digital modern.</p>
        </div>
      </div>
    </div>

    {/* Card 4 */}
    <div className="col">
      <div className="card h-100 text-white bg-dark shadow-sm">
        <img src="https://picsum.photos/600/400?random=4" className="card-img-top" alt="Bisnis & Ekonomi" />
        <div className="card-body">
          <h5 className="card-title">Bisnis & Ekonomi</h5>
          <p className="card-text">Berisi pengetahuan tentang manajemen, keuangan, investasi, dan strategi bisnis modern.</p>
        </div>
      </div>
    </div>
  </div>
</div>


{ /*Product */ }
<section id="Product" className="py-5 text-center container">
  <div className="row py-lg-5">
    <div className="col-lg-6 col-md-8 mx-auto">
      <h1 className="fw-bold text-primary">Koleksi Buku Unggulan</h1>
      <p className="lead text-muted">
        Temukan berbagai buku pilihan terbaik dengan cerita menarik, cocok untuk menemani waktu santaimu.
      </p>
      <p>
        <a href="#produk" className="btn btn-primary my-2 m-2">
          Lihat Koleksi
        </a>
        <a href="#kontak" className="btn btn-outline-primary my-2">
          Hubungi Kami
        </a>
      </p>
    </div>
  </div>
</section>

  <div className="album py-5 bg-body-tertiary">
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col">
          <div className="card shadow-sm">
          <img src="https://picsum.photos/seed/edukasi/300/200" className="card-img-top" alt="Edukasi" />
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img src="https://picsum.photos/600/400" className="img-fluid rounded" alt="Tentang Bookstore" />
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img src="https://picsum.photos/600/400?random=5" className="img-fluid rounded" alt="Tentang Bookstore" />
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img src="https://picsum.photos/600/400?random=4" className="img-fluid rounded" alt="Tentang Bookstore" />
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img src="https://picsum.photos/600/400?random=2" className="img-fluid rounded" alt="Tentang Bookstore" />
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img src="https://picsum.photos/600/400?random=1" className="img-fluid rounded" alt="Tentang Bookstore" />
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

{/* Team */}

<div id="Team" className="container-lg my-5">
  <div className="p-4 pb-0 pe-lg-0 pt-lg-5 rounded-3 border shadow-lg bg-light">
    <div className="row text-center">
    <h1 className="display-5 fw-bold lh-1 text-body-emphasis mb-5">
  Team
</h1>
      {/* Kolom 1 */}
      <div className="col-lg-4 mb-4">
        <img
          src="https://picsum.photos/200?random=1"
          alt="Team Member"
          className="rounded-circle mx-auto d-block mb-3 shadow-sm"
          width="160"
          height="160"
        />
        <h2 className="fw-bold">Team 1</h2>
        <p>Ahli strategi dan penyusun rencana luar biasa. Kalau ada yang ribet, dia yang uraiin!</p>
        <p><a className="btn btn-outline-primary fw-semibold" href="#">View details &raquo;</a></p>
      </div>

      {/* Kolom 2 */}
      <div className="col-lg-4 mb-4">
        <img
          src="https://picsum.photos/200?random=2"
          alt="Team Member"
          className="rounded-circle mx-auto d-block mb-3 shadow-sm"
          width="160"
          height="160"
        />
        <h2 className="fw-bold">Team 2</h2>
        <p>Master implementasi. Coding siang malam dan ngopi tanpa batas. Sang legenda debugging!</p>
        <p><a className="btn btn-outline-primary fw-semibold" href="#">View details &raquo;</a></p>
      </div>

 {/* Kolom 3 */}
 <div className="col-lg-4 mb-4">
        <img
          src="https://picsum.photos/200?random=9"
          alt="Team Member"
          className="rounded-circle mx-auto d-block mb-3 shadow-sm"
          width="160"
          height="160"
        />
        <h2 className="fw-bold">Team 3</h2>
        <p>Master implementasi. Coding siang malam dan ngopi tanpa batas. Sang legenda debugging!</p>
        <p><a className="btn btn-outline-primary fw-semibold" href="#">View details &raquo;</a></p>
      </div>

    </div>
  </div>
</div>


{/* Contact Me */}
<div id="Contact" className="container-fluid my-5">
  <div className="row justify-content-center align-items-center">
    <div className="col-md-10">
      <div className="p-4 rounded-4 shadow-lg" style={{ 
        background: 'rgba(255, 255, 255, 0.75)', 
        backdropFilter: 'blur(10px)', 
        WebkitBackdropFilter: 'blur(10px)', 
        border: '1px solid rgba(255, 255, 255, 0.3)' 
      }}>
        <div className="row">
          {/* Left side - form */}
          <div className="col-md-6 px-4 py-3">
            <h2 className="fw-bold text-primary mb-3">
              <i className="bi bi-chat-dots-fill me-2"></i>Hubungi Kami
            </h2>
            <p className="text-muted">
              Ada yang ingin kamu sampaikan? Kami siap mendengarkan!
            </p>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">Nama</label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
                  <input type="text" className="form-control" id="name" placeholder="Namamu siapa?" />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">Email</label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-envelope-fill"></i></span>
                  <input type="email" className="form-control" id="email" placeholder="Email aktifmu" />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-semibold">Pesan</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Ketik pesanmu di sini..."></textarea>
              </div>
              <button type="submit" className="btn btn-success fw-bold px-4">
                <i className="bi bi-send-fill me-1"></i>Kirim
              </button>
            </form>
          </div>

          {/* Right side - image & info */}
          <div className="col-md-6 text-center d-flex flex-column justify-content-center p-4">
            <img 
              src="https://picsum.photos/600/400?grayscale" 
              alt="Ilustrasi Kontak" 
              className="img-fluid rounded-3 mb-3 shadow-sm"
            />
            <p className="text-muted">📍 Perpustakaan Xannpedia<br />Jl. Literasi No. 42, Book City</p>
            <p className="text-muted">📞 0812-3456-7890<br />✉️ info@xannpedia.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


{/*Footer*/}
<footer>
      <div className="bg-dark text-secondary px-4 py-1 text-center">
        <div className="py-3">
          <div className="mx-auto" style={{ maxWidth: '1200px' }}>
            <h2 className="fs-5 mb-2 text-white">NF ACADEMY - MUHAMAD IHSAN - XANNPEDIA.</h2>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              {/* Tambahkan link atau elemen lain jika diperlukan */}
            </div>
          </div>
        </div>
      </div>
    </footer>

    </>
  )
}

export default App;
