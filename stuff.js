export const cards = [
  { id: 1, name: "Han Solo", face:false , img:'https://res.cloudinary.com/dfbflavif/image/upload/v1726829135/pics/han_solo_r0p9br.jpg' },
  { id: 2, name: "Luke Skywalker" ,face:false, img:'https://res.cloudinary.com/dfbflavif/image/upload/v1726829139/pics/luke__skywalker_pfukxf.jpg'},
  { id: 3, name: "Princess Leia" ,face:false, img:'https://res.cloudinary.com/dfbflavif/image/upload/v1726829138/pics/princess_leia_yrlb2i.jpg'},
  { id: 4, name: "Chewbacca" ,face:false ,img:'https://res.cloudinary.com/dfbflavif/image/upload/v1726829141/pics/chewbacca_tvdfqy.webp'},
  { id: 5, name: "R2D2" ,face:false ,img:'https://res.cloudinary.com/dfbflavif/image/upload/v1726829141/pics/r2d2_sekmva.jpg'},
  { id: 6, name: "C3PO" ,face:false ,img:'https://res.cloudinary.com/dfbflavif/image/upload/v1726829135/pics/c3po_hyyatx.webp'},
  { id: 7, name: "Darth Vader" ,face:false ,img:'https://res.cloudinary.com/dfbflavif/image/upload/v1726829135/pics/darth_vader_lqfi7f.jpg'},
  { id: 8, name: "Muff Tarkin" ,face:false ,img:'https://res.cloudinary.com/dfbflavif/image/upload/v1726829856/pics/bobba_fett_t2dwhd.png'},
  { id: 9, name: "Stormtrooper" ,face:false ,img:'hhttps://res.cloudinary.com/dfbflavif/image/upload/v1726829136/pics/stormtrooper_bqh8u3.jpg'},
  { id: 10, name: "Ben Obi-Wan Kenobi" ,face:false ,img:'https://res.cloudinary.com/dfbflavif/image/upload/v1726829140/pics/obi_wan_kenobi_pwh8nz.webp'},
  { id: 11, name: "Jabba The Hutt" ,face:false ,img:'https://res.cloudinary.com/dfbflavif/image/upload/v1726829905/pics/jawa_zf3du9.png'},
  { id: 12, name: "Ewok" ,face:false ,img:'https://res.cloudinary.com/dfbflavif/image/upload/v1726829139/pics/ewok_uidvsf.jpg'},
  { id: 13, name: "Bobba Fett" ,face:false ,img:'https://res.cloudinary.com/dfbflavif/image/upload/v1726829856/pics/bobba_fett_t2dwhd.png'},
  { id: 14, name: "Lando Calrissian" ,face:false ,img:'https://res.cloudinary.com/dfbflavif/image/upload/v1726829690/pics/lando_oojspz.png'},
  { id: 16, name: "The Rancor" ,face:false ,img:'https://res.cloudinary.com/dfbflavif/image/upload/v1726830125/pics/rancor_hnngvf.png'},
  { id: 17, name: "Sarlacc" ,face:false ,img:'https://res.cloudinary.com/dfbflavif/image/upload/v1726830075/pics/sarlacc_xsrxgw.png'},
  { id: 18, name: "Bib Fortuna" ,face:false ,img:'https://res.cloudinary.com/dfbflavif/image/upload/v1726829136/pics/bib_fortuna_vjop55.jpg'},
  { id: 19, name: "Wampa" ,face:false ,img:'https://res.cloudinary.com/dfbflavif/image/upload/v1726829726/pics/wampa_a2nyxr.png'},
  { id: 20, name: "Admiral Piett" ,face:false ,img:'https://res.cloudinary.com/dfbflavif/image/upload/v1726829138/pics/admiral_piett_rga7ya.jpg'},
  { id: 21, name: "Figrin Dan" ,face:false ,img:'https://res.cloudinary.com/dfbflavif/image/upload/v1726829615/pics/frigrin_dan_tke2bb.png'},
  { id: 22, name: "Admiral Ackbar" ,face:false ,img:'https://res.cloudinary.com/dfbflavif/image/upload/v1726829140/pics/admiral_advark_zqy8uc.jpg'},
  { id: 23, name: "Tusken Raider" ,face:false ,img:'https://res.cloudinary.com/dfbflavif/image/upload/v1726829136/pics/tusken_raider_ln3fs2.jpg'},
  { id: 24, name: "Quai Gon Jin" ,face:false ,img:'https://res.cloudinary.com/dfbflavif/image/upload/v1726830159/pics/quai_gon_jin_mbrdy1.png'},
  { id: 25, name: "Padme Amidala" ,face:false ,img:'https://res.cloudinary.com/dfbflavif/image/upload/v1726829136/pics/padme_amidala_kcmpig.png'},
  { id: 26, name: "Anakin Skywalker" ,face:false ,img:'https://res.cloudinary.com/dfbflavif/image/upload/v1726829140/pics/anakin_skywalker_wnqohs.jpg'},
  { id: 27, name: "Watto" ,face:false ,img:'https://res.cloudinary.com/dfbflavif/image/upload/v1726829467/pics/watto_hr5g5i.png'},
  { id: 28, name: "Sebulba" ,face:false ,img:'https://res.cloudinary.com/dfbflavif/image/upload/v1726829802/pics/sebulba_kapayn.png'},
  { id: 29, name: "Jar Jar Binks" ,face:false ,img:'https://res.cloudinary.com/dfbflavif/image/upload/v1726829657/pics/jar_jar_binks_emsacm.png'},
  { id: 30, name: "The Emperor" ,face:false ,img:'https://res.cloudinary.com/dfbflavif/image/upload/v1726829999/pics/the_emperor_hzanq1.png'},
];

export function GetRandomNumber() {
  let group = [];

  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * (30 - 1) + 1);
    group.push(randomNumber);
  }
  return group
}
