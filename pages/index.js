export default function Home() {
  return (
      <>
          {/* Bodyne */}
          <div className="bodyne">
            
            {/* Section First */}
            <div className="container section-first mt-5 pt-4 mb-5 pb-5" id="awal">
              <div className="col-md-12 row reverse">
                <div className="section-first-left col-md-6 mt-5">
                  <h1 className="sfl-judul mt-2">
                    Anfaa Baitul Maal
                  </h1>
                  <span className="sfl-subjudul">
                    Lembaga Amil Zakat
                  </span>
                  <p className="sfl-deskripsi py-2">
                    Yayasan Anfaa Baitul Maal Indonesia hadir untuk membantu masyarakat, dan memberikan yang terbaik.
                  </p>
                  <div className="btn btn-success btn-contactme mb-5">
                    Contact Me
                    <img className="ms-1" src="/assets/icons/send.svg" alt='' />
                  </div>
                  <div className="scroll-down mt-5 pt-5">
                    <img src="/assets/icons/icon_mouse.svg" alt='' />
                    <span className="mx-2">Scroll Down</span>
                    <img src="/assets/icons/icon_down.svg" alt='' />
                  </div>
                </div>
                <div className="section-first-right col-md-6 d-flex justify-content-end">
                  <img src="/assets/icons/logo_anfaa.png" className="sfr-vector" alt='' />
                </div>
              </div>
            </div>

            {/* Section Second */}
            <div className="container section-second pb-5" id="profil">
              <div className="ss-first">
                <h1 className="ssf-judul">Profile</h1>
                <h3 className="ssf-subjudul">Perkenalan tentang kami</h3>
              </div>
              <div className="col-md-12 row my-5">
                <div className="col-md-6 justify-content-center d-flex pb-2 alcen">
                  <div id="carouselExampleIndicators" className="carousel slide mx-auto w-400" data-ride="carousel">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner rounded">
                      <div className="carousel-item active">
                        <img className="d-block w-100" src="/assets/images/first_slide.svg" alt="First slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src="/assets/images/second_slide.svg" alt="Second slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100" src="/assets/images/third_slide.svg" alt="Third slide" />
                      </div>`
                    </div>
                    <a className="carousel-control-prev" data-bs-target="#carouselExampleIndicators" type="button" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </a>
                    <a className="carousel-control-next" data-bs-target="#carouselExampleIndicators" type="button" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-cover-green p-4">
                    <table className="mb-4 table-companay-name">
                      <tbody className="va-top">
                        <tr><td>Nama</td><td>:</td><td>Yayasan Anfaa Baitul Maal Indonesia</td></tr>
                        <tr><td>Telp</td><td>:</td><td>085159956210</td></tr>
                        <tr><td>Email</td><td>:</td><td>anfaabaitulmaalindonesia@gmail.com</td></tr>
                        <tr><td>Alamat</td><td>:</td><td>Jl. Cari berkah sebanyak mungkin, Kel. Demi Umat, Kec. Patrang, Jember</td></tr>
                      </tbody>
                    </table>
                    <div className="btn btn-lg btn-success col-md-12">
                      <img src="/assets/icons/icon_ig.svg" alt='' /> anfaabaitulmaalindonesia
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section third */}
            <div className="container section-third pb-5" id="program">
              <div className="st-first mb-5">
                <h1 className="stf-judul">Program</h1>
                <h3 className="stf-subjudul">Detail Program Utama Kami</h3>
              </div>
              <div className="col-md-12 row m-0">
                <div className="col-md-4 mb-4">
                  <div className="st-card">
                    <img src="/assets/icons/icon_toga.svg" className="mb-3" alt='' />
                    <h1 className="st-judul">Pendidikan</h1>
                    <p className="st-deskripsi">Kami berkomitmen untuk memberikan layanan pendidikan kepada kaum duafa.</p>
                    <div className="btn btn-success btn-more">
                      Selengkapnya 
                      <img src="/assets/icons/icon_arrow_right.svg" className="ms-2" alt='' />
                    </div>
                  </div>
                </div>          
                <div className="col-md-4 mb-4">
                  <div className="st-card">
                    <img src="/assets/icons/icon_toga.svg" className="mb-3" alt='' />
                    <h1 className="st-judul">Pendidikan</h1>
                    <p className="st-deskripsi">Kami berkomitmen untuk memberikan layanan pendidikan kepada kaum duafa.</p>
                    <div className="btn btn-success btn-more">
                      Selengkapnya 
                      <img src="/assets/icons/icon_arrow_right.svg" className="ms-2" alt='' />
                    </div>
                  </div>
                </div>          
                <div className="col-md-4 mb-4">
                  <div className="st-card">
                    <img src="/assets/icons/icon_toga.svg" className="mb-3" alt='' />
                    <h1 className="st-judul">Pendidikan</h1>
                    <p className="st-deskripsi">Kami berkomitmen untuk memberikan layanan pendidikan kepada kaum duafa.</p>
                    <div className="btn btn-success btn-more">
                      Selengkapnya 
                      <img src="/assets/icons/icon_arrow_right.svg" className="ms-2" alt='' />
                    </div>
                  </div>
                </div> 
                <div className="col-md-4 mb-4">
                  <div className="st-card">
                    <img src="/assets/icons/icon_toga.svg" className="mb-3" alt='' />
                    <h1 className="st-judul">Pendidikan</h1>
                    <p className="st-deskripsi">Kami berkomitmen untuk memberikan layanan pendidikan kepada kaum duafa.</p>
                    <div className="btn btn-success btn-more">
                      Selengkapnya 
                      <img src="/assets/icons/icon_arrow_right.svg" className="ms-2" alt='' />
                    </div>
                  </div>
                </div>          
                <div className="col-md-4 mb-4">
                  <div className="st-card">
                    <img src="/assets/icons/icon_toga.svg" className="mb-3" alt='' />
                    <h1 className="st-judul">Pendidikan</h1>
                    <p className="st-deskripsi">Kami berkomitmen untuk memberikan layanan pendidikan kepada kaum duafa.</p>
                    <div className="btn btn-success btn-more">
                      Selengkapnya 
                      <img src="/assets/icons/icon_arrow_right.svg" className="ms-2" alt='' />
                    </div>
                  </div>
                </div>          
                <div className="col-md-4 mb-4">
                  <div className="st-card">
                    <img src="/assets/icons/icon_toga.svg" className="mb-3" alt='' />
                    <h1 className="st-judul">Pendidikan</h1>
                    <p className="st-deskripsi">Kami berkomitmen untuk memberikan layanan pendidikan kepada kaum duafa.</p>
                    <div className="btn btn-success btn-more">
                      Selengkapnya 
                      <img src="/assets/icons/icon_arrow_right.svg" className="ms-2" alt='' />
                    </div>
                  </div>
                </div>          
              </div>
            </div>

            {/* Section fourth */}
            <div className="container section-third pb-5" id="layanan">
              <div className="st-first mb-5 pt-2">
                <h1 className="stf-judul">Layanan</h1>
                <h3 className="stf-subjudul">Layanan yang kami tawarkan</h3>
              </div>
              <div className="col-md-12 row m-0">
                <div className="col-md-4 mb-4">
                  <div className="sh-card bg-purple">
                    <h1 className="sh-judul">Jemput Donasi</h1>
                    <hr className="sh-garis" />
                    <img src="/assets/icons/icon_jemput_donasi.svg" className="sh-img p-4" alt='' />
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="sh-card bg-green">
                    <h1 className="sh-judul">Donasi Kaleng</h1>
                    <hr className="sh-garis" />
                    <img src="/assets/icons/icon_donasi_kaleng.svg" className="sh-img p-4" alt='' />
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="sh-card bg-purple">
                    <h1 className="sh-judul">Donasi Online</h1>
                    <hr className="sh-garis" />
                    <img src="/assets/icons/icon_donasi_online.svg" className="sh-img p-4" alt='' />
                  </div>
                </div>
              </div>
            </div>

          </div>
          {/* End Bodyne */} 
      </>
  )
}
