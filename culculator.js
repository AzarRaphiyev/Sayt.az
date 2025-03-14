const murekkeblikInput = document.getElementById("murekkeblikInput");
const seyfeId = document.getElementById("seyfeId");
const ilkxerc = document.getElementById("ilkxerc");
const statikSəhifələrUmumi = document.getElementById("statikSəhifələrUmumi");
const elavelerxerc = document.getElementById("elavelerxerc");
const elavelerUmumi = document.getElementById("elavelerUmumi");
const amoH = document.getElementById("amoH");
const ETE = document.getElementById("ETE");
const etexerc = document.getElementById("etexerc");
const eticaretUmumi = document.getElementById("eticaretUmumi");
const logoinp = document.getElementById("logoinp");
const logoxerc = document.getElementById("logoxerc");
const logoUmumi = document.getElementById("logoUmumi");
const totalQiymet = document.getElementById("totalQiymet");
const amoHXerc = document.getElementById("amoHXerc");
const amoHUmumi = document.getElementById("amoHUmumi");

let hisse1Qiymet = 0;
let hisse2Qiymet = 0;
let hisse3Qiymet = 0;
let hisse4Qiymet = 0;
let hisse5Qiymet = 0;

ilkhissehesabla();
function ilkhissehesabla() {
  ilkxerc.innerHTML = `${seyfeId.value} səhifə / ₼ ${
    seyfeId.value * murekkeblikInput.value * 100
  }`;
  statikSəhifələrUmumi.innerHTML = `₼ ${
    seyfeId.value * murekkeblikInput.value * 100
  }`;
  hisse1Qiymet = seyfeId.value * murekkeblikInput.value * 100;
  showTotalCost();
}

const VebSaytElaveleri = [
  {
    name: "Blog",
    price: 200,
  },
  {
    name: "Üzv girişi /‍‍‍ Profillər",
    price: 400,
  },
  {
    name: "Responsive",
    price: 100,
  },
  {
    name: "Forum",
    price: 400,
  },
  {
    name: "Mesajlaşma",
    price: 50,
  },
  {
    name: "Canlı Söhbət",
    price: 50,
  },
  {
    name: "Qalereya",
    price: 100,
  },
  {
    name: "Əlaqə Forması",
    price: 100,
  },
  {
    name: "Saytda Axtarış",
    price: 100,
  },
  {
    name: "Xəritə Məlumatı / Geolocation",
    price: 100,
  },
  {
    name: "Rezervasyon",
    price: 400,
  },
  {
    name: "Sosial Media inteqrasiyası",
    price: 50,
  },
  {
    name: "Analitika / İzləmə",
    price: 50,
  },
  {
    name: "Admin Panel",
    price: 300,
  },
];
const elaveler = document.getElementById("elaveler");
showElaveler();
function showElaveler() {
  elaveler.innerHTML = "";
  VebSaytElaveleri.forEach(
    (item) =>
      (elaveler.innerHTML += `<label
                    onclick="emeliyyat()"
                    class="relative xl:items-center gap-x-2 flex cursor-pointer justify-between"
                    ><div class="w-3/4">
                      <span class="text-sm font-medium text-gray-900"
                        >${item.name}</span
                      >
                    </div>
                    <div>
                      <input data-ad=${item.name} data-price=${item.price} class=" calcInp sr-only peer" type="checkbox" name="${item.name}" />
                      <div
                        class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:right-[22px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all duration-300 after:duration-300 peer-checked:bg-mainLightPurple"
                      ></div></div
                  ></label>`)
  );
}
function emeliyyat() {
  const calcInp = document.querySelectorAll(".calcInp");
  let sum = 0;
  calcInp.forEach((item) => {
    const button = item.nextElementSibling;
    if (item.checked) {
      sum += Number(item.getAttribute("data-price"));
      button.style.backgroundColor = "#9b59b6";
    } else {
      button.style.backgroundColor = "#ddd";
    }
  });
  elavelerxerc.innerHTML = `₼ ${sum}`;
  elavelerUmumi.innerHTML = `₼ ${sum}`;
  hisse2Qiymet = sum;
  showTotalCost();
}

const checkboxes = document.querySelectorAll("input[type='checkbox']");
const costDisplay = document.getElementById("cost");

