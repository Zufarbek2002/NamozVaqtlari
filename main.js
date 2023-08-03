const regionName = document.querySelector('.region_name')
const bomdod = document.querySelector('.bomdod')
const quyosh = document.querySelector('.quyosh')
const peshin = document.querySelector('.peshin')
const asr = document.querySelector('.asr')
const shom = document.querySelector('.shom')
const hufton = document.querySelector('.hufton')

function regionsValue() {
  let selectedValue = document.querySelector('#regions').value;
  let API = `https://islomapi.uz/api/present/day?region=${selectedValue}`;

  fetch(API)
    .then((request) => {
      return request.json()
    })
    .then((data => {
      regionName.innerHTML = `${data.region}`;
      bomdod.innerHTML = `Bomdod <br> ${data.times.tong_saharlik}`;
      quyosh.innerHTML = `Quyosh <br>${data.times.quyosh}`;
      peshin.innerHTML = `Peshin <br>${data.times.peshin}`;
      asr.innerHTML = `Asr <br>${data.times.asr}`;
      shom.innerHTML = `Shom <br>${data.times.shom_iftor}`;
      hufton.innerHTML = `Hufton <br>${data.times.hufton}`;
  }))
  .catch((err) => {console.log(err);})
  }

 regionsValue()
