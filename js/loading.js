var loading;

function setTimeoutLoading() {
  loading = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("content").style.display = "block";
}

setTimeoutLoading();