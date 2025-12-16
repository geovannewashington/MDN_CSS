const el = document.getElementById("myStyleElement");

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
