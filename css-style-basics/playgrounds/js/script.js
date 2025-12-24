const el = document.getElementById("myStyleElement");
const hpBar = document.querySelector('#hp-bar');
const labelHp = document.querySelector('.label-hp-bar');
const hpBox = document.querySelector('.box');

hpBar.addEventListener("input", () => {
  labelHp.innerText = hpBar.value;
  hpBox.style.width = `${hpBar.value}%`
  console.log(`${hpBar.value}`)
});

async function fetchJsonStyle() {
const url = "http://localhost:5000/";
  try {
    const res = await fetch(url, {
      method: "GET",
      mode: "cors",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch json style file");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error:", err.message);
  }
}

function applyElements(el, styles) {
  for (const key in styles) {
    el.style[key] = styles[key];
  }
}

fetchJsonStyle().then((data) => {
applyElements(el, data);
});
