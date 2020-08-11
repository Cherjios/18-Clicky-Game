img =
[
    {
      "id": 1,
      "image":
        "https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y"
    },
    {
        "id": 2,
        "image":
          "https://i.picsum.photos/id/1062/5092/3395.jpg?hmac=o9m7qeU51uOLfXvepXcTrk2ZPiSBJEkiiOp-Qvxja-k"
      },
      {
        "id": 3,
        "image":
          "https://i.picsum.photos/id/152/3888/2592.jpg?hmac=M1xv1MzO9xjf5-tz1hGR9bQpNt973ANkqfEVDW0-WYU"
      },
      {
        "id": 4,
        "image":
          "https://i.picsum.photos/id/168/1920/1280.jpg?hmac=mVK82R-5FsJLUcjRsdWA1-NdN6xw6MexzmRmtqNpWUs"
      },
      {
        "id": 5,
        "image":
          "https://i.picsum.photos/id/169/2500/1662.jpg?hmac=3DBeyQbiPxO88hBdhIuFPbvy2ff7cm9vmnq8lPIL9Ug"
      },
      {
        "id": 6,
        "image":
          "https://i.picsum.photos/id/179/2048/1365.jpg?hmac=GJyDjrvfBfjPfJPqSBd2pX6sjvsGbG10d21blr5bTS8"
      },
      {
        "id": 7,
        "image":
          "https://i.picsum.photos/id/182/2896/1944.jpg?hmac=lzw4TC7qF2R3BEJu05d0M6rdglY57ugjugCP6XoiMbQ"
      },
      {
        "id": 8,
        "image":
          "https://i.picsum.photos/id/200/1920/1280.jpg?hmac=-eKjMC8-UrbLMpy1A4OWrK0feVPB3Ka5KNOGibQzpRU"
      },
      {
        "id": 9,
        "image":
          "https://i.picsum.photos/id/215/3264/2448.jpg?hmac=u-g_DAEnfO1tx6Y9o80X1qzqC7rpmPHJ94JhqVa8SCI"
      },
      {
        "id": 10,
        "image":
          "https://i.picsum.photos/id/219/5184/3456.jpg?hmac=2LU7i3c6fykd_J0T6rZm1aBoBmK4ivkH1Oc459aRUU0"
      },
      {
          "id": 11,
          "image":
            "https://i.picsum.photos/id/218/4752/3168.jpg?hmac=Orn41GOM38rjA-HLzG_hpWi1sfLgnsAAvpiB-uwjvf0"
        },
        {
          "id": 12,
          "image":
            "https://i.picsum.photos/id/237/3500/2095.jpg?hmac=y2n_cflHFKpQwLOL1SSCtVDqL8NmOnBzEW7LYKZ-z_o"
        },
        {
          "id": 13,
          "image":
            "https://i.picsum.photos/id/244/4288/2848.jpg?hmac=R6j9PBP4aBk2vcEIoOPU4R_nuknizryn2Vq8GGtWTrM"
        },
        {
          "id": 14,
          "image":
            "https://i.picsum.photos/id/25/5616/3744.jpg?hmac=-arXS3jYY2wz-lLUaSF2TzodrlDHDa-F8FPkrH-uxUI"
        },
        {
          "id": 15,
          "image":
            "https://i.picsum.photos/id/258/4608/3072.jpg?hmac=9JDdAUW9UW7NRF3l4D2IOVQ76bw1hMxcnoLdQvwLxjA"
        },
        {
          "id": 16,
          "image":
            "https://i.picsum.photos/id/275/4288/2848.jpg?hmac=DHPZUN0qLc6KRiIP21_mfYCi-BxH9JKNYPPJRhG8t40"
        },
        {
          "id": 17,
          "image":
            "https://i.picsum.photos/id/278/5616/3744.jpg?hmac=zawPeNcfplftQYUkYorkAo_ez3gdySyhS6BczFLG2g0"
        },
        {
          "id": 18,
          "image":
            "https://i.picsum.photos/id/306/1024/768.jpg?hmac=rXix18Pn1poetHRHwu28zu8hUP0KobfXP28uQgomRAI"
        }
   
  ];



console.log(img);


function randomNumber(){
    let min = Math.ceil(1);
    let max = Math.floor(18);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function randomImgObj () {
    var newImgObj = {};

    for(var i=0; i < 18; i++){
     let  number = randomNumber();
      newImgObj[i] = img[number];
    }
    return newImgObj;

  }
  var newObj ={};

  newObj = randomImgObj();

  console.log(newObj);