const amo = [
  {
    name: "Başlıqlar & Meta",
    price: 200,
  },
  {
    name: "Açar söz",
    price: 300,
  },
  {
    name: "+20 Qabaqcıl Texnika",
    price: 300,
  },
  {
    name: "Başlıq Teqləri",
    price: 100,
  },
  {
    name: "Sitemap",
    price: 100,
  },
];
showamoSec();
function showamoSec() {
  amoH.innerHTML = ``;
  amo.forEach(
    (item) =>
      (amoH.innerHTML += ` <div class="inline-flex items-center">
                    <label
                    onclick="emeliyyat3()"
                      class="relative flex items-center mr-2 rounded-full cursor-pointer"
                      for=${item.name}
                      data-ripple-dark="true"
                      ><input
                        data-ad=${item.name} data-price=${item.price}
                        id=${item.name}
                        class="calcInp3 before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-all duration-500 before:absolute before:top-2/4 before:left-2/4 before:block before:h-8 before:w-8 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-mainLightPurple checked:bg-mainLightPurple checked:before:bg-mainLightPurple hover:before:opacity-40"
                        type="checkbox"
                        name=${item.name} />
                      <div
                        class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="1"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          ></path>
                        </svg></div></label
                    ><label
                    onclick="emeliyyat3()"
                      class="mt-px text-gray-700 cursor-pointer select-none"
                      for=${item.name}
                      >${item.name}</label
                    >
                  </div>`)
  );
}
function emeliyyat3() {
  const calcInp = document.querySelectorAll(".calcInp3");
  let sum = 0;
  calcInp.forEach((item) => {
    const parentLabel = item.parentElement; // Doğru elementi seçirik
    if (item.checked) {
      sum += Number(item.getAttribute("data-price"));
      parentLabel.style.backgroundColor = "#9b59b6";
    } else {
      parentLabel.style.backgroundColor = "#ddd";
    }
  });
  amoHXerc.innerHTML = `₼ ${sum}`;
  amoHUmumi.innerHTML = `₼ ${sum}`;
  hisse4Qiymet = sum;
  showTotalCost();
}

const elektronTicarətElavələri = [
  {
    name: "Ödəniş",
    price: 200,
  },
  {
    name: "Səbət",
    price: 500,
  },
  {
    name: "Məhsullar",
    price: 300,
  },
  {
    name: "Bəyəndiklərim",
    price: 300,
  },
  {
    name: "Filtr",
    price: 30,
  },
  {
    name: "Məhsul Haqqında",
    price: 20,
  },
];
showETE();
function showETE() {
  ETE.innerHTML = ``;
  elektronTicarətElavələri.forEach(
    (item) =>
      (ETE.innerHTML += `<label
        onclick="emeliyyat2()"
        class="relative xl:items-center gap-x-2 flex cursor-pointer justify-between"
        ><div class="w-3/4">
          <span class="text-sm font-medium text-gray-900"
            >${item.name}</span
          >
        </div>
        <div>
          <input data-ad=${item.name} data-price=${item.price} class=" calcInp sr-only peer" type="checkbox" name="${item.name}" />
          <div
            class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:right-[22px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all duration-300 after:duration-300 peer-checked:bg-mainLightPurple"
          ></div></div
      ></label>`)
  );
}

function emeliyyat2() {
  const calcInp = document.querySelectorAll(".calcInp");
  let sum = 0;
  calcInp.forEach((item) => {
    const button = item.nextElementSibling;
    if (item.checked) {
      sum += Number(item.getAttribute("data-price"));
      button.style.backgroundColor = "#9b59b6";
    } else {
      button.style.backgroundColor = "#ddd";
    }
  });
  etexerc.innerHTML = `₼ ${sum}`;
  eticaretUmumi.innerHTML = `₼ ${sum}`;
  hisse4Qiymet = sum;
  showTotalCost();
}
logoemeliyyat();
function logoemeliyyat() {
  logoxerc.innerHTML = `₼ ${logoinp.value * 100}`;
  logoUmumi.innerHTML = `₼ ${logoinp.value * 100}`;
  hisse5Qiymet = logoinp.value * 100;
  showTotalCost();
}

function showTotalCost() {
  totalQiymet.innerHTML = `
    ₼  
    ${
      Number(hisse1Qiymet) +
      Number(hisse2Qiymet) +
      Number(hisse3Qiymet) +
      Number(hisse4Qiymet) +
      Number(hisse5Qiymet)
    }`;
}
