const divs = Array.from(document.getElementsByTagName("div"));

divs.forEach((div) => {
  div.addEventListener(
    "click",
    () => {
      alert(`ELEMEN ${div.getAttribute("id").toUpperCase()}`);
    },
    true
  );
});
