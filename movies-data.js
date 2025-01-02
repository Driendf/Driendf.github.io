const _0x3b46da=_0x11ac;function _0x11ac(_0x158aa6,_0xac3b8){const _0x5ade72=_0x5ade();return _0x11ac=function(_0x11acdc,_0x56abcd){_0x11acdc=_0x11acdc-0x18d;let _0x14df85=_0x5ade72[_0x11acdc];return _0x14df85;},_0x11ac(_0x158aa6,_0xac3b8);}(function(_0x4c1723,_0x45c707){const _0x23c139=_0x11ac,_0x3c0470=_0x4c1723();while(!![]){try{const _0x3bedfe=-parseInt(_0x23c139(0x18f))/0x1+-parseInt(_0x23c139(0x191))/0x2+-parseInt(_0x23c139(0x195))/0x3*(parseInt(_0x23c139(0x199))/0x4)+parseInt(_0x23c139(0x194))/0x5+parseInt(_0x23c139(0x198))/0x6+parseInt(_0x23c139(0x197))/0x7*(-parseInt(_0x23c139(0x18e))/0x8)+parseInt(_0x23c139(0x190))/0x9;if(_0x3bedfe===_0x45c707)break;else _0x3c0470['push'](_0x3c0470['shift']());}catch(_0x10fc01){_0x3c0470['push'](_0x3c0470['shift']());}}}(_0x5ade,0x90b89));const galleryContainer=document[_0x3b46da(0x18d)](_0x3b46da(0x196)),paginationContainer=document[_0x3b46da(0x18d)](_0x3b46da(0x193)),searchBar=document[_0x3b46da(0x18d)](_0x3b46da(0x192)),filterDobladoButton=document['getElementById']('filter-doblado');function _0x5ade(){const _0x5b72a8=['238847yXLCru','5690676NtqmVw','3491528hyUFqb','getElementById','40qPyTOy','637470rCNnBy','8687331BUenXU','536956HHMuwL','search-bar','pagination','3142535vACpTZ','3PRUmkz','gallery-container'];_0x5ade=function(){return _0x5b72a8;};return _0x5ade();}let currentPage=0x1,filterDoblado=![],searchTerm='';const itemsPerPage=0x21;



