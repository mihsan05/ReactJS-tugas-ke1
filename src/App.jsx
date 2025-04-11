function App() {
  return (
    <>
      {/* header */}
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <a href="/" className="d-inline-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          <i className="fa-solid fa-book fa-2xl" style={{color:"#74C0FC"}}>
          </i>
          <span className="ms-2 fs-4">iam_store</span>
          </a>
          
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#home" className="nav-link px-2 ">Home</a></li>
            <li><a href="#Product" className="nav-link px-2 link-blue">Product</a></li>
            <li><a href="#Team" className="nav-link px-2 link-blue">Team</a></li>
            <li><a href="#" className="nav-link px-2 link-blue">Contact</a></li>
            
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </header>

        {/* heroes */ }
        <div className="container my-5">
  <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
      <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
        Sun Go Kong:
      </h1>
      <p className="lead">
        Perjalanan kera sakti mencari kitab suci di bantu oleh pintu doraemon dan melintasi konoha , membantu naruto menjadi hokage
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
      src="https://picsum.photos/980/700"
      alt="Bootstrap Docs"
      style={{ display: 'block', width: '100%', height: 'auto' }}
    />
  </div>
</div>

  </div>
</div>

{/*Tentang Buku */} {/* Home Content */}
<div className="container py-5">
  <div className="row align-items-center mb-5">
    <div className="col-md-6">
      <img src="https://picsum.photos/600/400" className="img-fluid rounded" alt="Tentang Bookstore" />
    </div>
    <div className="col-md-6">
      <h2 className="fw-bold">Tentang iam_store</h2>
      <p className="lead">
        Kami menyediakan berbagai macam buku dari fiksi, non-fiksi, hingga buku edukasi untuk semua kalangan. Dengan harga terjangkau dan kualitas terjamin.
      </p>
      <p>
        Bookstore kami juga menawarkan layanan peminjaman dan rekomendasi buku pilihan setiap minggunya. Ayo mulai membaca!
      </p>
    </div>
  </div>


  <div className="row text-center">
    <h3 className="mb-4 fw-bold">Kategori Buku</h3>
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src="https://picsum.photos/seed/fiksi/300/200" className="card-img-top" alt="Fiksi" />
        <div className="card-body">
          <h5 className="card-title">Fiksi</h5>
          <p className="card-text">Novel, cerita rakyat, hingga dongeng penuh imajinasi.</p>
        </div>
      </div>
    </div>
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src="https://picsum.photos/seed/edukasi/300/200" className="card-img-top" alt="Edukasi" />
        <div className="card-body">
          <h5 className="card-title">Edukasi</h5>
          <p className="card-text">Buku pelajaran, pengetahuan umum, dan referensi akademik.</p>
        </div>
      </div>
    </div>
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src="https://picsum.photos/seed/nonfiksi/300/200" className="card-img-top" alt="Non-Fiksi" />
        <div className="card-body">
          <h5 className="card-title">Non-Fiksi</h5>
          <p className="card-text">Biografi, sejarah, dan buku motivasi yang inspiratif.</p>
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

<div className="container-lg my-5">
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
<div className="container my-5">
  <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
      <h1 className="display-5 fw-bold lh-1 text-body-emphasis">
        Contact Me 📬
      </h1>
      <p className="lead">
        Punya pertanyaan, kritik, saran, atau cuma mau say hi? Kirim aja pesannya lewat form ini. Siapa tau kita bisa ngopi bareng ☕
      </p>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-semibold">Nama</label>
          <input type="text" className="form-control" id="name" placeholder="Masukkan namamu" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-semibold">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Masukkan email aktif" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label fw-semibold">Pesan</label>
          <textarea className="form-control" id="message" rows="3" placeholder="Tulis pesanmu di sini..."></textarea>
        </div>
        <button type="submit" className="btn btn-primary px-4 fw-bold">Kirim</button>
      </form>
    </div>
    <div className="col-lg-4 offset-lg-1">
      <div className="border border-success rounded-4 shadow-lg bg-light" style={{ padding: '10px' }}>
        <img
          className="rounded-3"
          src="https://picsum.photos/980/700?grayscale"
          alt="Contact Illustration"
          style={{ display: 'block', width: '100%', height: 'auto' }}
        />
      </div>
    </div>
  </div>
</div>

{/*Footer*/}
<div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
    </ul>
    <p className="text-center text-body-secondary">&copy; 2025 NFA -  Ilham Maulana</p>
  </footer>
</div>

      </div>
    </>
  )
}

export default App;
