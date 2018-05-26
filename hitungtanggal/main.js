function hitungTanggal() {
  
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  
  if(dd<10) {
      dd = '0'+dd
  } 
  
  if(mm<10) {
      mm = '0'+mm
  } 
  
  var tanggalLahir = document.getElementById('tanggalLahir').value;
  var tanggalArray = tanggalLahir.split('-');
  console.log(tanggalArray[2])

  var jumlahHariTahun = 0;
  for (var i = Number(tanggalArray[0])+1; i < yyyy; i++) {
    if (i % 4 === 0) {
      if (i % 100 === 0) {
        if (i % 400 === 0) {
          jumlahHariTahun = jumlahHariTahun + 366;
        }
        else {
          jumlahHariTahun = jumlahHariTahun + 365;
        } 
      }
      else {
        jumlahHariTahun = jumlahHariTahun + 366;
      }
    }
    else {
      jumlahHariTahun = jumlahHariTahun + 365;
    }
  }

  var jumlahHariBulanLahir = 0;
  var jumlahHariTanggalLahir = 0;

  if (tanggalArray[1] < 8) {
    if (tanggalArray[1] % 2 === 0) {
      if(tanggalArray[1] === 2) {
        if (Number(tanggalArray[0]) % 4 === 0) {
          if (Number(tanggalArray[0]) % 100 === 0) {
            if (Number(tanggalArray[0]) % 400 === 0) {
              jumlahHariTanggalLahir = 29 - tanggalArray[2]; 
            }
            else {
              jumlahHariTanggalLahir = 28 - tanggalArray[2];
            } 
          }
          else {
            jumlahHariTanggalLahir = 29 - tanggalArray[2];
          }
        }
        else {
          jumlahHariTanggalLahir = 28 - tanggalArray[2];      
        }
      }
      else {
        jumlahHariTanggalLahir = 30 - tanggalArray[2];
      }
    }
    else {
      jumlahHariTanggalLahir = 31 - tanggalArray[2];
    }
  }
  else {
    if (tanggalArray[1] % 2 === 0) {
      jumlahHariTanggalLahir = 31 - tanggalArray[2];
    }
    else {
      jumlahHariTanggalLahir = 30 - tanggalArray[2];
    }
  }

  for (var i = Number(tanggalArray[1])+1; i <= 12; i++) {
    if (i < 8) {
      if(i % 2 === 0) {
        if (i === 2) {
          if (Number(tanggalArray[0]) % 4 === 0) {
            if (Number(tanggalArray[0]) % 100 === 0) {
              if (Number(tanggalArray[0]) % 400 === 0) {
                jumlahHariBulanLahir = jumlahHariBulanLahir + 29;
              }
              else {
                jumlahHariBulanLahir = jumlahHariBulanLahir + 28;
              } 
            }
            else {
              jumlahHariBulanLahir = jumlahHariBulanLahir + 29;
            }
          }
          else {
            jumlahHariBulanLahir = jumlahHariBulanLahir + 28;
          }
        }
        else {
          jumlahHariBulanLahir = jumlahHariBulanLahir + 30;
        }
      }
      else {
        jumlahHariBulanLahir = jumlahHariBulanLahir + 31;
      }
    }
    else {
      if(i % 2 === 0) {
        jumlahHariBulanLahir = jumlahHariBulanLahir + 31;
      }
      else {
        jumlahHariBulanLahir = jumlahHariBulanLahir + 30;
      }
    }
  }

  var jumlahHariBulanSekarang = 0;
  var jumlahHariTanggalSekarang = Number(dd);

  for (var i = 1; i < Number(mm); i++) {
    if (i < 8) {
      if(i % 2 === 0) {
        
        if (i === 2) {
          if (Number(yyyy) % 4 === 0) {
            if (Number(yyyy) % 100 === 0) {
              if (Number(yyyy) % 400 === 0) {
                jumlahHariBulanSekarang = jumlahHariBulanSekarang + 29;
              }
              else {
                jumlahHariBulanSekarang = jumlahHariBulanSekarang + 28;              } 
            }
            else {
              jumlahHariBulanSekarang = jumlahHariBulanSekarang + 29;
            }
          }
          else {
            jumlahHariBulanSekarang = jumlahHariBulanSekarang + 28;
          }
        }
        else {
          jumlahHariBulanSekarang = jumlahHariBulanSekarang + 30;
        }
      }
      else {
        jumlahHariBulanSekarang = jumlahHariBulanSekarang + 31;
      }
    }
    else {
      if(i % 2 === 0) {
        jumlahHariBulanSekarang = jumlahHariBulanSekarang + 31;
      }
      else {
        jumlahHariBulanSekarang = jumlahHariBulanSekarang + 30;
      }
    }
  }

  var jumlahTotal = jumlahHariTanggalLahir + jumlahHariTanggalSekarang + jumlahHariTahun + jumlahHariBulanSekarang + jumlahHariBulanLahir;

  document.getElementById('hasil').innerHTML = 'Selalu bersyukur yaa, ' + tarikNama + ', Anda telah hidup selama ' + jumlahTotal + ' hari';
}