// Lista inicial de películas
let movies = [
{
    title: "De Regreso a los 80 (Doblado)",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9dNahqih6zPBsPcIZWABQngbdXu9ucAk7pls5fx63MYSmyOo2Ewlvz16G56NNUFzSzhHJzqTOLkPUz_Pdb2LNaIUMkGokwKmv_1E2yKGp1CBBUtoDfLLWjjdvnV6k1gmDWeH9H66cxxBJdfcFk2NlPVovJPl65_wRt4OwrjKnvPpyo6xZpgoDcuAWoIQ/w600/0000.jpg",
    doblado: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/de-regreso-los-80.html"
},
{
    title: "Rechazada por el Alfa (Doblado)",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKcUl-nmBbgahQmtjB60jPgfwJYVSxrRdwi32GD0TmMiqcCabZCZEma0Nh9eGRF-jApSj3NUGzZOIR5gzs3p-zwhwCHm4Lqhk8EXvFQyaEpA92Nx10Wil1-WM59jBp2nMRglWs204Mqw4-f29-S9vUjO3BqvmChLVEp0aqHPQ6Wl5sc6qEfgH3h94Z4qU/w600/000.jpg",
    doblado: true,
    link: "https://dramabreezemovie.blogspot.com/2025/01/rechazada-por-el-alfa-doblado.html"
},
{
    title: "Puño de hierro, corazón tierno",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVDjc7ZhuCfo1C05S9-pDLOjJrpa5Ms0eDM-oWivtDEoZQLlZRDCJUC5U_DaJGeg9VF1Weg-TtOfSszkKRWOE4wcQBor0Vi1gam2F8qMKdNQ9OSs-tfIJqNkVTC84RYSn9PWyQNHR56WgM00HXxolPSgwAVG-dPpQ7EjXX1NNAQ1F52CxBHU_D_ODThCo/w600/000.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/puno-de-hierro-corazon-tierno.html"
},
{
    title: "La Reina Implacable",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwfe-228Cz1yvd30skfHwKox-iHinZAedu8SuXEiEWAzMOv0lFZbJoc-M1saydT7qFWw47B5EAU9Q_1Z_ycgroi2dk4yAhcJay-HG388QkUlFvh9eFipp9R2QWga8JtsNcjsGI7rQWFBITJHUKNfr3nUTyEdBJiTxhGYigveFslRmrkf-Zb3PRNhgdYug/w600/5a2ccae0-b2e3-11ef-a2d6-41216ff1602c.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/12/la-reina-implacable.html"
},
{
    title: "Después de Cortar Lazos: Cuatro Hermanas Suplican Mi Regreso",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1C1b3ivHO-VxL-xjoiN8lfyVkJnVhgRNIT5rEzxVTMooUw3HBLIVPHRmRNRIV2EBMqnCiy-r_FUBwycfWLvDYwDgxw_KMEUYzWZEaRsWloZzlZmH392F_eW-BTtzdK5A6WfT_gSiZDJqMuZDJRF3WagX303dEMd2NQ_tYf7gbraLrBwGLhLvOUzEszwQ/s200/41000109036.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/cuatro-hermanas-me-rogaron-que-volviera.html"
},
  {
    title: "La doble vida de mi esposo multimillonario (Doblado)",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9aleENLlGSKbcbkRyYRd_cYWXO7DPPgMmMIV8RCYbo42NKE1HXJfHV867ei0A11bROaVB15DTaTg6_iRM5NAbVkY6nvblPdGoW6d9LsHDiMH3kriz-kPIwVx9RusmKqe8Gwvwd8K4Sxv7UNKF2pd5foFoMfEOM3qqlewoFYzC01xiU-3K8QTBHjHlhAo/w600/00.jpg",
    doblado: true,
    link: "https://dramabreezemovie.blogspot.com/2024/12/la-doble-vida-de-mi-esposo.html"
  },
  {
    title: "El aroma viene del dolor",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpMx2-OaUzsoCgVMpHdfIkBfum-1pcUx-VRe0E0-6MoUDNEQbwLo6i0ShcM1eowba25LwiSfqy6Y08B1ULAonetp5Ow_YMcifevtBvJP-vmZ33ylbV8byN98T85JU-9y25U4ZonbVWDjZFJLelLbuQU-QEPfn5oqC5baE20NSFWRQdkJ-CHATBMg9UjxGx/s2200/ae424cf0bd0a41c1abc587576cc2f5da.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/12/la-luz-que-salio-de-las-sombras.html"
  },
  {
    title: "La venganza de la esposa XXL",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJo1pVSmPbSPMmRwPpcjjn_k24NYvcEKPk-ZugaV1pdLYeuqy7b1rno0NHg1G3HyOpdfcVR_wBCrH8v3iWgDr4xMpGcwY7-PuPsOdpI8dXABU1243-CMvTefchE63O7ZtU4PR3_VfWBOxY8oLn6NX9sfSp7rd1shI3-u51fsHhcYb0MmCytJ9_r4whFCA/w600/00.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/12/la-venganza-de-la-esposa-xxl.html"
  },
  {
    title: "Lanza Fénix (Doblado)",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBAldafMrwOy270ATiLklmGmsfUXyw-QEBEasoeQxekVOmBz_024-FttA7hjpea4CrW2Ys63Lt9TFGrXKOfzjuxRUihYGPNUigSRtUil1lfS3ChRjAUWc3mW7A5X-q0hn6mQTNNXowf4Py5GCtmvKGQOTimnhoqxEvnPaS0ntiNGoseprwLqItJfiOR_w/s2200/000.jpg",
    doblado: true,
    link: "https://dramabreezemovie.blogspot.com/2024/12/lanza-fenix-doblado.html"
  },
{
    title: "Boda con el heredero desconocido (Doblado)",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRZkEMOTbuRMRKcUJH4yLbL2-R8glwSkUTu-xoPNi75uN_a7_g4qQB48HJUosAQ_OUu7OAbAKDqqSKQJmgc7rwv2Iy8a09VZRzv3zmybwurLtzt37zYv0MsVb_lUf6zBBFphqlk7zuKLc2Io3A7sLk2WdoswR4vutLXkkfpjBxauQCyQaSKQK9FDdotrc/w600/T1%20EP.000%20%28Latino%29%20Boda%20con%20el%20heredero%20desconocido%20%28Doblado%29.jpg",
    doblado: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/boda-con-el-heredero-desconocido-doblado.html"
},
{
    title: "Los Verdaderos Familiares Se Atraen entre Sí",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIoUCsxHd9eaG6iK6tN1_jEXuf-mskqL6xgZ_XHUMJIYBPw6QpxV4hMflNeuYh2NjrLB6Kv5-nVrv2aBI-7jOiRMwx7dwX91pzZfVCKsCrj1wMDCft6MC1Obl5xS0hkOn9EH29EV8FlL-3Qg14gO2vAkawZ_WRtBdVVrf_OxQUcYFXzEg4x6wqlJhfU8w/w600/T1%20EP.000%20%28SubEsp%29%20Los%20Verdaderos%20Familiares%20Se%20Atraen%20entre%20S%C3%AD.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/los-verdaderos-familiares-se-atraen.html"
},
{
    title: "El Amor Después de la Muerte",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9gzLI-7fqmT6_ex8gVn-0EjxG9IrkbIpM96uo8NAYXvy-qwkvdFa6zxsBdSZ5ymg0UCDgufMZBWuoMxuYLb5mK_w0I-4PAXFKPOGFyEcHeFhggFkuLybvPWx9sDJqiSxrn3G9pjU-tmCbkd2Qs8M_ID0oR52SYMfZYTH74EMxHISnUw_T_zYwAd899y8/w600/T1%20EP.000%20%28SubEsp%29%20El%20Amor%20Despu%C3%A9s%20de%20la%20Muerte.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/el-amor-despues-de-la-muerte.html"
},
{
    title: "El Gran Amor Materno",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEirIFGecsmj5tvaYnY5nQknxNDWj1NMdu-A-R4-ssQt6VOG_wu5nFyZMHRoArz51N_vihSFyJp1Ez6k3r_nLIIme5yfjyF4z8qrrY0X0Mwn8HCTvPom6HIfpOxseT0UH-eAkmAeYP0kZ1564O1QfjAf1uzNMI3U-yCjiwAClPqgtZGvsO2Gs40xO7A9RYw/w600/T1%20EP.000%20%28SubEsp%29%20El%20Gran%20Amor%20Materno.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/el-gran-amor-materno.html"
},
{
    title: "Embarazo Inesperado",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUrcVW0GZlRLvlDPECLHtbiPjlJ1LLOAko90d_qRZXUYyGnh59hT2XvpAzc6F5AZs-BTxpxpTxgg-fQpsjCNVTuzIuRhk9JFcwZcfMn4AUN5WtDKoiriMukMTml34h-T9L1GqAvgJv5-sP2Rcvt5pFUVva9DUQJCCRigbcB7GnPDENbQm1TRpngRUsqhw/w600/000.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/embarazo-inesperado.html"
},
{
    title: "La Heredera Rechazada",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDaeWb2OCYGtokT6ztVTZKkR7OWKmbLVpGfufwCqTxihyphenhyphenruIHxx22ng_SJaSLA_MknR42jzma0oD0u7Bh-H1nZjgdDsSNxgHlAKPVQYOE4Wn3wAxCz9qzs_zuYkoEq0WD5uJoETzZLujV_J7Z1iexWTijCovuf5oKTLQYRl-O3CKi9f-g65CQr-DZYrkc/w600/T1%20EP.000%20%28SubEsp%29%20La%20Heredera%20Rechazada.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/la-heredera-rechazada.html"
},
{
    title: "Intriga y Amor",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiiTHtC0ZJPoWOgpnVWWNEg6EmaO49nwkgcnhmNJbK3D4su8Vrvc5d2Vuae_vH_DE_V6DyG8UH5IGAZeDG2TufqybOksK0RQGTkfkHdPtIYaSTXFZKE_YW4ZChTMmI7y_toGBI506WPcE2dKQmNAAEyvIqjfl-tFbRGnb5i26lY5YfYH8Ugf7WItSYA-Mg/w600/T1%20EP.000%20%28SubEsp%29%20Intriga%20y%20Amor.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/intriga-y-amor.html"
},
{
    title: "Una Noche Para Siempre",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwOXkepON5wsQsg5f-LOkSRMrDyxKp9EflvYD0hpkir8t1-8TN7rZu5txE-3eGGo3WeioPGC5CLA1f5Or2NyI_CHtQEydQ1awW6kEWdTZJoXZ_y6hG_flULfKN1z9HEW1vv16VwsiuxtgIfbZ5O3jaGDXgLzmZha3HNOS0_Y_ee51ueRHzhs_c7FqN-8E/w600/T1%20EP.000%20%28SubEsp%29%20Una%20Noche%20Para%20Siempre.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/una-noche-para-siempre.html"
},
{
    title: "Cuando Ella Vuelve a Levantarse",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIJ-KUU6A7o8JK2J1uVqFZpRANL8oBnlE9gwby-rdeN9DiHcmygQsK2AuouMDWJ46EqrPrzK5ce41zh4dqTXGgvHSugwtHy0SNf5czeUCNgRKhiv9GuSX8KWKQ45fbqk00m5ywFHETc9XjStMlizGOS2-3Hh7YKqAUSF9_t_vIY1a2UE7hLzoCu5f4vQU/w600/000.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/cuando-ella-vuelve-levantarse.html"
},
{
  title: "Renacer en los 80 De Esposa Gorda a Reina del Éxito",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDF-SIks1Oyiht4IdGRCrL0PUVR_1mQka0jglrbWSocU1kP_4KzX7Czn9AENUWB6_zcp95ak3gMLMnQXKurzR68p9482IXoFpYRfQN7vm2CqK9Mamk2usDFFkQIYx9QOIq6UhBA3svSorBQZmcVxYKctAim-3RPtQkkrt7peSUVOt7-H22NkCobyggk0c/w600/0000.jpg",
  Subtítulos: true,
  link: "https://dramabreezemovie.blogspot.com/2024/11/renacer-en-los-80-de-esposa-gorda-reina.html"
},
{
  title: "De Amante por Contrato a Novia del Multimillonario",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUkZDtFupBtqWvtZ436bJOk0SjHMptUQ3z-3dwSgOEjuNw6XhKZIeZS8DuS4w0btAbhyMklLCc7LVyDH6CoLQaXNdo4ubjerMB3PXraI-ZzT3FCtTZUqv3L5IFMo7D84Av8mRR1oOg1WvO_BoimlJ_TsBxzbF90fl8u3kYBIpRSWMJ19Y5DhWV1My_En0/w600/T1%20EP.000%20%28SubEsp%29%20La%20Buena%20Chica%20de%20la%20Mafia.jpg",
  Subtítulos: true,
  link: "https://dramabreezemovie.blogspot.com/2024/11/de-amante-por-contrato-novia-del.html"
},
{
  title: "Destinos Entrelazados - Sus Recuerdos Robados",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNbyLB-_iTsLZpYetbf3CKev0RGT0GBDX22TaSjCdyCkw433sIkoTubc1OFYdJiWKXs5NMFOXQPIAg3jJEM389G3hpqa8SO8eMQYhV1SUP8Qj7Ul_WyACsFRkpvnYfrM5g32uF57yG90JlxCar0edv36w2-dyb5r-sZQ1HsDu5PF0Wu7MUp4mAtWpOU9w/w600/T1%20EP.000%20%28SubEsp%29%20Destinos%20Entrelazados%20-%20Sus%20Recuerdos%20Robados.jpg",
  Subtítulos: true,
  link: "https://dramabreezemovie.blogspot.com/2024/11/destinos-entrelazados-sus-recuerdos.html"
},
{
  title: "Mi Hijo, el Magnate más Rico",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2YLS4MQVHM24RYbwe0v3TwJGXUbA7tUzbVaiYqDN-4i_XlUFRVYmMWKtf1veUgAdUsirJ_d-C0C4VCkpmIxf3uTyxNti_GwyQRZYdxbWfMdNbzp7RSmOzl6GvRfPxQXnYvDw_ZTU_mdOH89VAwBJdwNClQk7V2toejkX7mKHgB9jgn0fVchEPfgxoneM/w600/T1%20EP.000%20%28SubEsp%29%20Mi%20Hijo,%20el%20Magnate%20m%C3%A1s%20Rico.jpg",
  Subtítulos: true,
  link: "https://dramabreezemovie.blogspot.com/2024/11/mi-hijo-el-magnate-mas-rico.html"
},
{
  title: "Destinos Cambiados",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjEzYC9lXqUGWs_lEqR6W7ovD5C5bSo-T25_vdMmZVlWMTvIXDlPZjuVg4vOZMBcS3sYPj_7TVy-vCZUu5irJLA79UUSLZzCTOPbioBQeXDf7zW6Ec4cjW2Nsbns8ynTCGobmKPzy4AZZGaUkXTjGHUG-0fMOtqlBEPi6HR5ZMgo-Po3RIqvu9xHK7Q1tc/w600/T1%20EP.000%20%28SubEsp%29%20Destinos%20Cambiados.jpg",
  Subtítulos: true,
  link: "https://dramabreezemovie.blogspot.com/2024/11/destinos-cambiados.html"
},
{
  title: "Matrimonio instantáneo con mi marido hombre lobo",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLhKOld_hyphenhyphendsKLyqkLnHvtHP3Ss3BIWCTzvxvCBBvTbgTDiTL1yMw62SxzloIv2u-R028QdrSP1mnMHzHFYWnGOHwbFSG_H0I_sk4sO9yM-vLf7r_Mrf3xBA4mJiyUxmfeqq0_EaXmsZGHOiH51FFCf0bZ0KLk3oZMj0uSEPEaWCm4Fy538pL6NJNCkAc/w600/T1%20EP.000%20%28SubEsp%29%20Matrimonio%20instant%C3%A1neo%20con%20mi%20marido%20hombre%20lobo.jpg",
  Subtítulos: true,
  link: "https://dramabreezemovie.blogspot.com/2024/11/matrimonio-instantaneo-con-mi-marido.html"
},
{
  title: "Yo Vengo de la Montaña",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFqZwPelgz5cZQyP3kQ2wCTvvYmlbI8GybdYo9GncJRa_v0dBXzzp1Uwq3gLYZO-NZTd-sHpAK4jS9LYyI6ZB8hruRMJbJj_-ZKwDSw8uuGzWlmek4AGGFIfMPdro2NE-xOVgYDil_xL4mf44El7XOIxfwORmaF9sI0NDiztQ5IPkq2Jrjhr7z2U3oJvo/w600/T1%20EP.%20000%20%28SubEsp%29%20Yo%20Vengo%20de%20la%20Monta%C3%B1a.jpg",
  Subtítulos: true,
  link: "https://dramabreezemovie.blogspot.com/2024/11/yo-vengo-de-la-montana.html"
},
{
  title: "Vuelve a la Cumbre",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiB_qAWtm91-Ovsw29f98sILEQid_uXGLvtbd68H-0uax2JIkMiFIwQZrD-dFRv0CVEGVJUGlsJhjDcsTQbEs14N0LNk_1hwnrNku1jv_SlE2vmiLTEX7PTO8Ahkdvy5-2rl_NP4ms6uT2IudzCMTpAtiBlyX_k1kopI8cWVkp_eG4zeAS6MqyH3aH-Rs8/w600/T1%20EP.000%20%28SubEsp%29%20Vuelve%20a%20la%20Cumbre.jpg",
  Subtítulos: true,
  link: "https://dramabreezemovie.blogspot.com/2024/11/vuelve-a-la-cumbre.html"
},
{
  title: "El Regreso de la Reina Dominante",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLoI_VUlzP6NUmQ_BQ7eCgDBksmY85NvSK_uaxXi_MjUfmTHVI7p-xWPMYcMUuoeqMQav4Lf8MhtZjrRWCZonbz1lFb6M1dqIgSwVGBtlIjZgcjHydiO0x3AWY4MtOUcBFc-yGn6qniOcMAG4hTnuJPv8qDTrF9EMSEsIFe6VaU1j_3vd44o2CWCR0-Vg/w600/T1%20EP.000%20%28SubEsp%29%20El%20Regreso%20de%20la%20Reina%20Dominante.jpg",
  Subtítulos: true,
  link: "https://dramabreezemovie.blogspot.com/2024/11/el-regreso-de-la-reina-dominante.html"
},
{
  title: "Fortunas Reveladas: Mi Esposo Es Poderoso (Doblado)",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjq4W7j-JAyIS07_4bScBdIan_niFBz92HaptRWJJXi5Rd26wTmNpVW8-Lb1GVHw6WF-ILqpwnK-McKcD4S653ebhKA-m22PogajVp7J9A5gf87wJ2Pem_zvlAksIY6m_X9V_KZwAbYaOS-aHK_peROIrpScEimHwZtF938WzsppajUjqiU_7EcuSYvopo/w600/T1%20EP.000%20%28Latino%29%20Fortunas%20Reveladas%20Mi%20Esposo%20Es%20Poderoso%20%28Doblado%29.jpg",
  doblado: true,
  link: "https://dramabreezemovie.blogspot.com/2024/11/fortunas-reveladas-mi-esposo-es-poderoso.html"
},
{
  title: "En Busca de Ella",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLEgBCSq1ngSmReDTBvw622PxGGfCd9549aKy8jDSpr4d6YM4oMFL4lo2ofC0_0GMukqpJLopd-7s7NDSO0mj9847t28KbCsrp2oQcU5BqqJmVQJMuRon5iD6O3IAvj38YC8df5GvQQ69NSQGENel_Rc08Agc0-qx0KAkEhok223wEWHE-e3nSjxjA8ow/w600/000.jpg",
  Subtítulos: true,
  link: "https://dramabreezemovie.blogspot.com/2024/11/en-busca-de-ella.html"
},
{
  title: "Recuerdos de Amor",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVlPPv6nyvQ80kuqAo_u7aHDLYt72-5K2Iy2nvtmY8ANzacGQgMNjjx2aAMnOcP6ospRDXGQgAfH0zg42f85A3P4iThxrcRA2ZzDaw-6yJ59OVA7r-2g6_5pUBrgNNpgfNUDYJIOpFvBZ9x8bzSjzfhQpcrkUOemDtD2EkbEfWzX6G90OCKYChGI06wVA/w600/T1%20EP.000%20%28SubEsp%29%20Recuerdos%20de%20Amor.jpg",
  Subtítulos: true,
  link: "https://dramabreezemovie.blogspot.com/2024/11/recuerdos-de-amor.html"
},
  {
    title: "Un maestro oculto",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivZd_bqbi09ctR7fW_uN9HNvgVmDtUqO3Jg2-Jy9A_VLoDwh1XSDN736uF6r8_3QYJh0hmMsyqLoaiQZfzHbeAyP46_Xi781c3WRtvcTBXXHyUyx52F9ul_xhFzRhFGvhnuR90Ft44A2Pn2fh0lmCBCUIIO0DUIhDPvKW2KFOzrSRuefN3bLSlvZM_Cm4/w600/T1%20EP.000%20%20%28SubEsp%29%20Un%20maestro%20oculto.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/12/un-maestro-oculto.html"
  },
{
    title: "Emperatriz del Mundo del Entretenimiento",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEig9-lHrqi2gVWjUc8HN_hCzXIYJTRMPnbehTHANwH61DvqD9XLLAqO8PeL63OIl3a6KDigN8ILZ7zqaFpxnfUVnVoOw6DklJb-B98FgMNkXNgyRLLyXGqS52lehV4sFCX2EPpbmX8NOiF-M3Zb_wNVZvpYMDQl3bEbdP0-my4Tl-FkXHfYvkjFgK7DNBU/w600/001s.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/12/emperatriz-del-mundo-del-entretenimiento.html"
},
{
    title: "La Venganza De La Emperatriz",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMKgOmGUrdVmlPmThbWgSR6ynWhhArLqGhKX-cd6-e30Plw29BsMXi_xv0HnqDccd4yDCbSt5ee34F5X3_tcGRpyzGW4unqc9YpYi1IIcY5TVtXhJENWP9Qob98E2cQY-IL9w_OgM91jnMQUQ63FQNPjyZez-Ykh-HNnyvDUfkETrLoICi26JZEgazzXk/w600/FUe9P3T8dPwUhZWf-croppedlr24q-.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/12/la-venganza-de-la-emperatriz.html"
},
{
    title: "Cuando Mis Hermanas Me Piden Perdón",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMGBKPTSR6p9ynxTF462yj77DQ0Z6H-GZQ850Wjr2dBiECCaVWDRCD9uSb6DGkwjmZuKRPWYt3kzBUssCLI6pBByGnwudAPwbtH-Q5m1qPRa38AeGmZBUfTlI0KgBBn6EW7dxV42E4rWUGpEVvQx8aOKLkZT6M7uStbvb3Y6nHcMvz1G7xlqEO7Ca7f3g/w600/0000000.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/12/cuando-mis-hermanas-me-piden-perdon.html"
},
{
    title: "¡Papi, Mami, Les Leo la Mente!",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhL55sZUlAxbOPDBjD6yxSDY_joZIXQV5EYppafe-CZYMVXSPMQjSMX6TWPZslvNhxWEGFS3XFN4ONriwjUxoKLQtk-9I-1hgihn99x1fEdg-idqJ-OqDItKU3RgqmDr1b9clR7UZWK0Ed4WNKiy1oqQiNkyvTMufoD2J1M6kHlbGUA4_xdQGhKtQzJk10/w600/000.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/12/papi-mami-les-leo-la-mente.html"
},
{
    title: "El Renacer de la Esposa Gorda",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioYM2xKykALeTi7iPOc1jumlStVzOz5MGTotrEFdXZop5-39FG7X5eoVNvhDk1QUjSFPQmBWK01ofFPC5mve0-D4Thcr0d7oKXBtWrOiI0uQ19GPfgDIIUtK5ZGnapKr8T0mlmPF4KytKCBBfAX4smNWKKa0VAIJ6qshjDY-59iRzI2tfLZ8O_PVnjpDs/w600/00.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/12/el-renacer-de-la-esposa-gorda.html"
},
{
    title: "Tu lugar es a mi lado (Doblado)",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvPUi6DLKN1zpSPXcrUlmPFo1VEgJ2ArwWTuODkDLhiaogagy2i82s-tM9Y9ti-aJRJDSj37qJkd6qrsfaiNiDPs2Frq_O5d_2PODi2sVVxf0kJo6apaJkkrVv4LLo3Az7Ud39KRW_Y77ScfDJ6xyn0VAMy-JMuHeZl2rdF7I9Rob1mlK6snF2FUe6Y00/w600/0000.jpg",
    doblado: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/tu-lugar-es-mi-lado.html"
},
{
    title: "Eres Mi Único Amor",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgHSs79KR0KnFEut2vrhGkVgfAGepwVjvvIWiXWe9eO2cFtvPsI2GG3vDkKF6E-LIOZ9vUY6yTia7LzyF0dQY3fdAlv1hmWLV9k6yzkohpszhakzZFFuerdKTUX2vDBcOFFf57TNYhrS5UT4JiB63vK58CMMOJaB87D8TihYUWdCYEUdkCwivSNzyK3-wE/w600/000.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/eres-mi-unico-amor.html"
},
{
    title: "Mi Fiera Esposa Es Una Tonta",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhw9xDAyd_ztUt6nY_FF1n9XgdcA4OGg9Hs55zthrWrDakA5BoNAwWfvpvAbxnN9uIgcAno41EVT1cAP4xySA0sGgJ6Ay8vAHznhF09J8txjDWecf6YDBYFW1O3ei3o6cpGRlDo9lQ_14xCLwl8IV6FFXOHLTEdPkFSDA1OBqIYpO7k1NFcPzut8vVgwIQ/w600/00.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/mi-fiera-esposa-es-una-tonta.html"
},
{
    title: "Mi Hija es la Suprema",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPfftpQWHiedZhiv_uTmnfUTN29H8jG7OofqeNSBzqWYp5v_zu0YsJZSl-y-7kqA-9AC8oDbQ9Thalp0eAbByk78doK1Y0oiCbQiJq7hxRZ3ilCShGF1yKCaH8bI4Dv7ZuElhjXtv_oEP2ez5uptqAzDq6tVe_v2u6pLCbQ87un7FPQU3QKcLFHYz2aqs/w600/000.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/mi-hija-es-la-suprema.html"
},
{
    title: "Mi capitán Alfa",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhR09RgN0VxH9l81lwe8b5lNH3zF6-MQ5PbeJQDrOq-ajjfBleNXotuubNjqEtrWTn2VUfsoM0MBtoRrYHtvzHFjLf2UNvWEraLA3udxoZFELfTltziT9EPatRv_3j5XiQrOd4axBovEKWEKPl_rRzz7ICKvOSyK_UwkJFUXP9Fl6g7nI2ZA9VIgx1q8fA/w600/T1%20EP.000%20%28SubEsp%29%20Mi%20capit%C3%A1n%20Alfa.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/mi-capitan-alfa.html"
},
{
  title: "La niña del destino La eleccion de Asya",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgA5d4uzNgmwU3SOPh2HqyZ0Gds5tCdq33k_FP-QZtA9spc9aOcGJ1GAxpj0Yvx3FyGoEnE_pAAi5PV3kEgU_7Ao8ML-j_Gt0rHj1cf0CBd2-Gq0R3JWfjFlF0hSE2Ki75vzbOA3YSP5gtLFL8Wkpsyj_-B20ydTXipm9EX2_1irib2z-kWemmerKM_Ono/w600/0000.jpg",
  Subtítulos: true,
  link: "https://dramabreezemovie.blogspot.com/2024/11/la-nina-del-destino-la-eleccion-de-asya.html"
},
{
  title: "Venganza Enmascarada - En Nombre de Mi Hermana",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8QvTaTomtX3C0bu51wzdQ0AVgHhe3TS5PhJacRtzdXPwRW0xHwdYyipD4RLzBFgdLqh4zsF8jRfElhZUohiiYmSemH_zoyWMH4eeVEz4LkyMCxxIO1t7sPAptS8xYkr5QMaRUb9d1E4yAg51o5rtPQwF6mHLr3qzCDG07tHlqh3Klsvcj4QLPo_FhiIg/w600/T1%20EP.000%20%28SubEsp%29%20Venganza%20Enmascarada%20-%20En%20Nombre%20de%20Mi%20Hermana.jpg",
  Subtítulos: true,
  link: "https://dramabreezemovie.blogspot.com/2024/11/venganza-enmascarada-en-nombre-de-mi.html"
},
{
  title: "El Valor del Amor",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKGUMpd8taagew-UiDccyJ2Y36tNbo_Iaem-bwJ0xII_9ujMJiE-ka58AR2P9Eci2loEoM0TXpcbyhPfL31pBiLqq-iJm902cKjWSbb-0LdpCFcCBOc9y6p6PkIP1XDqBx-nop93l_bBvrSa0eNM2FoN6xSAGmDSzObDiy_RS_uN6XA_AnJjP8q-IvGHM/w600/000.jpg",
  Subtítulos: true,
  link: "https://dramabreezemovie.blogspot.com/2024/11/el-valor-del-amor.html"
},
{
  title: "La Buena Chica de la Mafia",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWB-xEQt5_8frRozThNjXGRX2jcE7aU4cHndisFVGyaLJRFENSbhRw_zi1Oi0_NI1gqRkbUl3PVVnKxKDPpNALsojj7hGRvzqENJfLjIiNmdN8ss30FYI8yZ92r3zCng-y_ussziVWjwPrGqaB8NsdD1rTnC9kkj4o2tDltl6zau9GHOqLVoX_H_RGxxA/w600/T1%20EP.000%20%28SubEsp%29%20La%20Buena%20Chica%20de%20la%20Mafia.jpg",
  Subtítulos: true,
  link: "https://dramabreezemovie.blogspot.com/2024/11/la-buena-chica-de-la-mafia.html"
},
{
  title: "Una Noche Destinada con Mi Jefe",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9dTA89aZ4g52nNN0lbXM_97rlcVZYiUOJIVl6i5FtMYEU_L1AqkMRpGJArcK8i563itMrtHxIt7RzASXS6SAZi8yRmaAkMjB360AD2ba97qTlP5HuskJnpu-iWi0BP0vUQ0VvVa5sNnLcZ2GYK8AOeNMd3XEtlxrQ6jZ_7Xz2-LpuTQPdeSEUL_XSn5M/w600/T1%20EP.000%20%28SubEsp%29%20Una%20Noche%20Destinada%20con%20Mi%20Jefe.jpg",
  Subtítulos: true,
  link: "https://dramabreezemovie.blogspot.com/2024/11/una-noche-destinada-con-mi-jefe.html"
},
{
  title: "El Contraataque de la Heredera Verdadera",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMKlOYOTP1iiIiREfMFa-GMMOijZnWHoP9erDHZIiA5Qn1S61kWiD0wpLIAOFMHZARhn1q_C6QFvdbC0pEoEGJeGljK74xFfHXsgo06dW1mwQqeX65eUzE20Nt7HJ2wpf9E74DgAYCS5GTJwo7ctK5sm6utI5cWn-v8A6wyICTEGLj6DeN24mI9CFD84E/w600/T1%20EP.000%20%28SubEsp%29%20El%20Contraataque%20de%20la%20Heredera%20Verdadera.jpg",
  Subtítulos: true,
  link: "https://dramabreezemovie.blogspot.com/2024/11/el-contraataque-de-la-heredera-verdadera.html"
},
{
  title: "Matrimonio por Venganza y Amor Dulce",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhveiSTuEgDUSC42Ywid0fzbwRUEr8I_O0no87pwbAI_5SbW9VXzNLosIKGBEgTJzdwd4ARqXjI9Zrt6Osrgje8CEPku2mAnsa202h18HeX3ur_xGioVmOmnSZP6B3ZO5sUj54-NAHh_gY3OgL5aIIRBFQyyjqZLJzcMv23gYScHwzx01xbqZBQ_Vm_ErQ/w600/T1%20EP.000%20%28SubEsp%29%20Matrimonio%20por%20Venganza%20y%20Amor%20Dulce.jpg",
  Subtítulos: true,
  link: "https://dramabreezemovie.blogspot.com/2024/11/matrimonio-por-venganza-y-amor-dulce.html"
},
{
  title: "Adiós al Pasado No Estará Ciego por el Amor",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhQ4LC7cCTq9iCdw9aZOxi3HR15Ov6Z0GMZ8bgH1-gq1RptvOAcAUG9m3FGv42TA-OnP_AtEBPOoFhWvPTGB2RX-jMmwr-BkHIbeiB1yGkdiBn_fKc7iAJkvQp7OhKwPTXbc9TMMMloAL7x34Ubl-xGUrdyguR2dfBhn8W5fZab5NqYYlJUnG_GY9PDyk/w600/000.jpg",
  Subtítulos: true,
  link: "https://dramabreezemovie.blogspot.com/2024/11/adios-al-pasado-no-estara-ciego-por-el.html"
},
{
  title: "El Código de la Venganza",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5gpTh9Plw8jAHjBf4FviSQEODDTCXioeZFfS2MScpcGg1qAvBc2UP9A479fuG6rY7fArnYIbjzk9kxNstKToNaNQ_dVbsAikS3enuDXBavPIoU6jM3J4enMzdg1DUJNx-OYuJOeBRhspJp3xrDG9WohDEcGHjfm4gEAkuDddgcSZK93IZqL5_xHlN5n8/w600/T1%20EP.000%20%28SubEsp%29%20El%20C%C3%B3digo%20de%20la%20Venganza.jpg",
  Subtítulos: true,
  link: "https://dramabreezemovie.blogspot.com/2024/11/el-codigo-de-la-venganza.html"
},
{
  title: "Levántate y Brilla. Sra. Heredera",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjM5IAT8_bMSt_8-R2JUDghtXvRE2Z-Bo2y1_gqjUmxmKOzP0gQR_YeLOOVKgTI2HSz5s9K4tXH4Js7bvStz_gFV0Tj2vUM0x8JKpo90wvr3o4PmmN0UgFqfSJ5IoaMgICW_L_fIdpVIgKdTHcZhE83bQt0y015_CKlZA9KXwjJgaqDrKFvhi_Nke64AxQ/w600/0000.jpg",
  Subtítulos: true,
  link: "https://dramabreezemovie.blogspot.com/2024/11/levantate-y-brilla-sra-heredera.html"
},

{
  title: "Corazones Entrelazados Una Vez Más",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFIJqBuQd0ULDZAe386-3HZtPdnjqVVOWanGUBzS6daOGKesEfWg2TMDzSuRDNnLNh3gpmGtB1iVxNAbQ8X0T2z9-uUui1JgIjPAXgpv0fFrH_pN-5NPMYPH8l271IwP7IEt5FwxX-XQDsQdg283Trhc265muIfPCv-mpvmPsw4ufRVfAvIseqr2RRuJw/w600/000.jpg",
  Subtítulos: true,
  link: "https://dramabreezemovie.blogspot.com/2024/11/corazones-entrelazados-una-vez-mas.html"
},
{
  title: "Realmente No Soy Inmortal",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqMLJoTBzXP1DCKXO2bSOBe5ri7ryHcXLlT2HFoPxY8tDXAB4bSLdIZDstUxwYRnVHO823v4PxaYJgyBJIgDH_4cohwow0UnsSEiPUdEN3I7yWELv4znvcxZaCui-amjODsHoY6h_MwR_o9oUVLTc6HGSvlBOhTvYNKxosExcrctwj6CHHv4TRqaT_Jb0/w600/00000.jpg",
  Subtítulos: true,
  link: "https://dramabreezemovie.blogspot.com/2024/11/realmente-no-soy-inmortal.html"
},
{
  title: "Mi Esposo Agente Secreto",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVjwHJYUUSGJOpDm-3DxsL_wo0wHgVafNhPQ8ihmUXRW-UV-RhNayTqlMh-P1mPjf_JVCKq_Kri9D-gCvZeTeR1XxYC4v7URLd2Sh2qFZa7ZgNhpDafW2hd7UqenH4s8siHJAABQ98euSV9MT_3bBOsgsGWChxOqI2X3z28RDzt43WXC52A20kxruPa7k/w600/T1%20EP.000%20%28SubEsp%29%20Mi%20Esposo%20Agente%20Secreto.jpg",
  Subtítulos: true,
  link: "https://dramabreezemovie.blogspot.com/2024/11/mi-esposo-agente-secreto.html"
},
{
  title: "La Heredera Multimillonaria Divorciada (Doblado)",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEig2LZnAJoXnMo4wI3w6NU4obFtOc7KAMvyAuBmSKVUXClYi_IPZVbc5hQo4vdb8vhhiNkgEPoOMT8CL0aFIZSPRJo0YkJA4LkvXZI6smRovo9-ptj-yzA_g4XmgaCA-L6LDetT6wCHQ6CMyxN6KYnDxEglwHjDGSouEFe2DNqTGQN_BqhUbGOo7DcPOdQ/w600/T1%20EP.000%20%28Latino%29%20La%20Heredera%20Multimillonaria%20Divorciada.jpg",
  doblado: true,
  link: "https://dramabreezemovie.blogspot.com/2024/11/la-heredera-multimillonaria-divorciada_22.html"
},
{
  title: "Volviendo en el Tiempo Camino a la Riqueza",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvXre9HR1Y4yo4dq4E4g550lVTyQCptPrOAMafp9UFmGIZ_bE5GKa8uIgEUiRkn5mmvs6UQtDHHY29k3j9UjlREu5EBMgIuhuc5MDAA36YKMWDdBhlR3jAVusOwBvMzUkXHIFzAwbC6zmZmycnuYMFX4gDhV-i-lZVorgk0hYMzyouNiVo6uBNpWMb3nI/w600/000.jpg",
  Subtítulos: true,
  link: "https://dramabreezemovie.blogspot.com/2024/11/volviendo-en-el-tiempo-camino-la-riqueza_22.html"
},
{
  title: "Lazo Inesperado Mi Esposo Es un Magnate (Doblado)",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCSqp1yK6WUuL_azzJY36MclGCWBOKzDCIWkoJbAFtjDDUJ20Mfo9-R6qVjJBO31CKWYVJtS8Vb9vUG70gbirWbLrE8vG95DMBQv5TawqO3eUik3j2WwcCoc8hJhj9mZsTSTY_-UiFTr3CKcQcTeUt2TnL38VtesBg9P8FC-qqYCql4Y9GSjdfYBNYPqQ/w600/0000.jpg",
  doblado: true,
  link: "https://dramabreezemovie.blogspot.com/2024/11/lazo-inesperado-mi-esposo-es-un-magnate_22.html"
},
{
  title: "Amor de Familia Llévame a Casa (Doblado)",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1Cstm7LEcH-znOgzMyYA3g_iM2BUJePUATbQ3uVbzKqgB9E5lCuRh-ZcPXeVVWepWFqsnG6zwXNHBB3EiA-HPuu22POOMQFjaT6EusaKZ7EUqP5U1jkOqtq4KsYm6drjANAHjZwn7IPYHdZCZcuS-7rokWHaK287sfaSeQ8PPKb2_zsb_4qOpjSjgCC4/w600/0000.jpg",
  doblado: true,
  link: "https://dramabreezemovie.blogspot.com/2024/11/amor-de-familia-llevame-casa-doblado_22.html"
},
{
  title: "Fachadas que se Desvanecen - Amor más Allá del Contrato (Doblado)",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYavo9WLw4FwgZiVNjtjQa6GHcbvp9r1p_jRFzJe58aDb2Buc2Ts32q4oqmzMfMzhz_M2Bkoicb2v5MSyWvD_RhyphenhyphenX1nM-Kira2QYmDEmBTVRqYAsiU33ZM82JUVGGKXcQXWejNMZpQ9E1dPtSIJgIe4SV0ztXQO4IwxWvdI5pbdciO_b9vYf5rHS6TgaU/w600/T1%20EP.000%20%28Latino%29%20Fachadas%20que%20se%20Desvanecen%20-%20Amor%20m%C3%A1s%20All%C3%A1%20del%20Contrato%20%28Doblado%29.jpg",
  doblado: true,
  link: "https://dramabreezemovie.blogspot.com/2024/11/fachadas-que-se-desvanecen-amor-mas_22.html"
},
{
    title: "El Duque Poderoso",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFkT3W0f3IgKFrDre7198n14XsOeAyuGVXYs_TTb0dkrMTZFKpAxYWnkGiYvFK88TsToGSAGT-6opC-8ulc7fWlIgsvvYIUu2CSCn66mmps_F-6TI2XTsXwnoopSRvsIMYr0KQ1oXHB8uqdBLYJmEfoCrwKUehPiSYUrMRBghnHxzPJeMWdU3xGqJMN3s/w600/0000.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/el-duque-poderoso_22.html"
},
{
    title: "El Regreso del Hombre Poderoso (Doblado)",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKE_2GZpAb7mAHDaPP-dDMHPimi53WRNe-IBRPgDssF0YaE1ScByShnyuz-jaQAxP1gmacNCbtKxr6RxBJsm2-l-notks_T24kUpo-wtKghMKlvhWDWOCvCabZGYCgYRFKJEpDfwJyiRphcSMkuNqxBL7ijpAOCtm8O2AB5uIMiS-lID9p3INI_EttS-c/w600/000.jpg",
    doblado: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/el-regreso-del-hombre-poderoso-doblado_22.html"
},
{
    title: "La Traición del Amor (Doblado)",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcJMeJK4-SpdgCsWxq3GBP_n_hLcQMGpyhMo-5z8Yh26AXvs4d_wWWJSk3jD3yaa2bSnNNw3Lf-5CUT2Z18UbY-LgvKknhmqW2vHghdib20fzya3zeWvZfpMU3_Zz4pB8DWAIsqhItJFG1uvRAM6LacuxL9rwMSjr1ziJnCqWBaNHqJ7KXlLWu4HG2BfM/w600/T1%20EP.000%20%28Latino%29%20La%20Traici%C3%B3n%20del%20Amor.%20Fierce%20Grace.%20Braving%20the%20Betrayal.jpg",
    doblado: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/la-traicion-del-amor-doblado_22.html"
},
{
    title: "El Despertar del Comandante",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhf7hUnRdI1Rnn4bPwM0ewyMMG1c3JX80tT7RaOaVTsMkHJMG2ttPfakckN7szUt3sAqHzbMtZhJDSqypHu6-QnN7BJDtMppPfP3pNHSV8Klx2mdn3upNGHUyoEf_hfqKUMW10Yuh5sQePbpLEWu4kLGDR1XDUhKIkkkE-3YtfJjO5BbNC1ez9MzCmzoEg/w600/T1%20EP.000%20%28SubEsp%29%20El%20Despertar%20del%20Comandante.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/el-despertar-del-comandante_22.html"
},
{
    title: "Más Allá del Tiempo - El Amor Me Trajo a Ti",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihE_2f-K7hyphenhyphenyHFQw_jvipDFu0-vEW3X61q-KuJEwd8eMzRm8v09NpBZl3uvnVKmnLQfqvsrFBYQXGF24w_jmQalyAnLiaZKPeDoRMW0TCohGYjIJvU9PUSgoh1C-QpTU9NN-L1XkeSW6BSrRVD7iuB3CBKt83wHdWLgnNfBbOECPSQ7jawfnTXD1S2GWk/w600/T1%20EP.000%20%28SubEsp%29%20M%C3%A1s%20All%C3%A1%20del%20Tiempo%20-%20El%20Amor%20Me%20Trajo%20a%20Ti.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/mas-alla-del-tiempo-el-amor-me-trajo-ti_81.html"
},
{
    title: "Nunca Te Metas con la Esposa del CEO",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbJwVWaKOocOvbrBqLmZn8DXpN3cnfNPtJ8VcDDg5S3pO5V1dE1BflA8kgn7jAKjPm_ANCFJxVn0fZbwt7CW7AZUAODIwu0wlW3n7sPxEcSltoTx2keNiad3pvFKZxbbazW5zlIlFWlWL-QeUt8eulW95ukGtoqLnNR-JLYPoPnqWGPmwzmtokW1O_WU4/w600/T1%20EP.000%20%28SubEsp%29%20Nunca%20Te%20Metas%20con%20la%20Esposa%20del%20CEO.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/nunca-te-metas-con-la-esposa-del-ceo_24.html"
},
{
    title: "Ojalá Fueras Tú (Doblado)",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGy6PzWI-Sd3wptLVSFJ78tb1LEjh0-6I2NhxI3t4kso6mhlZiWLzmW6mg0B18ArCN9BO0RyoPyWn0mnyJYD6Vt0nAtSHqVaHuK3rggsZmHpxcwAwTtznkAZI6Ty3YQMXVRl_O2zaA5cPzT9aqpAjVCXmPmSfMTZvZxFeHqCqyyUY7TyGAub4LcELtOcI/w600/T1%20EP.000%20%28Latino%29%20Ojal%C3%A1%20Fueras%20T%C3%BA%20-%20I%20wish%20It%20Were%20You.jpg",
    doblado: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/ojala-fueras-tu-doblado_86.html"
},
{
    title: "Vuelta a la ciudad La madre con cinco hijos sesudo",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-EnL5ZWw98KsXtzwEPyd25avD0Eqjw4ouyu5xn87OTGV6n7zuqgjIj9flHBaScZTqdgKx0etWcqQgmY3ag3zd3XZwm7Q7GBXGml7N-yrC0EfIkICQAekUb6BUrMvCoTtohDob4ONv5R6TmUcsPTkaXs7VZFsEOpzkE_XKf6P9yLr8RkjHeAi2AAJwHGs/w600/T1%20EP.000%20%28SubEsp%29%20Vuelta%20a%20la%20ciudad%20La%20madre%20con%20cinco%20hijos%20sesudos.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/vuelta-la-ciudad-la-madre-con-cinco_83.html"
},
{
    title: "Genio incomparable",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiPeE1HO1P1kVgpGntOAk4qJxa3VfEOIkY5H9Z8STZNXiDuaEqTLdsMaFLf_0_LAx9TQQZfjuQy0nCjdbIc-b6EKZayyAHSguZRa90wXq0Xmteyrh0BJ5jk6wUZrEv05FSzFMxx-ss9zCILBeAvwrdfwufx5r-v3RPZ-4X0qLHXGW3OwRNmIDL22MGPqgk/w600/T1%20EP.000%20%28SubEsp%29%20Genio%20incomparable.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/genio-incomparable_45.html"
},
{
    title: "Ups ! El señor Lawson se equivocó de chica (Doblado)",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi43x7gsXSq3abCP6K9F5RJI7f1TXF-gvtY6R9NA4djmLdPTIsDwK0BBiHqo6gyudjm-yOHA1J-VGBxCN8j2AQLdNADAr1wsNUrswxVAet2gDnoUrPfiSkY5aXdzQXG14ijcoBqlu5DGmSAGHigcu1AszaA6B8lVvLTKOMf6n64A2OZSmGQEhMpGPkzNck/w600/T1%20EP.000%20%28SubEsp%29%20Ups%20!%20El%20se%C3%B1or%20Lawson%20se%20equivoc%C3%B3%20de%20chica.jpg",
    doblado: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/ups-el-senor-lawson-se-equivoco-de_93.html"
},
{
    title: "La Reina del Campo de Batalla",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrWpWDWvfptWux1ZOXm48O-S0bzvsUV4-mWgO68CzXb4AB7VFDP_mPbG7uy6PsjUobFLNM3tgPxl7UvR4f2WJCAEMXGGQmpbre_BGtMQ3xqk_F7WRlzEDc75KKM_K6rNLJDQEnYh00RU4c91yVxXyPODNxNg0ZMrdbR7NgpFXctvBrm84UxcQI8TrsFKI/w600/00000.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/test_22.html"
},
{
    title: "Senderos de Esperanza - Su Viaje de Regreso a Casa (Doblado)",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLXDKw5kyFVHnKX6BEnMZz-ttH0D7mPJ60RzHI5po9Pbky8XMIptG86yWrtNfp3QNEgxgbzLdQHbLIvTgabQXrfCnTNG-clPWKAz_Vs2cObeWCqv7VidlCBXz7D0JWOuYZbT-0AFRLQfsLiBopblyqP_XJtk6-zvlBc8DW56in3tPZpuTrTf85GXL_Hn4/w600/T1%20EP.000%20%28Latino%29%20Senderos%20de%20Esperanza%20-%20Su%20Viaje%20de%20Regreso%20a%20Casa.jpg",
    doblado: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/senderos-de-esperanza-su-viaje-de_80.html"
},
{
    title: "Tronos en la Sombra (Doblado)",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-MYrM9ZPtSmpI1dli8Ym-tgyhYMiA-Q2VzjzduZcuvg-jNIv6eACUGfbIE3yk2yQsKtlASf_0qWn94idDakDVcUWhGMq9weSp0Sm9BA8ejYPNqtnU1xqeRhq0smHah1qp5tGaKt7m57PDmxQPwtRBtoxxyZyHlc_lz6UnfHej5PTjUjujNoq3Z7S3jpk/w600/T1%20EP.000%20%28Latino%29%20Tronos%20en%20la%20Sombra%20-%20Shadowed%20Thrones.jpg",
    doblado: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/tronos-en-la-sombra-doblado_39.html"
},
{
    title: "Crisis y redención final",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnUdTt8mMEMxT6d4FaF3uJE_2EPPNAcgJWUY8h5mYEcsCdFy15nOIcNYsRA6aZvAdhxhWx3AbDTZEY4A8bA8rJhZ3HdcSjfXf_oL_gAoJFZ08ZoXsfCG31E8AQtNLLXjFOonhNxLD-GqZNcAX790OgvD6dq3ssJxqM8QRoe7FTRCNtesH8HdRrzxuVQ0Y/w600/T1%20EP.000%20%28SubEsp%29%20Crisis%20y%20redenci%C3%B3n%20final%20%281080%29.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/crisis-y-redencion-final_86.html"
},
{
    title: "Buscador de Tesoros - Los Ojos que Todo lo Ven",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimdXw3QeFhbLsagiVA1mnufkPck0f5AEHMfs7NYkzid4qlHxFbzrB2dVMT9AB5FbMyQTCdj6mNLWiX2uGGil-MLJJRAHY7U_CSHSrIC-KII_Ui9zlee2n1LXHid6GS01rJRnRYnyt7hUpMFsZKibYrlzofom-1bpN4NDOlmzbLVVZHBsjkSIShpoAXQ-w/w600/T1%20EP.000%20%28SubEsp%29%20Buscador%20de%20Tesoros%20-%20Los%20Ojos%20que%20Todo%20lo%20Ven.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/buscador-de-tesoros-los-ojos-que-todo.html"
},
{
    title: "Rompiendo el Hielo (Doblado)",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCalDNuNrvPCd5n7MQBGuJC1aVf-MCPokTuEuqdHllCcfiErvtwkOptswzX6BZuAShpiCCQE9nN74jbfdSDW-VS6FEH0hzNzSpDU4h7GMn3jl7rc6P5UUWHbu_zkqBhJqw6gOJyqyygrVRkeSznhI_VQ3KYpggcNyJ62bPq63XEfuZIJ5Ah73Rb2P_5Bo/w600/T1%20EP.000%20%28Latino%29%20Rompiendo%20el%20Hielo%20%28Doblado%29.jpg",
    doblado: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/rompiendo-el-hielo-doblado.html"
},
{
    title: "La mascarada del multimillonario (doblado)",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimabGkOj0dpmBIcAEyG5KMLR1CXqNhrpFIoQn0pnoMRE50dsL-dAjFGxhcFrKJH6Ovx5Op-wgPYhSFe9wTL-lKHvcjMHtU27YK94vQYJmYqInWfhrychLCAI-OJq8iRK_Au74q9Be4palHMgp3a20mFRHEOKtT3VK4lLOSxJYpAr5jaXaLL6vDIZ5tNgk/w600/T1%20EP.000%20%20%28Latino%29%20La%20mascarada%20del%20multimillonario.jpg",
    doblado: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/la-mascarada-del-multimillonario-doblado.html"
},
{
    title: "Regreso Triunfal Recupera su Gloria",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifk9iF2VxEg60x0h0m-CL3ub7ZBHCjwS-W9q1zRxieWwnx9mnzB83V4yACmJwplVQyltZ9AJsZDPeDlYucpBfAzp6BPyMzLmzVNAKtTIon6M91JOuiEDPCE9naCdbRxIFtLr7IuZbX9iO2TUzqyBhQSsjOhUKW1R3_dZzldI3fsHaZzcMouVWY4WSsMDM/w600/000.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/regreso-triunfal-recupera-su-gloria.html"
},
{
    title: "Señor Reina o Mr. Queen (Doblado)",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjR1WOKKZ5fd6ClPH_WSVlgkuEaQ38riczd6ZohhDYMQjopanfqbeDCwy682NlOFyAkRaBJINK9LN7ii_bv3u3mrjE2sh3-g0ScOlgfpSm5hGVF11IrbZOx5sFzkRF17k0PW0kIb1ll7qYnEqziVMdheqk484GI4i8h5k539n9-2ZzmIOOSbqhdRww-PgI/w600/nzMUCTgifscseMV62JjZE3ilOSx.jpg",
    doblado: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/senor-reina-o-mr-queen-doblado.html"
},
{
    title: "Cuatro hermanas me rogaron que volviera a casa",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjlON3nZFwIwTdsbqQchUqQBP3gwNpGQ3brUBPeYxFzekAfKevksVj2G6dVLIH815Bjh-oL5Ga9NUlRE5Ov98hF09fjDG6kQ8yrtvkowIFwHs5kUG_EzAWoYS_MURD0eIyIpNYxQg6Sbfqx1jiFmOnkcPqBlEDfqx2aLVQT13pqdiRzEMr_F5JNbY4eU0/w600/T1%20EP.000%20%28SubEsp%29%20Cuatro%20hermanas%20me%20rogaron%20que%20volviera%20a%20casa.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/cuatro-hermanas-me-rogaron-que-volviera.html"
},
{
    title: "Una Bella en los 80",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigM90sChnxB9lT8NS6QZg5T_FA9Wr9kt2YHE7s6erlWG4iG7ZB-9vHqYtUvM9sftsUpSpiwE53efPNoamjyKnJm7-A_ZtQWVLFiAdZFHpt5HDKqIM5NOi9SukhEYR7QA6AMyPGtAz1GIluLw2_4W9Vy2E0pyDpq0FPeTQjOyKDJTFAoFo1gftIM8tmO50/w600/T1%20EP.000%20%28SubEsp%29%20Una%20Bella%20en%20los%2080.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/una-bella-en-los-80.html"
},
{
    title: "El Contraataque De La Esposa Gorda",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhG-J_BMX307cR_wUQ2AEED5PqkTJwKerIVit5LflchY_MUpZ9MI1erlYxTyEfU4MMu7nnWybNmQMNTxO0Xf0cK7hm24ihiPpc5ZArGpE2MsYaTa3ixQWz79HmG15UW1iJNwtV2HWxCxbakMYebM-92L5cr5MDZ5mOKw8IfxBABfBunyS78HtRo-V1h8Kg/w600/T1%20EP.000%20%28SubEsp%29%20El%20Contraataque%20De%20La%20Esposa%20Gorda.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/el-contraataque-de-la-esposa-gorda.html"
},
];

