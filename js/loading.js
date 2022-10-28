const setTimeoutLoading = setTimeout(showPage, 2000);

function showPage() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("loading-icon").style.display = "none";
  document.getElementById("header").style.display = "block";
  document.getElementById("content").style.display = "block";
  document.getElementById("footer").style.display = "block";
};