// Películas adicionales que se mezclarán
const additionalMovies = [
{
    title: "A Estrella para toda mi vida",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYgLUJVgELPEHrHd52zHdjwpDFMl1DxkH0YQFoscaTvDeIN669wxPuSbKw5oyKLcVPocXw9hBOO4F7SMSn9kTMLHx1in2EnVcpRUGogkeL1rQB5_Qlr5G_l_dES_zywwk95_ZSneHsQxa52bRj4lLbjGtNApY1qZ5Tf5bMhDReopj6MEZsaSNNyDLRUiw/w600/T1%20EP.000%20%28SubEsp%29%20A%20Estrella%20para%20toda%20mi%20vida.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/11/a-estrella-para-toda-mi-vida.html"
},
  {
    title: "La Luz que Salió de las Sombras",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgD7Iuh743e7h8Yx3zC8_q2XsFfYjhV1Ja1uZi_UregWhQZUjj4Hassoi650T-OSgjug85EGyi9nZ3USR_YnUkU_CeoxaAhIOPLwySqFW3qil9fEAP7AsejecvgmhWeQYAmVvWPG5znh3Hqj5GVeKVK4gF_IiMSFweUFXaGl3eEeVxFqRjVUk2_vollUqE/w600/000.jpg",
    Subtítulos: true,
    link: "https://dramabreezemovie.blogspot.com/2024/12/la-luz-que-salio-de-las-sombras.html"
  },
  // Agrega más elementos aquí
];

const _0x1bf682=_0x2954;function _0x2954(_0x1d393a,_0x308c69){const _0x2871b3=_0x2871();return _0x2954=function(_0x2954af,_0x40a949){_0x2954af=_0x2954af-0x11b;let _0x295901=_0x2871b3[_0x2954af];return _0x295901;},_0x2954(_0x1d393a,_0x308c69);}(function(_0x8b5e26,_0x46956d){const _0x1f5550=_0x2954,_0x1b0999=_0x8b5e26();while(!![]){try{const _0x2dd0a9=parseInt(_0x1f5550(0x144))/0x1*(-parseInt(_0x1f5550(0x13d))/0x2)+parseInt(_0x1f5550(0x12a))/0x3+parseInt(_0x1f5550(0x143))/0x4+parseInt(_0x1f5550(0x147))/0x5*(-parseInt(_0x1f5550(0x128))/0x6)+-parseInt(_0x1f5550(0x142))/0x7*(-parseInt(_0x1f5550(0x136))/0x8)+-parseInt(_0x1f5550(0x138))/0x9+parseInt(_0x1f5550(0x139))/0xa;if(_0x2dd0a9===_0x46956d)break;else _0x1b0999['push'](_0x1b0999['shift']());}catch(_0x35ab3d){_0x1b0999['push'](_0x1b0999['shift']());}}}(_0x2871,0x4a851),movies=movies['concat'](additionalMovies));function _0x2871(){const _0xf0d80f=['active','textContent','innerHTML','max','filter','className','button','104rsxxej','disabled','3284685RpsSCL','4380770uSDJsu','backgroundColor','div','length','20258fpGanr','click','</p>\x0a\x20\x20\x20\x20','link','slice','128555FtkRJy','1464600WVEWEb','21FMXoYk','image','createElement','20WiAWYZ','includes','Subtítulos','ceil','...','#ff4d4d','min','\x0a\x20\x20\x20\x20\x20\x20<a\x20href=\x22','add','input','#1c1c1c','</p>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22info\x22>','value','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22','toLowerCase','756486EABGoi','appendChild','1032777bvYUjk','doblado','\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20</a>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22title\x22>','title','addEventListener'];_0x2871=function(){return _0xf0d80f;};return _0x2871();}function renderGallery(){const _0x15dd30=_0x2954;galleryContainer[_0x15dd30(0x131)]='';const _0x2ac648=movies[_0x15dd30(0x133)](_0x4e23fd=>{const _0x541383=_0x15dd30,_0x5089c2=_0x4e23fd['title'][_0x541383(0x127)]()[_0x541383(0x148)](searchTerm[_0x541383(0x127)]()),_0x2984d7=!filterDoblado||_0x4e23fd[_0x541383(0x12b)];return _0x5089c2&&_0x2984d7;}),_0x71ea22=(currentPage-0x1)*itemsPerPage,_0x527582=_0x71ea22+itemsPerPage,_0x5c9c7a=_0x2ac648[_0x15dd30(0x141)](_0x71ea22,_0x527582);_0x5c9c7a['forEach'](_0x5eeaa6=>{const _0x166413=_0x15dd30,_0x3bf03b=document[_0x166413(0x146)](_0x166413(0x13b));_0x3bf03b[_0x166413(0x134)]='gallery-item',_0x3bf03b[_0x166413(0x131)]=_0x166413(0x120)+_0x5eeaa6[_0x166413(0x140)]+_0x166413(0x126)+_0x5eeaa6[_0x166413(0x145)]+'\x22\x20alt=\x22'+_0x5eeaa6['title']+_0x166413(0x12c)+_0x5eeaa6[_0x166413(0x12d)]+_0x166413(0x124)+(_0x5eeaa6['doblado']?'Doblado':_0x166413(0x11b))+_0x166413(0x13f),galleryContainer['appendChild'](_0x3bf03b);});}function renderPagination(){const _0x33c49c=_0x2954;paginationContainer[_0x33c49c(0x131)]='';const _0x4ee607=movies['filter'](_0x1bbf1d=>{const _0x26227f=_0x33c49c,_0x537105=_0x1bbf1d[_0x26227f(0x12d)][_0x26227f(0x127)]()['includes'](searchTerm['toLowerCase']()),_0x29616c=!filterDoblado||_0x1bbf1d['doblado'];return _0x537105&&_0x29616c;}),_0x2f7968=Math[_0x33c49c(0x11c)](_0x4ee607[_0x33c49c(0x13c)]/ itemsPerPage),_0x485b9c=0x3,_0x10d0c1=Math[_0x33c49c(0x132)](0x1,currentPage-_0x485b9c),_0x1e3df4=Math[_0x33c49c(0x11f)](_0x2f7968,currentPage+_0x485b9c);if(currentPage>0x1){const _0xffb52e=document['createElement']('button');_0xffb52e['textContent']='1',_0xffb52e[_0x33c49c(0x12e)](_0x33c49c(0x13e),()=>{currentPage=0x1,renderGallery(),renderPagination();}),paginationContainer[_0x33c49c(0x129)](_0xffb52e);const _0x305d08=document['createElement'](_0x33c49c(0x135));_0x305d08[_0x33c49c(0x130)]=_0x33c49c(0x11d),_0x305d08[_0x33c49c(0x137)]=!![],paginationContainer[_0x33c49c(0x129)](_0x305d08);}for(let _0x54d34f=_0x10d0c1;_0x54d34f<=_0x1e3df4;_0x54d34f++){const _0x3fbb06=document[_0x33c49c(0x146)](_0x33c49c(0x135));_0x3fbb06[_0x33c49c(0x130)]=_0x54d34f,_0x54d34f===currentPage?_0x3fbb06['classList'][_0x33c49c(0x121)](_0x33c49c(0x12f)):_0x3fbb06[_0x33c49c(0x12e)]('click',()=>{currentPage=_0x54d34f,renderGallery(),renderPagination();}),paginationContainer['appendChild'](_0x3fbb06);}if(currentPage<_0x2f7968){const _0x60771c=document[_0x33c49c(0x146)](_0x33c49c(0x135));_0x60771c['textContent']=_0x33c49c(0x11d),_0x60771c[_0x33c49c(0x137)]=!![],paginationContainer[_0x33c49c(0x129)](_0x60771c);const _0x5abdc2=document[_0x33c49c(0x146)](_0x33c49c(0x135));_0x5abdc2[_0x33c49c(0x130)]=_0x2f7968,_0x5abdc2['addEventListener'](_0x33c49c(0x13e),()=>{currentPage=_0x2f7968,renderGallery(),renderPagination();}),paginationContainer[_0x33c49c(0x129)](_0x5abdc2);}}searchBar[_0x1bf682(0x12e)](_0x1bf682(0x122),()=>{const _0x4ff73c=_0x1bf682;searchTerm=searchBar[_0x4ff73c(0x125)],currentPage=0x1,renderGallery(),renderPagination();}),filterDobladoButton[_0x1bf682(0x12e)](_0x1bf682(0x13e),()=>{const _0x35584c=_0x1bf682;filterDoblado=!filterDoblado,filterDobladoButton['style'][_0x35584c(0x13a)]=filterDoblado?_0x35584c(0x11e):_0x35584c(0x123),currentPage=0x1,renderGallery(),renderPagination();}),renderGallery(),renderPagination();
//]]>
